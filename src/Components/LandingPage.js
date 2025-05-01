import React from "react";
import HeroSection from "./LandingPageComponents/HeroSection";
import SolarEnergySection from "./LandingPageComponents/SolarEnergySection";
import ServiceSection from "./LandingPageComponents/ServiceSection";
import EnergySection from "./LandingPageComponents/EnergySection";
import ProjectsSlider from "./LandingPageComponents/ProjectSliders";
import CustomerExperiences from "./LandingPageComponents/CustomerExperience";
import RecentArticles from "./LandingPageComponents/RecentArticles";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <SolarEnergySection />
      <ServiceSection />
      <EnergySection />
      <ProjectsSlider />
      <CustomerExperiences />
      <RecentArticles />
    </div>
  );
};

export default LandingPage;
