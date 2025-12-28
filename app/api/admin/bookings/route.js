import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Booking from "@/models/Booking";

/* 🔹 GET – View all bookings */
export async function GET() {
  try {
    await connectDB();
    const bookings = await Booking.find().sort({ createdAt: -1 });
    return NextResponse.json(bookings);
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}

/* 🔹 PUT – Reschedule booking */
export async function PUT(req) {
  try {
    const { id, date, slot } = await req.json();
    await connectDB();

    await Booking.findByIdAndUpdate(id, {
      date,
      slot,
      status: "rescheduled",
    });

    return NextResponse.json({ message: "Booking rescheduled" });
  } catch {
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}

/* 🔹 DELETE – Cancel booking */
export async function DELETE(req) {
  try {
    const { id } = await req.json();
    await connectDB();

    await Booking.findByIdAndDelete(id);

    return NextResponse.json({ message: "Booking cancelled" });
  } catch {
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}
