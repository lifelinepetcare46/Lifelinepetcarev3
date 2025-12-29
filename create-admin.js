const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

mongoose.connect("mongodb+srv://lifelinepetcare46_db_user:UblLCYZqABuM1EXQ@cluster0.1qpqkdd.mongodb.net/lifeline?retryWrites=true&w=majority");

const Admin = mongoose.model(
  "AdminUser",
  new mongoose.Schema({
    username: String,
    password: String,
    role: String,
  })
);

(async () => {
  const hash = await bcrypt.hash("admin@123", 10);

  await Admin.create({
    username: "admin",
    password: hash,
    role: "superadmin",
  });

  console.log("Super Admin created");
  process.exit();
})();
