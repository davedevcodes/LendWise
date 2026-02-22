"use client";
import { motion } from "framer-motion";

export default function SubmitButton({ loading }) {
  return (
    <motion.button
      type="submit"
      disabled={loading}
      whileTap={{ scale: 0.98 }}
      className="w-full py-4 rounded-xl bg-primary-600 hover:bg-primary-700 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold text-base transition-colors shadow-lg shadow-primary-500/20 flex items-center justify-center gap-3"
    >
      {loading ? (
        <>
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Submitting Application...
        </>
      ) : (
        <>Submit Application →</>
      )}
    </motion.button>
  );
}
