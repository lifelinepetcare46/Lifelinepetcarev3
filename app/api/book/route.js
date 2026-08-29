import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Booking from "@/models/Booking";
import nodemailer from "nodemailer";

export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  );
}

export async function POST(req) {
  try {
    const body = await req.json();

    // Robust field normalization across all frontend forms
    const name = body.name || body.parentName || "Pet Parent";
    const phone = body.phone || body.phoneNumber || "Not Provided";
    const email = body.email || "Not Provided";
    const service = body.service || body.selectedService || "Veterinary Home Visit";
    const date = body.date || "Today";
    const slot = body.slot || body.time || "As soon as possible";
    const pet = body.pet || body.petType || "Dog / Cat";
    const area = body.area || body.address || body.location || "Delhi NCR";
    const notes = body.notes || body.message || "";

    const targetUser = (process.env.EMAIL_USER || "lifelinepetcare46@gmail.com").trim();
    const targetPass = (process.env.EMAIL_PASS || "ollwcplijmvmtsix").replace(/\s+/g, "").trim();
    const adminEmail = (process.env.ADMIN_EMAIL || "lifelinepetcare46@gmail.com").trim();

    // 1️⃣ Fast, Rock-Solid Gmail Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: targetUser,
        pass: targetPass,
      },
    });

    // 2️⃣ Prepare Admin Notification Email Payload (Anti-Spam Optimized)
    const mailOptions = {
      from: `"Lifeline Pet Care" <${targetUser}>`,
      replyTo: email && email.includes("@") ? email : targetUser,
      to: adminEmail,
      subject: `NEW BOOKING LEAD: ${service} - ${name} (${phone})`,
      text: `NEW DOORSTEP VET BOOKING LEAD\n\nPet Parent: ${name}\nPhone: ${phone}\nEmail: ${email}\nPet: ${pet}\nService: ${service}\nArea: ${area}\nDate: ${date}\nSlot: ${slot}\nNotes: ${notes}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 24px; background-color: #FAF9F5; border-radius: 16px; border: 2px solid #006E1C; max-width: 600px;">
          <h2 style="color: #006E1C; margin-top: 0;">🐾 New Booking / Contact Lead Received</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 12px;">
            <tr style="border-bottom: 1px solid #eee;"><td style="padding: 10px; font-weight: bold; width: 140px;">Pet Parent:</td><td style="padding: 10px; font-size: 16px; font-weight: bold;">${name}</td></tr>
            <tr style="border-bottom: 1px solid #eee;"><td style="padding: 10px; font-weight: bold;">Phone Number:</td><td style="padding: 10px;"><a href="tel:${phone}" style="color: #006E1C; font-weight: bold; font-size: 16px;">${phone}</a></td></tr>
            <tr style="border-bottom: 1px solid #eee;"><td style="padding: 10px; font-weight: bold;">Email Address:</td><td style="padding: 10px;">${email}</td></tr>
            <tr style="border-bottom: 1px solid #eee;"><td style="padding: 10px; font-weight: bold;">Pet / Species:</td><td style="padding: 10px;">${pet}</td></tr>
            <tr style="border-bottom: 1px solid #eee;"><td style="padding: 10px; font-weight: bold;">Required Service:</td><td style="padding: 10px; font-weight: bold; color: #006E1C;">${service}</td></tr>
            <tr style="border-bottom: 1px solid #eee;"><td style="padding: 10px; font-weight: bold;">Area / City:</td><td style="padding: 10px;">${area}</td></tr>
            <tr style="border-bottom: 1px solid #eee;"><td style="padding: 10px; font-weight: bold;">Preferred Date:</td><td style="padding: 10px;">${date}</td></tr>
            <tr style="border-bottom: 1px solid #eee;"><td style="padding: 10px; font-weight: bold;">Preferred Slot:</td><td style="padding: 10px;">${slot}</td></tr>
            ${notes ? `<tr><td style="padding: 10px; font-weight: bold;">Customer Notes:</td><td style="padding: 10px; color: #333;">${notes}</td></tr>` : ''}
          </table>
          <div style="margin-top: 24px; padding: 14px; background-color: #E8F5E9; border-radius: 8px; text-align: center;">
            <a href="https://wa.me/91${(phone || "").replace(/\D/g, "")}" style="color: #006E1C; font-weight: bold; text-decoration: none; font-size: 15px;">💬 Click here to reply to ${name} on WhatsApp</a>
          </div>
        </div>
      `,
    };

    // Send email to admin immediately
    const emailPromise = transporter.sendMail(mailOptions);

    // Save to DB in parallel (non-blocking)
    const dbPromise = (async () => {
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
        console.warn("DB save warning:", dbErr.message);
      }
    })();

    // Await email delivery
    await emailPromise;
    dbPromise.catch(() => {});

    // Send customer confirmation if email provided
    if (email && email.includes("@")) {
      transporter.sendMail({
        from: `"Lifeline Pet Care" <${targetUser}>`,
        to: email,
        subject: "Your Doorstep Vet Appointment Confirmation 🩺",
        html: `
          <div style="font-family: Arial, sans-serif; padding: 24px; background-color: #FAF9F5; border-radius: 16px;">
            <h2 style="color: #006E1C;">Booking Received! 🐾</h2>
            <p>Dear ${name || "Pet Parent"},</p>
            <p>Thank you for choosing <b>Lifeline Pet Care</b>. Our certified BVSc vet team has received your booking for <b>${service || "Veterinary Home Visit"}</b>.</p>
            <p><b>Helpline Number:</b> +91 88008 13462</p>
            <p>Our duty vet coordinator will contact you on WhatsApp shortly to confirm doctor arrival time.</p>
            <br/>
            <p style="color: #006E1C; font-weight: bold;">– Lifeline Pet Care Delhi NCR 🐶🐱</p>
          </div>
        `,
      }).catch(err => console.warn("Customer mail warning:", err.message));
    }

    return NextResponse.json(
      { success: true, message: "Lead dispatched via Nodemailer to lifelinepetcare46@gmail.com" },
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
