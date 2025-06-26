"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 8000;
const JWT_SECRET = process.env.JWT_SECRET || "mysecret";
const blacklistedTokens = new Set();
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader === null || authHeader === void 0 ? void 0 : authHeader.split(" ")[1];
    if (!token)
        return res.status(401).json({ message: "No token provided" });
    if (blacklistedTokens.has(token)) {
        return res.status(403).json({ message: "Token is blacklisted" });
    }
    jsonwebtoken_1.default.verify(token, JWT_SECRET, (err, user) => {
        if (err)
            return res.status(403).json({ message: "Invalid token" });
        req.user = user;
        next();
    });
};
app.get("/login", (req, res) => {
    const user = { id: 1, username: "john_doe" };
    const token = jsonwebtoken_1.default.sign(user, JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
});
app.get("/black-list", authenticateToken, (req, res) => {
    res.send("This route is protected and token is valid");
});
app.post("/logout", authenticateToken, (req, res) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader === null || authHeader === void 0 ? void 0 : authHeader.split(" ")[1];
    if (token) {
        blacklistedTokens.add(token);
    }
    res.json({ message: "Logged out and token blacklisted" });
});
app.get("/", (req, res) => {
    res.send("working fine");
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
