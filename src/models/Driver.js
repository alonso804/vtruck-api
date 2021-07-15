import { Schema, model } from "mongoose";

const driverSchema = new Schema(
  {
    name: String,
    dni: String,
    vehiclePlate: String,
    phoneNumber: String,
    startDate: String,
    endDate: String,
    business: String,
    observations: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Driver", driverSchema);
