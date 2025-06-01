import express from "express"
import {createchat,GetAllchats,addconv,getAllconver,deleteconv} from "../controller/chatController.js"
  const routess = express.Router()

routess.post("/new",createchat)
routess.get("/GetAllchats",GetAllchats)
routess.post("/addconv/:id",addconv)
routess.get("/getAllconver/:id",getAllconver)
routess.post("/deleteconv/:id",deleteconv)
export default routess
   