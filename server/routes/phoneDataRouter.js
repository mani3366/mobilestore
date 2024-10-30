import express from "express";
import controller from "../controllers/phoneDataController.js"; 

const router = express.Router();

router.get("/getphone", controller.getPhones);
router.post("/addphone", controller.addPhone);

export default router;