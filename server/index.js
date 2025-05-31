import express from 'express';
const app = express()
import dotenv from 'dotenv';
dotenv.config();
import { ConnectedDb } from './config/db.js';
const port =  process.env.PORT ||3008
app.use(express.json())
app.use(express.urlencoded({extended:true}))
ConnectedDb(process.env.MONGO_URL).then(()=>{
    console.log("Connected to MongoDB")
}).catch((err)=>{
    console.log("Error connecting to MongoDB", err);
})
app.get('/', (req, res) => {
    res.send('Hello World!')
});
 app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
 })