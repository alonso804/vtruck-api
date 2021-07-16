import jwt from "jsonwebtoken";
import config from "../config";
import User from "../models/User";

export const verifyToken = async (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(400).json({ message: "No hay token" });
  }

  try {
    const decoded = jwt.verify(token, config.SECRET);
    req.userId = decoded.id;
    console.log(req.userId);

    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(400).json({ message: "Usuario no existe" });
    }

    next();
  } catch (error) {
    return res.status(400).json({ message: "Desautorizado!" });
  }
};
