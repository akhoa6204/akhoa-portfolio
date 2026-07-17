"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function FloatingProfile({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.85, delay: 0.12 }}
      className="relative mx-auto w-full max-w-[470px]"
    >
      {children}
    </motion.div>
  );
}

export function FloatingBadge({ children }: { children: ReactNode }) {
  return (
    <motion.div
      animate={{ y: [0, -9, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -left-3 top-14 z-20 rounded-2xl border border-white/10 bg-black/65 px-4 py-3 text-xs text-zinc-300 shadow-2xl backdrop-blur-xl sm:-left-6"
    >
      {children}
    </motion.div>
  );
}
