import User from "../models/User";

export const getUser = async (req, res) => {
  console.log("[USER] Get User");

  try {
    const user = await User.findById(req.params.id);

    console.log(user);

    if (!user) {
      return res.status(400).json({ ok: false, message: "No existe usuario" });
    }

    return res.status(200).json({
      ok: true,
      user: { firstName: user.firstName, lastName: user.lastName },
    });
  } catch (err) {
    return res.status(500).json({
      ok: false,
      message: err,
    });
  }
};
