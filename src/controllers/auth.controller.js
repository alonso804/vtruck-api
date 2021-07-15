import User from "../models/User";
import Role from "../models/Role";
import jwt from "jsonwebtoken";
import config from "../config";

export const signup = async (req, res) => {
  const { firstName, lastName, username, email, password, roles } = req.body;

  const newUser = new User({
    firstName,
    lastName,
    username,
    email,
    password: await User.encryptPassword(password),
  });

  if (roles) {
    const foundRoles = await Role.find({
      name: { $in: roles.map((role) => role.toString()) },
    });
    newUser.roles = foundRoles.map((role) => role._id);
  } else {
    const role = await Role.findOne({ name: "user" });
    newUser.roles = [role._id];
  }

  const savedUser = await newUser.save();

  console.log("[SIGN UP] Saved User");
  console.log(savedUser);

  const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
    expiresIn: 86400, // 24 hrs
  });

  return res
    .status(200)
    .json({ token, ok: true, message: "Cliente creado correctamente" });
};

export const signin = async (req, res) => {
  const userFound = await User.findOne({
    username: req.body.username.toString(),
  }).populate("roles");

  if (!userFound) {
    return res
      .status(400)
      .json({ ok: false, message: "Usuario no encontrado" });
  }

  const matchPassword = await User.comparePassword(
    req.body.password,
    userFound.password
  );

  if (!matchPassword) {
    return res
      .status(401)
      .json({ ok: false, message: "Contraseña incorrecta" });
  }

  const token = jwt.sign({ id: userFound._id }, config.SECRET, {
    expiresIn: 86400,
  });

  console.log("[SIGN IN] Saved User");
  console.log(userFound);

  return res.status(200).json({
    ok: true,
    message: "Usuario encontrado",
    token,
    userId: userFound._id,
  });
};
