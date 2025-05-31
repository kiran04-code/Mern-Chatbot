import mongoose from "mongoose"

const ChatSchema = new mongoose.Schema({
user: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "user",
  required: true
},
  latestChat:{
    type:String,
    default:"New Chat"
  }
},{
    timestamps:true
})

const chat = mongoose.model("chat",ChatSchema)

export default chat