"use client";
import { ReactNode } from "react";
import ScrollProgress from "@/components/scroll-progress";
import { TooltipProvider } from "@/components/ui/tooltip";
import LenisProvider from "./lenis";

const RootProviders = ({ children }: { children: ReactNode }) => {
  return (
    <LenisProvider>
      <TooltipProvider>
        <ScrollProgress />
        {children}
      </TooltipProvider>
    </LenisProvider>
  );
};

export default RootProviders;
