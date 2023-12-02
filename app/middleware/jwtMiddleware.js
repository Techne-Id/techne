const jwt = require("jsonwebtoken");
const secretKey = process.env.TEST;

function jwtMiddleware(req, res, next) {
  const token = req.header("x-auth-token");

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

module.exports = jwtMiddleware;
