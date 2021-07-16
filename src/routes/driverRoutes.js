import { Router } from "express";
import {
  getDrivers,
  getDriver,
  updateDriver,
  createDriver,
  deleteDriver,
} from "../controllers/driver.controller";
import { checkDuplicateDni } from "../middlewares/verifyDriver";
import { verifyToken } from "../middlewares/authJwt";

const driverRoutes = Router();

driverRoutes.post(
  "/create-driver",
  verifyToken,
  checkDuplicateDni,
  createDriver
);

driverRoutes.get("/get-drivers", verifyToken, getDrivers);

driverRoutes.get("/get-driver/:id", verifyToken, getDriver);

driverRoutes.put("/update-driver/:id", verifyToken, updateDriver);

driverRoutes.delete("/delete-driver/:id", verifyToken, deleteDriver);

export default driverRoutes;
