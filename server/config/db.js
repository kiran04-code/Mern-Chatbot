import mongoose from "mongoose"
export async function ConnectedDb(url){
    await mongoose.connect(url)
}