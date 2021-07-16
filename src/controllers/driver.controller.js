import Driver from "../models/Driver";

export const createDriver = async (req, res) => {
  console.log("[DRIVER] Save Driver");

  try {
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
    console.log(savedDriver);

    return res
      .status(200)
      .json({ ok: true, message: "Conductor creado correctamente" });
  } catch (err) {
    return res.status(500).json({
      ok: false,
      message: err,
    });
  }
};

export const getDrivers = async (_, res) => {
  console.log("[DRIVER] Get Drivers");

  try {
    const drivers = await Driver.find();

    console.log(drivers);

    return res.status(200).json({ ok: true, drivers });
  } catch (err) {
    return res.status(500).json({
      ok: false,
      message: err,
    });
  }
};

export const getDriver = async (req, res) => {
  console.log("[DRIVER] Get Driver");

  try {
    const driver = await Driver.findById(req.params.id);

    console.log(driver);

    if (!driver) {
      return res
        .status(400)
        .json({ ok: false, message: "No existe conductor" });
    }

    return res.status(200).json({ ok: true, driver });
  } catch (err) {
    return res.status(500).json({
      ok: false,
      message: err,
    });
  }
};

export const updateDriver = async (req, res) => {
  console.log("[DRIVER] Update Driver");

  try {
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

    console.log(updatedDriver);

    if (!updatedDriver) {
      return res
        .status(400)
        .json({ ok: false, message: "Conductor no existe" });
    }

    return res.json({
      ok: true,
      message: "Conductor actualizado correctamente",
    });
  } catch (err) {
    return res.status(500).json({
      ok: false,
      message: err,
    });
  }
};

export const deleteDriver = async (req, res) => {
  console.log("[DRIVER] Delete Driver");

  try {
    const deletedDriver = await Driver.findByIdAndDelete(req.params.id);

    console.log(deletedDriver);

    if (!deletedDriver) {
      return res
        .status(400)
        .json({ ok: false, message: "Conductor no existe" });
    }

    return res
      .status(200)
      .json({ ok: true, message: "Conductor eliminado correctamente" });
  } catch (err) {
    return res.status(500).json({
      ok: false,
      message: err,
    });
  }
};
