import type { NextPage } from "next";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const Hero = dynamic(() => import("../components/hero"));
const Services = dynamic(() => import("../components/services"));
const About = dynamic(() => import("../components/about"));
const Contact = dynamic(() => import("../components/contact"));
const Skill = dynamic(() => import("../components/skill"));
const FeaturedWork = dynamic(() => import("../components/work"));
const Meeting = dynamic(() => import("../components/Meeting"));
const TestimonialsContainer = dynamic(
  () => import("../components/testimonials-container")
);

const DevelopmentPortfolioRakin: NextPage = () => {
  useEffect(() => {
    // Perform any side effects or data fetching here
  }, []);

  return (
    <>
      <Head>
        <title>Saddam Hossain | Fullstack Developer Portfolio</title>
        <meta
          name="description"
          content="Welcome to the portfolio of Saddam Hossain, a skilled and versatile Fullstack Developer. Explore a showcase of web development projects, highlighting expertise in front-end and back-end technologies. Get in touch for collaborations and opportunities."
        />
      </Head>

      <div className="relative w-full flex flex-col items-start justify-start text-left text-45xl text-white font-poppins">
        <Hero />
        <Skill />
        <Services />
        <About />
        <FeaturedWork />
        <TestimonialsContainer />
        <Meeting />
        <Contact />
      </div>
    </>
  );
};

export default DevelopmentPortfolioRakin;
