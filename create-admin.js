require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

(async () => {
  if (!process.env.MONGODB_URI) {
    console.error("❌ MONGODB_URI missing");
    process.exit(1);
  }

  console.log("Connecting to MongoDB...");

  await mongoose.connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 30000,
  });

  console.log("✅ MongoDB connected");

  const AdminSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: String,
  });

  const Admin =
    mongoose.models.AdminUser ||
    mongoose.model("AdminUser", AdminSchema);

  const USERNAME = "jatin@lucie";        // tumhara new username
  const PASSWORD = "rjcybrx010@jatin";   // tumhara new password

  const hash = await bcrypt.hash(PASSWORD, 10);

  await Admin.findOneAndUpdate(
    { role: "superadmin" },
    {
      username: USERNAME,
      password: hash,
      role: "superadmin",
    },
    { upsert: true }
  );

  console.log("✅ Admin created / updated successfully");
  process.exit();
})();
