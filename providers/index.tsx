"use client";
import { ReactNode } from "react";
import ScrollProgress from "@/components/scroll-progress";
import { TooltipProvider } from "@/components/ui/tooltip";
import LenisProvider from "./lenis";
import { ThemeProvider } from "./next-theme";
import ResetTheme from "./reset-theme";

const RootProviders = ({ children }: { children: ReactNode }) => {
  return (
    <LenisProvider>
      <TooltipProvider>
        <ScrollProgress />
        <ResetTheme />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          themes={["light", "dark"]}
          storageKey={undefined}
        >
          {children}
        </ThemeProvider>
      </TooltipProvider>
    </LenisProvider>
  );
};

export default RootProviders;
