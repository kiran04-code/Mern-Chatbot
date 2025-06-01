import  chat from "../model/chat.js"
import conv from "../model/conversion.js";
export const createchat = async (req, res) => {
  try {
    const chats = await chat.create({
      user: req.user._id,
    });
    res.json(chats);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


export const GetAllchats = async(req,res)=>{
 try {
    const AllChates = await chat.find({user:req.user._id}).sort({
        createdAt:-1
    })
    res.json(AllChates)
 } catch (error) {
    res.status(500).json({
        message:error.message
    })
 }
}

export const addconv = async (req,res)=>{
   try {
      const chats = await chat.findById(req.param.id)
      if(!chats)  return res.status(404).json({
         message:"Not Chat This Id"
      })

     const Conversation = await conv.create({
     chat :chats._id,
     Questions:req.body.Questions,
     answer:req.body.answer
     })
      const UpdatedChat = await chat.findByIdAndUpdate(req.param.id,{latestChat:req.body.Questions},{new:true})
      res.json({
         UpdatedChat,
         Conversation
      })
   } catch (error) {
        res.status(500).json({
        message:error.message
    })
   }

}

export const getAllconver = async(req,res)=>{
   try {
      const allconv = await conv.findById({chat:req.params.id})
      if(!allconv){
         return res.status(404).json({
          message:" No  Conversion  Chat here"
         })
      }
      res.json(allconv)
   } catch (error) {
      res.status(500).json({
        message:error.message
      })
   }
}

export const deleteconv = async(req,res)=>{
   try {
       await chat.findByIdAndDelete(req.params.id)
      res.status.json({
         message:"Chat Delete sucessfully"
      })
   } catch (error) {
       res.status(500).json({
        message:error.message
      })
   }
}