import bcrypt from "bcryptjs";
import User from "../models/user.js";


export const register = async(req,res) => {
    try {
       const {username,password} = req.body;
       const hashedPassword = await bcrypt.hash(password,10);
       const newUser = new User ({
        username,
        password:hashedPassword,
        isMFAActive:false,
       });
       console.log("New User:", newUser);
       await newUser.save();
       res.status(200).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Registration failed", error: error.message });
    }
};
export const login = async(req,res) => {
    
};

export const status = async(req,res) => {};
export const authStatus = async(req,res) => {};
export const logout = async(req,res) => {};
export const setup2FA = async(req,res) => {};
export const verify2FA = async(req,res) => {};
export const reset2FA = async(req,res) => {};