import { verifyToken } from "../utils/jwt.utils.js";

const isAuthorized = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No token provided" });
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }

    req.user = decoded;
    next();
  } catch (error) {
    console.error("Authorization error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default isAuthorized;
