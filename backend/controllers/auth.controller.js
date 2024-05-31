export const signup= async (req, res)=>{
    try {
        const {fullname,username,passwordconfirmpassword,gender}=req.body;
    } catch (error) {
        
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

