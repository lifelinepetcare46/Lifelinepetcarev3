import mongoose from "mongoose";

const AdminUserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["superadmin", "staff"],
    required: true,
  },
});

export default mongoose.models.AdminUser ||
  mongoose.model("AdminUser", AdminUserSchema);
