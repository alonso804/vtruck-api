import { Router } from "express";
import { getUser } from "../controllers/user.controller";

const userRoutes = Router();

userRoutes.get("/get-user/:id", getUser);

export default userRoutes;
