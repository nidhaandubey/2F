import { Router } from "express";
import passport from "passport";

const router = Router();

// Register Route
router.post("/register",register);
// Login Route
router.post("/login", login);
// Auth Status Route
router.get("/status", authStatus)
//logout route
router.post("/logout", logout);

// 2FA routes
router.post("/2fa/setup",setup2FA);
// Verify 2FA Route
router.post("/2fa/verify",verify2FA);
// reset 2FA Route
router.post("/2fa/reset",reset2FA);

export default router;