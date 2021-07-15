import User from "../models/User";

export const checkDuplicateUsername = async (req, res, next) => {
  const username = await User.findOne({
    username: req.body.username.toString(),
  });

  if (username) {
    return res.status(400).json({ ok: false, message: "El usuario ya existe" });
  }

  next();
};

export const checkDuplicateEmail = async (req, res, next) => {
  const email = await User.findOne({ email: req.body.email.toString() });

  if (email) {
    return res
      .status(400)
      .json({ ok: false, message: "El email ya está en uso" });
  }

  next();
};
