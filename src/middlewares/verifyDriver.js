import Driver from "../models/Driver";

export const checkDuplicateDni = async (req, res, next) => {
  try {
    const driver = await Driver.findOne({
      dni: req.body.dni.toString(),
    });

    if (driver) {
      return res
        .status(400)
        .json({ ok: false, message: "El conductor ya existe" });
    }

    next();
  } catch (err) {
    console.log(err);
  }
};
