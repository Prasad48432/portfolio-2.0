"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  {
    ssr: false,
  },
);

const GitHubContributions = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="w-full mt-4 lg:mt-8 px-4 sm:px-8 md:px-0 mb-6"
    >
      <div className="w-full">
        <GitHubCalendar
          username="Prasad48432"
          colorScheme="dark"
          fontSize={12}
          blockSize={12}
          theme={{
            dark: ["#1b1b1b", "#333333", "#666666", "#999999", "#ffffff"],
          }}
        />
      </div>
    </motion.div>
  );
};

export default GitHubContributions;
