import express from "express";
import { SaveURL } from "../Controller/SaveUrl.js";
import { RedirectURL } from "../Controller/Redirect.js";
const router=express.Router();
router.post("/save",SaveURL);
router.get("/:shortId", RedirectURL);
export default router;