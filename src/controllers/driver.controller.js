import Driver from "../models/Driver";

export const createDriver = async (req, res) => {
  const {
    name,
    dni,
    vehiclePlate,
    phoneNumber,
    startDate,
    endDate,
    business,
    observations,
  } = req.body;

  const newDriver = new Driver({
    name,
    dni,
    vehiclePlate,
    phoneNumber,
    startDate,
    endDate,
    business,
    observations,
  });

  const savedDriver = await newDriver.save();
  console.log("[DRIVER] Saved Driver");
  console.log(savedDriver);

  return res
    .status(200)
    .json({ ok: true, message: "Conductor creado correctamente" });
};

export const getDrivers = async (_, res) => {
  console.log("[DRIVER] Get Drivers");

  try {
    const drivers = await Driver.find();

    console.log(drivers);

    return res.status(200).json({ ok: true, drivers });
  } catch {
    return res
      .status(500)
      .json({ ok: false, message: "Internal server error" });
  }
};

export const getDriver = async (req, res) => {
  const driver = await Driver.findById(req.params.id);

  console.log("[DRIVER] Get Driver");
  console.log(driver);

  if (!driver) {
    return res.status(400).json({ ok: false, message: "No existe conductor" });
  }

  return res.status(200).json({ ok: true, driver });
};

export const updateDriver = async (req, res) => {
  const {
    name,
    dni,
    vehiclePlate,
    phoneNumber,
    startDate,
    endDate,
    business,
    observations,
  } = req.body;

  const updatedDriver = await Driver.findByIdAndUpdate(req.params.id, {
    name,
    dni,
    vehiclePlate,
    phoneNumber,
    startDate,
    endDate,
    business,
    observations,
  });

  console.log("[DRIVER] Updated Driver");
  console.log(updatedDriver);

  if (!updatedDriver) {
    return res.status(400).json({ ok: false, message: "Conductor no existe" });
  }

  return res.json({ ok: true, message: "Conductor actualizado correctamente" });
};

export const deleteDriver = async (req, res) => {
  const deletedDriver = await Driver.findByIdAndDelete(req.params.id);

  console.log("[DRIVER] Deleted Driver");
  console.log(deletedDriver);

  if (!deletedDriver) {
    return res.status(400).json({ ok: false, message: "Conductor no existe" });
  }

  return res
    .status(200)
    .json({ ok: true, message: "Conductor eliminado correctamente" });
};
