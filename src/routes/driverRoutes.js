import { Router } from "express";
import {
  getDrivers,
  getDriver,
  updateDriver,
  createDriver,
  deleteDriver,
} from "../controllers/driver.controller";
import { checkDuplicateDni } from "../middlewares/verifyDriver";

const driverRoutes = Router();

driverRoutes.post("/create-driver", checkDuplicateDni, createDriver);

driverRoutes.get("/get-drivers", getDrivers);

driverRoutes.get("/get-driver/:id", getDriver);

driverRoutes.put("/update-driver/:id", updateDriver);

driverRoutes.delete("/delete-driver/:id", deleteDriver);

export default driverRoutes;
