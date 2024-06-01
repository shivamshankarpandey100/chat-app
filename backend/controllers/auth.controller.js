import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup= async (req, res)=>{
    try {
        const {fullName,username,password,confirmpassword,gender}=req.body;
        if(password!==confirmpassword){
            return res.status(400).json({error:"Password and Confirm Password do not match"});
        }

        const user=await User.findOne({username});

        if(user){
            return res.status(400).json({error:"User already exists"}); 
        }


        //HASH PASSWORD HERE
        const salt=await bcryptjs.genSalt(10);
        const hashedPassword=await bcryptjs.hash(password,salt);
        //https://avatar-placeholder.iran.liara.run/

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
		const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;


        const newUser=new User({
            fullName,
            username,
            password:hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
        })


        if(newUser){
            //genrate jwt token

            generateTokenAndSetCookie(newUser._id, res);

            await newUser.save();   

        res.status(201).json({
            _id:newUser._id,
            fullName:newUser.fullName,
            username:newUser.username,
            profilePic: newUser.profilePic,
        });
        }else{
            res.status(400).json({error:"Invalid User Data"});
        }
    } catch (error) {
        console.log("Error on signup",error.message);
        res.status(500).json({error:"Something went wrong or Enternal Server Error"});
    }
};

export const login= async (req,res)=>{
    try {
        const {username,password}=req.body;
        const user=await User.findOne({username});
        const isPasswordCorrect= await bcryptjs.compare(password,user?.password || ""); //if user is null then password is null so we use or "" to avoid error in compare function 

        if(!user || !isPasswordCorrect){
            return res.status(400).json({error:"Invalid UserName or Password"});
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id:user._id,
            fullName:user.fullName,
            username:user.username,
            profilePic:user.profilePic,
        });
    } catch (error) {
        console.log("Error on Login",error.message);
        res.status(500).json({error:"Something went wrong or Enternal Server Error"});
    }
};

export const logout= (req,res)=>{
    try {
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json("Logout Successfully");
    } catch (error) {
        console.log("Error on Logout",error.message);
        res.status(500).json({error:"Something went wrong or Enternal Server Error"});
    }
};

