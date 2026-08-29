import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Booking from "@/models/Booking";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, phone, email, service, date, slot, pet, area } = body;

    const targetUser = process.env.EMAIL_USER || "lifelinepetcare46@gmail.com";
    const targetPass = (process.env.EMAIL_PASS || "ollwcplijmvmtsix").replace(/\s+/g, "");
    const adminEmail = process.env.ADMIN_EMAIL || "lifelinepetcare46@gmail.com";

    // 1️⃣ DB Save Attempt (non-blocking)
    try {
      await connectDB();
      await Booking.create({
        name: name || "Pet Parent",
        phone: phone || "Not Provided",
        email: email || "Not Provided",
        service: service || "Veterinary Home Visit",
        date: date || new Date().toLocaleDateString(),
        slot: slot || "Immediate Dispatch",
      });
    } catch (dbErr) {
      console.warn("DB save optional warning:", dbErr.message);
    }

    // 2️⃣ SMTP Transporter (Gmail App Password)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: targetUser,
        pass: targetPass,
      },
    });

    // 3️⃣ Instant Admin Email Notification to lifelinepetcare46@gmail.com
    await transporter.sendMail({
      from: `"Lifeline Pet Care Alert 🚨" <${targetUser}>`,
      to: adminEmail,
      subject: `🚨 NEW BOOKING LEAD: ${service || "Doorstep Vet Visit"} - ${name || "Pet Parent"}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 24px; background-color: #FAF9F5; border-radius: 16px; border: 1px solid #006E1C;">
          <h2 style="color: #006E1C; margin-top: 0;">🐾 New Doorstep Vet Booking Lead</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 12px;">
            <tr style="border-bottom: 1px solid #eee;"><td style="padding: 10px; font-weight: bold; width: 140px;">Pet Parent:</td><td style="padding: 10px;">${name || "Not Provided"}</td></tr>
            <tr style="border-bottom: 1px solid #eee;"><td style="padding: 10px; font-weight: bold;">Phone Number:</td><td style="padding: 10px;"><a href="tel:${phone}" style="color: #006E1C; font-weight: bold;">${phone || "Not Provided"}</a></td></tr>
            <tr style="border-bottom: 1px solid #eee;"><td style="padding: 10px; font-weight: bold;">Email:</td><td style="padding: 10px;">${email || "Not Provided"}</td></tr>
            <tr style="border-bottom: 1px solid #eee;"><td style="padding: 10px; font-weight: bold;">Pet / Companion:</td><td style="padding: 10px;">${pet || "Dog / Cat"}</td></tr>
            <tr style="border-bottom: 1px solid #eee;"><td style="padding: 10px; font-weight: bold;">Service:</td><td style="padding: 10px; font-weight: bold; color: #006E1C;">${service || "Veterinary Home Visit"}</td></tr>
            <tr style="border-bottom: 1px solid #eee;"><td style="padding: 10px; font-weight: bold;">Area / City:</td><td style="padding: 8px;">${area || "Delhi NCR"}</td></tr>
            <tr style="border-bottom: 1px solid #eee;"><td style="padding: 10px; font-weight: bold;">Preferred Date:</td><td style="padding: 10px;">${date || "Today"}</td></tr>
            <tr><td style="padding: 10px; font-weight: bold;">Preferred Slot:</td><td style="padding: 10px;">${slot || "As soon as possible"}</td></tr>
          </table>
          <p style="margin-top: 24px; font-size: 12px; color: #666;">Lifeline Pet Care Automated Lead Dispatch System</p>
        </div>
      `,
    });

    // 4️⃣ Optional Customer Confirmation Email if provided
    if (email && email.includes("@")) {
      try {
        await transporter.sendMail({
          from: `"Lifeline Pet Care" <${targetUser}>`,
          to: email,
          subject: "Your Doorstep Vet Appointment Confirmation 🩺",
          html: `
            <div style="font-family: Arial, sans-serif; padding: 24px; background-color: #FAF9F5; border-radius: 16px;">
              <h2 style="color: #006E1C;">Booking Received! 🐾</h2>
              <p>Dear ${name || "Pet Parent"},</p>
              <p>Thank you for choosing <b>Lifeline Pet Care</b>. Our certified BVSc vet team has received your booking for <b>${service || "Veterinary Home Visit"}</b>.</p>
              <p><b>Helpline Numbers:</b> +91 88008 13462 / +91 63874 74595</p>
              <p>Our duty vet coordinator will contact you on WhatsApp shortly to confirm doctor arrival time.</p>
              <br/>
              <p style="color: #006E1C; font-weight: bold;">– Lifeline Pet Care Delhi NCR 🐶🐱</p>
            </div>
          `,
        });
      } catch (custErr) {
        console.warn("Customer confirmation email notice:", custErr.message);
      }
    }

    return NextResponse.json(
      { success: true, message: "Lead saved & email sent to lifelinepetcare46@gmail.com" },
      { status: 200 }
    );
  } catch (error) {
    console.error("BOOKING API ERROR:", error);
    return NextResponse.json(
      { error: error.message || "Failed to process lead" },
      { status: 500 }
    );
  }
}
