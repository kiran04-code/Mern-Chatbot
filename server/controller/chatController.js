import  chat from "../model/chat.js"

export const createchat = async(req,res) =>{
 try {
    const chats = await chat.create({
    user:req.user._id,
    })
    res.json(chats)
 } catch (error) {
    res.status(500).json({
        message:error.message
    })
 }
}

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
