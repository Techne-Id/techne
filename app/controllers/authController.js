"use strict";

const bcrypt = require("bcrypt");
const authModel = require("../models/auth"); // Sesuaikan dengan nama file dan path model Anda
const saltRounds = 10;
const jwt = require("jsonwebtoken");

// Secret key for JWT
const secretKey = process.env.TEST;

class AuthController {
  async login(req, res, next) {
    console.log(req.body);
    try {
      const { identifier, password } = req.body;
      console.log(identifier);
      const user = await authModel.getUserByIdentifier(identifier);
      if (user && (await bcrypt.compare(password, user.password))) {
        console.log("Login Berhasil");
        const token = jwt.sign({ userId: user.id, username: user.username, email: user.email, name: user.first_name }, secretKey, { expiresIn: "1h" });
        // Simpan token di dalam cookie dengan atribut Secure dan HttpOnly.
        res.cookie("token", token, {
          httpOnly: true,
          secure: true, // Hanya aktifkan saat menggunakan HTTPS.
          sameSite: "strict", // Berlaku untuk lalu lintas yang sama.
        });
        res.json({ token });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    } catch (error) {
      console.log(error); // Tambahkan baris ini
      res.status(500).json({ message: "An error occurred" });
    }
  }

  async register(req, res, next) {
    console.log(req.body);
    try {
      const { first_name, last_name, username, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      await authModel.registerUser(first_name, last_name, username, email, hashedPassword);

      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "An error occurred" });
    }
  }

  async logout(req, res, next) {
    try {
      // req.logout(); // Hapus data sesi Passport
      req.session.destroy(); // Hapus seluruh sesi

      // Hapus token atau identifikasi pengguna dari sisi server
      // Misalnya, jika menggunakan cookie, hapus cookie
      res.clearCookie("token");

      // Lakukan tindakan logout lainnya seperti membersihkan sesi, dll.

      res.status(200).json({ message: "Logout successful" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "An error occurred during logout" });
    }
  }

  async githubCallback(req, res, next) {
    try {
      const { id, username, displayName, emails, provider } = req.user; // Data pengguna dari Passport GitHub

      console.log(emails[0].value);
      let user = await authModel.getUserByIdentifier(emails[0].value);

      if (!user) {
        // Jika pengguna belum ada, tambahkan ke basis data
        user = await authModel.registerUser(displayName, "", username, emails[0].value, provider); // Tambahkan password default jika diperlukan
      } else if (user.login_by !== provider) {
        // Jika pengguna sudah terdaftar dengan provider yang berbeda
        return res.status(401).json({ message: `Please login using ${user.login_by}` });
      }

      const token = jwt.sign({ userId: user.id, username: user.username, email: user.email, name: user.first_name }, secretKey, { expiresIn: "1h" });
      res.cookie("token", token, { httpOnly: true, secure: true, sameSite: "strict" });
      res.redirect("/success"); // Redirect ke halaman sukses
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "An error occurred during GitHub authentication callback" });
    }
  }

  async googleCallback(req, res, next) {
    try {
      const { id, username, displayName, emails, provider } = req.user; // Data pengguna dari Passport GitHub
      const email = emails[0].value;
      let user = await authModel.getUserByIdentifier(emails[0].value);

      if (!user) {
        // Jika pengguna belum ada, tambahkan ke basis data
        user = await authModel.registerUser(displayName, "", "", email, "", provider); // Tambahkan password default jika diperlukan
      } else if (user.login_by !== provider) {
        // Jika pengguna sudah terdaftar dengan provider yang berbeda
        return res.status(401).json({ message: `Please login using ${user.login_by}` });
      }

      const token = jwt.sign({ userId: user.id, username: user.username, email: user.email, name: user.first_name }, secretKey, { expiresIn: "1h" });
      res.cookie("token", token, { httpOnly: true, secure: true, sameSite: "strict" });
      res.redirect("/success"); // Redirect ke halaman sukses
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "An error occurred during Google authentication callback" });
    }
  }
}

module.exports = new AuthController();
