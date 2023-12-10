const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

// Konfigurasi Passport.js - Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: "357192451720-j1pqg62u2ke2updfrfaga3j8prm03sjf.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:3000/api/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      // Logika autentikasi Google
      // Proses autentikasi dan pengembalian pengguna
      userProfile = profile;
      return done(null, userProfile);
    }
  )
);
