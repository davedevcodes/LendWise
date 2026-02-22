"use client";
import { motion } from "framer-motion";

export default function Card({ children, className = "", hover = false, padding = true }) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, boxShadow: "0 20px 40px rgba(99,102,241,0.12)" } : {}}
      transition={{ duration: 0.2 }}
      className={`bg-linear-to-br from-navy-900 via-primary-900 to-navy-900 rounded-2xl shadow-sm border border-gray-100 ${padding ? "p-6" : ""} ${className}`}
    >
      {children}
    </motion.div>
  );
}
