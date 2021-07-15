import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    username: String,
    email: String,
    password: String,
    roles: [
      {
        ref: "Role",
        type: Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);

  return bcrypt.hash(password, salt);
};

userSchema.statics.comparePassword = async (receivedPassword, password) => {
  return bcrypt.compare(receivedPassword, password);
};

export default model("User", userSchema);
