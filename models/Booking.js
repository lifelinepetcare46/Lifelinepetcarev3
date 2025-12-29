import mongoose from "mongoose";

/* ✅ SCHEMA DEFINITION (UNCHANGED FIELDS) */
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
  {
    timestamps: true,

    /* ✅ ADDITIONS (VERCEL / SERVERLESS SAFE) */
    collection: "bookings", // explicit collection
    strict: true,
  }
);

/* ✅ MODEL SAFE EXPORT (HOT-RELOAD + VERCEL FIX) */
const Booking =
  mongoose.models.Booking ||
  mongoose.model("Booking", BookingSchema);

export default Booking;
