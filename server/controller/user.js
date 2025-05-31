import { createToken } from "../AuthJwt/jwt.js";
import user from "../model/user.js"
import { SendMail } from "../middleware/SendMail.js";
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
        const token = createToken(existingUser)
        return res.cookie("acess_Token",token).json({
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
      data:newUser,
    });

  } catch (error) {
    console.error("Error in google signup:", error);
      const token = createToken(existingUser)
        return res.cookie("acess_Token",token).status(500).json({
      success: false,
      message: "Server error",
    });
  }
};



let otpStore = {};

export const checkAuth = async (req, res) => {
  const { email, otp } = req.body
  if (email && !otp) {
    const userData = await user.findOne({ email });
    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const generatedOtp = Math.floor(1000 + Math.random() * 9000);
    otpStore[email] = generatedOtp; 
    await SendMail(email, "Your MernBot OTP", generatedOtp);

    return res.status(200).json({ success: true, message: "OTP sent to email" });
  }


  if (email && otp) {
    const storedOtp = otpStore[email];
    if (!storedOtp) {
      return res.status(400).json({ success: false, message: "No OTP sent to this email" });
    }

    if (parseInt(otp) === storedOtp) {
      delete otpStore[email]; // remove OTP after successful use
      const userData = await user.findOne({ email });
      const token = createToken(userData);
      res.cookie("acess_Token", token);
      return res.status(200).json({
        success: true,
        message: "Login Successful",
        data: userData,
      });
    } else {
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }
  }

  return res.status(400).json({ success: false, message: "Incomplete request: email is required" });
};

export const  Logout = (req,res)=>{
   res.clearCookie("acess_Token").json({
    sucess:true,
    message:"Logout Sucessfull"
   })
}