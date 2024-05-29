import express from "express";
const router=express.Router();

router.get("/signup"); //http://localhost:5000/api/auth/signup
router.get("/login");  //http://localhost:5000/api/auth/login
router.get("/logout"); //http://localhost:5000/api/auth/logout

export default router;