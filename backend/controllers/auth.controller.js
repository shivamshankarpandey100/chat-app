import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";

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


        await newUser.save();   

        res.status(201).json({
            _id:newUser._id,
            fullName:newUser.fullName,
            username:newUser.username,
            profilePic: newUser.profilePic,
        });
    } catch (error) {
        console.log("Error on signup",error.message);
        res.status(500).json({error:"Something went wrong or Enternal Server Error"});
    }
};

export const login=(req,res)=>{
    res.send("Login user");
    console.log("Login user");
};

export const logout=(req,res)=>{
    res.send("Logout user");
    console.log("logout user");
};

