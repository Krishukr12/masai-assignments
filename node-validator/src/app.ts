import express, { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { blacklistedTokens } from "./const/blacklistedToken";
import { authenticateToken } from "./middleware/authenticateToken";

dotenv.config();

const app = express();
const PORT = process.env.PORT ?? 8000;

const JWT_SECRET = process.env.JWT_SECRET || "jwt_secret";

app.get("/login", (req: Request, res: Response) => {
  const user = { id: 1, username: "Krishan Kumar Safi" };
  const token = jwt.sign(user, JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
});

app.get("/black-list", authenticateToken, (req: Request, res: Response) => {
  res.send("This route is protected and token is valid");
});

app.post("/logout", authenticateToken, (req: Request, res: Response) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1];
  if (token) {
    blacklistedTokens.add(token);
  }
  res.json({ message: "Logged out and token blacklisted" });
});

app.get("/", (req: Request, res: Response) => {
  res.send("working fine");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
