"use client";
import { motion } from "framer-motion";

export default function SectionWrapper({ children, className = "", id = "" }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`py-20 ${className}`}
    >
      {children}
    </motion.section>
  );
}
