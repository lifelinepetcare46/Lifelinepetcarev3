import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Booking from "@/models/Booking";
import jwt from "jsonwebtoken";

/* 🔐 TOKEN VERIFY HELPER */
function verifyToken(req) {
  const auth = req.headers.get("authorization");
  if (!auth) return null;

  try {
    const token = auth.split(" ")[1];
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    return null;
  }
}

/* =========================
   🔹 GET – View all bookings
========================= */
export async function GET(req) {
  try {
    const admin = verifyToken(req);
    if (!admin) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    await connectDB();
    const bookings = await Booking.find(
      {},
      { name: 1, phone: 1, email: 1, service: 1, createdAt: 1 }
    ).sort({ createdAt: -1 });

    return NextResponse.json(bookings);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch bookings" },
      { status: 500 }
    );
  }
}

/* =========================
   🔹 PUT – Reschedule booking
========================= */
export async function PUT(req) {
  try {
    const admin = verifyToken(req);
    if (!admin) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { id, date, slot } = await req.json();
    await connectDB();

    await Booking.findByIdAndUpdate(id, {
      date,
      slot,
      status: "rescheduled",
    });

    return NextResponse.json({ message: "Booking rescheduled" });
  } catch (err) {
    return NextResponse.json(
      { error: "Update failed" },
      { status: 500 }
    );
  }
}

/* =========================
   🔹 DELETE – Cancel booking
========================= */
export async function DELETE(req) {
  try {
    const admin = verifyToken(req);
    if (!admin) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { id } = await req.json();
    await connectDB();

    await Booking.findByIdAndDelete(id);

    return NextResponse.json({ message: "Booking cancelled" });
  } catch (err) {
    return NextResponse.json(
      { error: "Delete failed" },
      { status: 500 }
    );
  }
}
