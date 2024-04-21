import express from "express";
import { getUserProfileAndRepos } from "../controllers/user.controller.js";

const router  = express.Router();

router.get("/profile/:username", getUserProfileAndRepos )
// get likes (who liked profile) 
//post like a profile
export default router;
