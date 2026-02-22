"use client";

import { useState } from "react";
import PortfolioView from "@/components/views/portfolio-view";
import ViewToggle from "@/components/toggle-switch";
import ResumeView from "@/components/views/resume-view";

export default function Home() {
  const [view, setView] = useState<"portfolio" | "resume">("portfolio");

  return (
    <div className="w-full pt-10 mx-auto flex flex-col items-center gap-6">
      <ViewToggle value={view} onChange={(v) => setView(v)} />

      <div className="relative w-full">
        {view === "portfolio" ? <PortfolioView /> : <ResumeView />}
      </div>
    </div>
  );
}
