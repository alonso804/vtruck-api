import express from "express";
import morgan from "morgan";
import pkg from "../package.json";
import cors from "cors";
import dotenv from "dotenv";

import "babel-core/register";
import "babel-polyfill";

import { createRoles } from "./libs/initialSetup";

import authRoutes from "./routes/authRoutes";
import driverRoutes from "./routes/driverRoutes";
import userRoutes from "./routes/userRoutes";

const app = express();
app.disable("x-powered-by");
dotenv.config();
createRoles();

app.set("pkg", pkg);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/", (_, res) => {
  res.json({
    name: app.get("pkg").name,
    author: app.get("pkg").author,
    description: app.get("pkg").description,
    version: app.get("pkg").version,
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/driver", driverRoutes);
app.use("/api/user", userRoutes);

export default app;
