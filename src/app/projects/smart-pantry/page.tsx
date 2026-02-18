"use client";

import { Hero } from "./components/Hero";
import { BentoGrid } from "./components/BentoGrid";
import { Features } from "./components/Features";
import { Roadmap } from "./components/Roadmap";
import { TechStack } from "./components/TechStack";
import { CallToAction } from "./components/CallToAction";

export default function SmartPantryPage() {
  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <BentoGrid />
      <Features />
      <Roadmap />
      <TechStack />
      <CallToAction />
    </div>
  );
}
