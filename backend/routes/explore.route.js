import express from "express";
import { explorePopularRoutes } from "../controllers/explore.controller.js";

const router = express.Router();

router.get("/repos/:language",explorePopularRoutes)

export default router;