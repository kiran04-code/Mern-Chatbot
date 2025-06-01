import  chat from "../model/chat.js"
import conv from "../model/conversion.js";

import mongoose from "mongoose"; // Make sure this is import
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

export const addconv = async (req, res) => {
  try {
    const chats = await chat.findById(req.params.id);
    if (!chats) {
      return res.status(404).json({
        message: "No chat with this ID",
      });
    }

    const Conversation = await conv.create({
      chat: req.params.id,
      question: req.body.question,
      answer: req.body.answer,
    });

    await chat.findByIdAndUpdate(
      req.params.id, // ✅ fixed typo here
      { latestChat: req.body.question },
      { new: true }
    );

    res.json({
      Conversation,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getAllconver = async (req, res) => {
  const userid = req.params.id;

  // Validate ID format
  if (!mongoose.Types.ObjectId.isValid(userid)) {
    return res.status(400).json({ message: "Invalid conversation ID" });
  }

  try {
    const allconv = await conv.find({ chat: userid }).populate("chat");

    if (!allconv || allconv.length === 0) {
      return res.status(404).json({ message: "No conversations found" });
    }

    res.json(allconv);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


export const deleteconv = async(req,res)=>{
   try {
       await chat.findByIdAndDelete(req.params.id)
      res.status(200).json({
         message:"Chat Delete sucessfully"
      })
   } catch (error) {
       res.status(500).json({
        message:error.message
      })
   }
}