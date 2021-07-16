import { Router } from "express";
import { signin, signup } from "../controllers/auth.controller";
import {
  checkDuplicateUsername,
  checkDuplicateEmail,
} from "../middlewares/verifySignUp";

const authRoutes = Router();

authRoutes.post("/signin", signin);

authRoutes.post("/signup", checkDuplicateEmail, checkDuplicateUsername, signup);

export default authRoutes;
