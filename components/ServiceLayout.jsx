"use client";
import { motion } from "framer-motion";

export default function ServiceLayout({ title, children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container"
      style={{ padding: "90px 24px", maxWidth: 900 }}
    >
      <h1 style={titleStyle}>{title}</h1>
      {children}
    </motion.section>
  );
}

const titleStyle = {
  fontSize: "40px",
  fontWeight: "700",
  color: "#2c237d",
  marginBottom: "16px",
};

