"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type MotionSectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

export function MotionSection({ id, children, className = "" }: MotionSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
