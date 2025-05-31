import express from 'express';
const app = express()
import routes from "./routes/user.js"
import  ChatRoutes from "./routes/chatsRoutes.js"
import cookieParser from 'cookie-parser';
import {checksAuth} from "./middleware/auth.js"
import dotenv from 'dotenv';
dotenv.config();
import { ConnectedDb } from './config/db.js';
const port =  process.env.PORT ||3008
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(checksAuth("acess_Token"))
ConnectedDb(process.env.MONGO_URL).then(()=>{
    console.log("Connected to MongoDB")
}).catch((err)=>{
    console.log("Error connecting to MongoDB", err);
})
app.get("/",(req,res)=>{
    res.send(req.user._id)
})
app.use("/api",routes)
app.use("/api",ChatRoutes)
 app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
 })