"use client";
import GithubCalendar from "@/components/github-chart";
import { motion } from "motion/react";
import WorkExperienceList from "@/components/work-exp/work-exp-list";
import workExperiences from "@/components/work-exp/work-data";
import ProjectList from "@/components/projects/project-list";
import MasteredTools from "@/components/mastered-tools";
import GetInTouch from "@/components/get-in-touch";
import Hero from "@/components/hero";
import Footer from "@/components/footer";

export default function PortfolioView() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full pt-2 sm:pt-4 md:pt-8 max-w-212.5 mx-auto flex flex-col items-center gap-6"
    >
      <Hero />
      <GithubCalendar />
      <WorkExperienceList experiences={workExperiences} />
      <ProjectList />
      <MasteredTools />
      <GetInTouch />
      <Footer />
    </motion.div>
  );
}
