import { Router } from "express";
import {
  adminRegister,
  adminLogin,
} from "../controller/adminAuthController.js";
const router = Router();

router.post("/register", adminRegister);
router.post("/login", adminLogin);

export default router;
