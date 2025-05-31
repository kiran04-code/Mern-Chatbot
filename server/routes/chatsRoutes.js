import express from "express"
import {createchat,GetAllchats} from "../controller/chatController.js"
  const routess = express.Router()

routess.post("/new",createchat)
routess.get("/GetAllchats",GetAllchats)
export default routess
 