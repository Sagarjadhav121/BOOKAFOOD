import express from "express";  
import MyUserController from "../controllers/MyUserController";

const router=express.Router();

// req on /api/my/user
router.post("/",MyUserController.createCurrentUser);

export default router;