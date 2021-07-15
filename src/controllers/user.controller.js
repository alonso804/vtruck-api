import User from "../models/User";

export const getUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  console.log("[USER] Get User");
  console.log(user);

  if (!user) {
    return res.status(400).json({ ok: false, message: "No existe usuario" });
  }

  return res.status(200).json({
    ok: true,
    user: { firstName: user.firstName, lastName: user.lastName },
  });
};
