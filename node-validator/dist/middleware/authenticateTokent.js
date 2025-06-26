"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = void 0;
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader === null || authHeader === void 0 ? void 0 : authHeader.split(" ")[1];
    if (!token)
        return res.status(401).json({ message: "No token provided" });
    if (blacklistedTokens.has(token)) {
        return res.status(403).json({ message: "Token is blacklisted" });
    }
    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err)
            return res.status(403).json({ message: "Invalid token" });
        req.user = user;
        next();
    });
};
exports.authenticateToken = authenticateToken;
