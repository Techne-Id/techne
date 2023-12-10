const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;

// Konfigurasi Passport.js - GitHub Strategy
passport.use(
  new GitHubStrategy(
    {
      clientID: "52d52fa05010a2b22ec7",
      clientSecret: "cd6037a937cc7be4d2c880373d6bf9b36f484cc8",
      callbackURL: "http://localhost:3000/api/auth/github/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      // Logika autentikasi GitHub
      // Proses autentikasi dan pengembalian pengguna
      userProfile = profile;
      return done(null, userProfile);
    }
  )
);
