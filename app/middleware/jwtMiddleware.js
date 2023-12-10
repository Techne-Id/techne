const jwt = require("jsonwebtoken");
const secretKey = process.env.TEST;

class Middleware {
  async jwtMiddleware(req, res, next) {
    // const token = req.header("x-auth-token");
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Access denied. Token not provided." });
    }

    try {
      const decoded = jwt.verify(token, secretKey);
      req.user = decoded; // Store the decoded user information in the request object
      next();
    } catch (error) {
      res.status(400).json({ message: "Invalid token." });
    }
  }

  async pageMiddleware(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
      req.user = "";
      next();
    }
    try {
      const decoded = jwt.verify(token, secretKey);
      req.user = decoded; // Store the decoded user information in the request object
      next();
    } catch (error) {
      req.user = "";
      console.log("Invalid bro");
      next();
      // res.status(400).json({ message: "Invalid token." });
    }
  }
}

module.exports = new Middleware();
