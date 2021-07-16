import { Router } from "express";
import { getUser } from "../controllers/user.controller";
import { verifyToken } from "../middlewares/authJwt";

const userRoutes = Router();

userRoutes.get("/get-user/:id", verifyToken, getUser);

export default userRoutes;
