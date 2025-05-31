import { createToken } from "../AuthJwt/jwt.js";
import user from "../model/user.js"
export  const createUser = async (req,res) =>{
 try {
    const {email}= req.body
    const datas = await user.findOne({ email: req.body.email });
    if(datas){
        return res.status(400).json({
            message: "User already exists  use another email",
            success: false
        })
    }
   else{
     const data = await user.create({
        email,
    })

    res.status(201).json({
        message: "User created successfully",
        data: data,
        sucess:true
    })
   }
 } catch (error) {
    res.status(500).json({
        message: "Error creating user",
        error: error.message
    })
 }
}

export const google = async (req, res) => {
  try {
    const { email } = req.body;

    // Make sure to await the findOne call
    const existingUser = await user.findOne({ email });

    if (existingUser) {
      return res.json({
        success: true,
        message: "User already exists",
        data: existingUser,
      });
    }

    // Create a new user if not found
    const newUser = await user.create({ email });

    return res.json({
      success: true,
      message: "User created successfully",
      data: newUser,
    });

  } catch (error) {
    console.error("Error in google signup:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const checkAuth = async(req,res)=>{
 const {email}  = req.body
 const data = await user.findOne({email})
 if(data) {
    const token = createToken(user)
    res.cookie("acess_Token",token).json({
        sucess:true,
        message:"User Login Sucessfully",
        data:data
    })
}
    else{
     res.json({
        sucess:false,
        message:"Email id does not exist!"
     })
    }
 }
