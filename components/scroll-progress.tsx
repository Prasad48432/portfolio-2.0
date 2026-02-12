"use client";
import { motion, useScroll } from "motion/react";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-50 h-0.5 lg:h-1 origin-left bg-foreground"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgress;
