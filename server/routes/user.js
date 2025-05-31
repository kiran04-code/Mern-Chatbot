import express from "express"

import {createUser,google,checkAuth,Logout} from "../controller/user.js"

const routes = express.Router();
routes.post("/signup", createUser);
routes.post("/signin", checkAuth);
routes.post("/google", google);
routes.get("/Logout", Logout);

export default routes;