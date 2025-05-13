import React from "react";
import HeroSection from "./LandingPageComponents/HeroSection";
import SolarEnergySection from "./LandingPageComponents/SolarEnergySection";
import ServiceSection from "./LandingPageComponents/ServiceSection";
import EnergySection from "./LandingPageComponents/EnergySection";
import ProjectsSlider from "./LandingPageComponents/ProjectSliders";
import CustomerExperiences from "./LandingPageComponents/CustomerExperience";
import RecentArticles from "./LandingPageComponents/RecentArticles";
import CompanyInfoComponent from "./LandingPageComponents/CompanyInfoComponent";

const LandingPage = () => {
  return (
    <div className="relative">
      <HeroSection />
      <SolarEnergySection />
      {/* <ServiceSection /> */}
      <EnergySection />
      <ProjectsSlider />
      <CustomerExperiences />
      <CompanyInfoComponent />
      <RecentArticles />
      <div className="fixed flex  items-center  justify-between p-4 w-full bottom-[10px] sm:bottom-0 left-0 ">
        <a href="tel:+918279983842" className="">
          <FaPhoneAlt className="text-5xl text-white bg-black p-2   rounded-full" />
        </a>
        <a href="http://wa.me/+918279983842">
          <IoLogoWhatsapp className="text-5xl text-[#08c241] " />
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
