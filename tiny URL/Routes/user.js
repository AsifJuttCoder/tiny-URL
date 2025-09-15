import express from 'express';
import { UserLogin } from '../Controller/UserLogin.js';
import { AdminRequests } from '../Controller/AdminRequest.js';
const router=express.Router();
router.post("/login",UserLogin);
router.get("/requests",AdminRequests)
export default router;