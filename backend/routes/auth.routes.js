import express from "express";

import {signup,login,logout} from '../controllers/auth.controller.js'
const router=express.Router();

router.post("/signup",signup); //http://localhost:5000/api/auth/signup
router.post("/login", login);  //http://localhost:5000/api/auth/login
router.post("/logout", logout); //http://localhost:5000/api/auth/logout

export default router;