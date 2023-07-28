import type { NextPage } from "next";
import Header from "../components/header";
import ContainerHero from "../components/container-hero";
import SkillContainer from "../components/skill-container";
import ServiceCardForm from "../components/service-card-form";
import About from "../components/about";
import FeaturedWorkContainer from "../components/featured-work-container";
import TestimonialsContainer from "../components/testimonials-container";
import ContactFormContainer from "../components/contact-form-container";
import Footer from "../components/footer";

const DevelopmentPortfolioRakin: NextPage = () => {
  return (
    <div className="relative w-full h-[7285px] flex flex-col items-start justify-start">
      <Header />
      <ContainerHero />
      <SkillContainer />
      <ServiceCardForm />
      <About />
      <FeaturedWorkContainer />
      <TestimonialsContainer />
      <ContactFormContainer />
      <Footer />
    </div>
  );
};

export default DevelopmentPortfolioRakin;
