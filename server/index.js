import express from 'express';
const app = express()

import mongoose from 'mongoose';
import { ConnectedDb } from './config/db.js';
const port = 3006
app.use(express.json())
app.use(express.urlencoded({extended:true}))
ConnectedDb("mongodb+srv://kr551344:Br4t18YppVIf5EOJ@cluster0.vrxjmvq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
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