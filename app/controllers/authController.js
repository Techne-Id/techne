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
      const { username, password } = req.body;
      const user = await authModel.getUserByUsername(username);
      if (user && (await bcrypt.compare(password, user.password))) {
        console.log("Login Berhasil");
        const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: "1h" });
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
}

module.exports = new AuthController();
