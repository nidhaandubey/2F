import { Router } from "express";
import passport from "passport";
import { register, login, status, authStatus, logout, setup2FA, verify2FA, reset2FA } from "../controllers/authController.js";
const router = Router();

// Register Route
router.post("/register",register);
// Login Route
router.post("/login",passport.authenticate("local"), login);


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