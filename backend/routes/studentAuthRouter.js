import { Router } from "express";
import {
  studentRegister,
  studentLogin,
} from "../controller/studentAuthController.js";

const router = Router();

router.post("/register", studentRegister);
router.post("/login", studentLogin);

export default router;
