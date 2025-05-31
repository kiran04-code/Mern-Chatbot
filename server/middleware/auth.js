import { validUser } from "../AuthJwt/jwt.js";

export function checksAuth(cookieName) {
  return (req, res, next) => {
    const token = req.cookies[cookieName];
    if (!token) {
      return next(); // No token, continue without user
    }

    try {
      const payload = validUser(token);
      req.user = payload;
    } catch (err) {
      console.error("Token validation error:", err.message);
      // Optionally: clear cookie or handle the error
      req.user = null;
    }

    next(); // Continue to next middleware
  };
}
