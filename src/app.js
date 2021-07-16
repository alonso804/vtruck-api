import express from "express";
import morgan from "morgan";
import pkg from "../package.json";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";

import { createRoles } from "./libs/initialSetup";

import authRoutes from "./routes/authRoutes";
import driverRoutes from "./routes/driverRoutes";
import userRoutes from "./routes/userRoutes";

const app = express();
app.disable("x-powered-by");
dotenv.config();
createRoles();

app.set("pkg", pkg);
app.set("port", process.env.PORT || 4000);

app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: `${process.env.ORIGIN}`,
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
