import { Router } from "express";
import {
  checkingUser,
  adminRegister,
  adminLogin,
} from "../controller/adminAuthController.js";
const router = Router();

router.get("/checkingUsers", checkingUser);
router.post("/register", adminRegister);
router.post("/login", adminLogin);

export default router;
