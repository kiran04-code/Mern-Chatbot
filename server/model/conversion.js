import mongoose from "mongoose"

const converSchema = new mongoose.Schema({
  chat:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"chat",
    require:true
  },
  Questions:{
    type:String,
    require:true
  },
  answer:{
    type:String,
    require:true
  }
},{
    timestamps:true
})

const conv = mongoose.model("conv",converSchema)

export default conv