"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import PortfolioView from "@/components/views/portfolio-view";
import ViewToggle from "@/components/toggle-switch";
import ResumeView from "@/components/views/resume-view";

export default function Home() {
  const [view, setView] = useState<"portfolio" | "resume">("portfolio");
  const [pendingView, setPendingView] = useState<"portfolio" | "resume" | null>(
    null,
  );
  const [origin, setOrigin] = useState({ x: 50, y: 0 });
  const [percent, setPercent] = useState({ x: 50, y: 0 });
  const [revealing, setRevealing] = useState(false);

  useEffect(() => {
    const calc = () => {
      setPercent({
        x: (origin.x / window.innerWidth) * 100,
        y: (origin.y / window.innerHeight) * 100,
      });
    };

    calc();
  }, [origin]);

  return (
    <div className="w-full pt-10 mx-auto flex flex-col items-center gap-6">
      <ViewToggle
        value={view}
        onChange={(v) => {
          setPendingView(v);
          setRevealing(true);
        }}
        onPositionChange={setOrigin}
      />

      <div className="relative w-full">
        {/* CONTENT */}
        {view === "portfolio" ? <PortfolioView /> : <ResumeView />}

        {/* COLOR REVEAL LAYER */}
        {revealing && (
          <motion.div
            className="fixed inset-0 z-10 pointer-events-none"
            style={{
              background: view === "resume" ? "#fff" : "#000",
            }}
            initial={{
              clipPath: `ellipse(0% 0% at ${percent.x}% ${percent.y}%)`,
            }}
            animate={{
              clipPath: `ellipse(200% 200% at ${percent.x}% ${percent.y}%)`,
            }}
            transition={{
              duration: 0.4,
              ease: [0.87, 0, 0.13, 1],
            }}
            onAnimationComplete={() => {
              if (pendingView) setView(pendingView);
              setPendingView(null);
              setRevealing(false);
            }}
          />
        )}
      </div>
    </div>
  );
}
