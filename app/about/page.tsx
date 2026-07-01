import { Metadata } from "next";
import { AboutHero } from "@/components/sections/about-hero";
import { AboutProblemSolution } from "@/components/sections/about-problem-solution";
import { AboutValues } from "@/components/sections/about-values";

export const metadata: Metadata = {
  title: "About Us | My Period Kit",
  description: "Learn about the mission, values, and team behind My Period Kit.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <AboutHero />
      <AboutProblemSolution />
      <AboutValues />
    </div>
  );
}
