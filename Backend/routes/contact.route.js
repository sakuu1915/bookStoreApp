import express from "express";
import { sendMessage } from "../controller/contact.controller.js";

const router = express.Router();

router.post("/contact", sendMessage);

export default router;