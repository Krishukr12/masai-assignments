import { NextFunction, Request, Response } from "express";
import { blacklistedTokens } from "../const/blacklistedToken";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "jwt_secret";

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "No token provided" });
    return;
  }

  if (blacklistedTokens.has(token)) {
    res.status(403).json({ message: "Token is blacklisted" });
    return;
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    (req as any).user = user;
    next();
  });
};
