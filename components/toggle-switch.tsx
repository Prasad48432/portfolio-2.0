"use client";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { useRef } from "react";

export default function ViewToggle({
  value,
  onChange,
  onPositionChange,
}: {
  value: "portfolio" | "resume";
  onChange: (v: "portfolio" | "resume") => void;
  onPositionChange?: (pos: { x: number; y: number }) => void;
}) {
  const { setTheme } = useTheme();
  const ref = useRef<HTMLDivElement>(null);

  const handleChange = (v: "portfolio" | "resume") => {
    onChange(v);

    if (ref.current && onPositionChange) {
      const rect = ref.current.getBoundingClientRect();
      onPositionChange({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    }

    setTimeout(() => {
      setTheme(v === "portfolio" ? "light" : "dark");
    }, 300);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex p-1 rounded-full w-50 lg:w-60 z-11 bg-muted/80 backdrop-blur shadow-[inset_0_2px_5px_rgba(0,0,0,0.25),inset_0_-2px_3px_rgba(255,255,255,0.06)] border border-white/10"
    >
      <motion.div
        layout
        className="absolute top-1 bottom-1 w-1/2 rounded-full bg-card shadow-[0_3px_10px_rgba(0,0,0,0.35),inset_0_1px_2px_rgba(255,255,255,0.25)]"
        animate={{ left: value === "resume" ? "47%" : "3%" }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />

      {(["portfolio", "resume"] as const).map((item) => (
        <button
          key={item}
          onClick={() => handleChange(item)}
          className="relative z-10 w-1/2 py-1 lg:py-2 text-base lg:text-lg font-medium capitalize text-foreground"
        >
          {item}
        </button>
      ))}
    </motion.div>
  );
}
