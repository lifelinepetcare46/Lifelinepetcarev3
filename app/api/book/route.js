import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Booking from "@/models/Booking";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // 1️⃣ Parse request
    const body = await req.json();
    const { name, phone, email, service, date, slot } = body;

    // 2️⃣ Validation
    if (!name || !phone || !email || !service) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // 3️⃣ DB connect
    await connectDB();

    // 4️⃣ Save booking
    await Booking.create({
      name,
      phone,
      email,
      service,
      date,
      slot,
    });

    // 5️⃣ ENV safety check (MOST IMPORTANT)
    if (
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASS ||
      !process.env.ADMIN_EMAIL
    ) {
      console.error("EMAIL ENV MISSING");
      return NextResponse.json(
        { message: "Booking saved (email not configured)" },
        { status: 200 }
      );
    }

    // 6️⃣ SMTP transporter (NO ERROR VERSION)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 7️⃣ Admin email
    await transporter.sendMail({
      from: `"Life Line Pet Care" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "New Booking Received 🐾",
      html: `
        <h3>New Booking</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Service:</b> ${service}</p>
        <p><b>Date:</b> ${date || "Not selected"}</p>
        <p><b>Slot:</b> ${slot || "Not selected"}</p>
      `,
    });

    // 8️⃣ Customer email
    await transporter.sendMail({
      from: `"Life Line Pet Care" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your Appointment is Confirmed ✅",
      html: `
        <h3>Booking Confirmed</h3>
        <p>Dear ${name},</p>
        <p>Your appointment for <b>${service}</b> is confirmed.</p>
        <p><b>Date:</b> ${date || "To be confirmed"}</p>
        <p><b>Time:</b> ${slot || "To be confirmed"}</p>
        <br/>
        <p>– Life Line Pet Care 🐶🐱</p>
      `,
    });

    // 9️⃣ Final success response
    return NextResponse.json(
      { message: "Booking saved & emails sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("BOOKING API ERROR:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
