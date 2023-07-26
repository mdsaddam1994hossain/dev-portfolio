import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Hero from "../components/hero";
import Services from "../components/services";
import About from "../components/about";
import Contact from "../components/contact";
import Skill from "../components/skill";
import FeaturedWork from "../components/work";
import Meeting from "../components/Meeting";

const DevelopmentPortfolioRakin: NextPage = () => {
  return (
    <div className="relative w-full flex flex-col items-start justify-start text-left text-45xl text-white font-poppins">
      <Hero />
      <Skill />
      <Services />
      <About />
      <FeaturedWork />
      <Meeting />
      <Contact />
    </div>
  );
};

export default DevelopmentPortfolioRakin;
