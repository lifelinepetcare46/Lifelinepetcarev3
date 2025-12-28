import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    service: { type: String, required: true },
    date: { type: String },
    slot: { type: String },
    status: { type: String, default: "confirmed" },
  },
  { timestamps: true }
);

export default mongoose.models.Booking ||
  mongoose.model("Booking", BookingSchema);
