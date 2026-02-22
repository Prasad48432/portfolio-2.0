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
    <div
      ref={ref}
      className="relative flex bg-muted p-1 rounded-full w-50 lg:w-60 z-11"
    >
      <motion.div
        layout
        className="absolute top-1 bottom-1 w-1/2 rounded-full bg-card"
        animate={{ x: value === "resume" ? "93%" : "0%" }}
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
    </div>
  );
}
