import React, { useState } from "react";
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";
import { IoArrowForwardCircle } from "react-icons/io5";

export default function HeroSection() {
  const HeroSectionData = [
    {
      imageLink: "/LandingPage/HeroSectionImage1.jpg",
      topHeading: "Complete Commercial, Residential & Industrial Solar Systems",
      midHeading: (
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          We Invest In The
          <br />
          Future Of Planet!
        </h1>
      ),
      belowHeading:
        "As a world wide distributor of solar supplies we endeavor to provide fast and knowledgeable service, we can get you materials by sea or air.",
    },
    // {
    //   imageLink: "/LandingPage/HeroSectionImage2.jpg",
    //   topHeading: "Complete Commercial, Residential & Industrial Solar Systems",
    //   midHeading: (
    //     <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
    //       Energize Society By
    //       <br />
    //       Reliable Energy!
    //     </h1>
    //   ),
    //   belowHeading:
    //     "As a world wide distributor of solar supplies we endeavor to provide fast and knowledgeable service, we can get you materials by sea or air.",
    // },
    {
      imageLink: "/LandingPage/HeroSectionImage3.jpeg",
      topHeading: "Complete Commercial, Residential & Industrial Solar Systems",
      midHeading: (
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          Powering Tomorrow
          <br />
          With Clean Energy
        </h1>
      ),
      belowHeading:
        "From small homes to large-scale industrial projects, our solar solutions are designed to meet every need efficiently and sustainably.",
    },
    {
      imageLink: "/LandingPage/HeroSectionImage4.jpeg",
      topHeading: "Complete Commercial, Residential & Industrial Solar Systems",
      midHeading: (
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          Your Trusted Partner
          <br />
          In Renewable Energy
        </h1>
      ),
      belowHeading:
        "With expert guidance and global logistics, we deliver solar technology to every corner of the world—quickly and reliably.",
    },
    {
      imageLink: "/LandingPage/HeroSectionImage5.jpeg",
      topHeading: "Complete Commercial, Residential & Industrial Solar Systems",
      midHeading: (
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          Lighting The Way
          <br />
          To A Greener Planet
        </h1>
      ),
      belowHeading:
        "Our end-to-end solar services ensure a seamless transition to renewable energy for residential, commercial, and industrial clients.",
    },
    {
      imageLink: "/LandingPage/HeroSectionImage6.jpeg",
      topHeading: "Complete Commercial, Residential & Industrial Solar Systems",
      midHeading: (
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          Sustainable Energy,
          <br />
          Global Reach
        </h1>
      ),
      belowHeading:
        "As a global solar provider, we make it easy to go green with fast delivery and expert support across all sectors.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);

  const handleSlideChange = (direction) => {
    setFade(false);
    setTimeout(() => {
      setCurrentSlide((prev) => {
        if (direction === "next") return (prev + 1) % HeroSectionData.length;
        else return prev === 0 ? HeroSectionData.length - 1 : prev - 1;
      });
      setFade(true);
    }, 300);
  };

  const { imageLink, topHeading, midHeading, belowHeading } =
    HeroSectionData[currentSlide];

  return (
    <div className="relative w-full h-[90vh] min-h-[500px] overflow-hidden">
      {/* Background Image */}
      <img
        src={imageLink}
        alt="solar"
        className={`absolute inset-0 w-full h-full object-cover z-[-1] transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Arrows */}
      <div className="absolute text-4xl sm:text-5xl inset-0 w-full h-full flex  md:px-4 justify-between items-center text-white z-10">
        <button onClick={() => handleSlideChange("prev")}>
          <RiArrowLeftWideFill className="cursor-pointer hover:scale-110 transition" />
        </button>
        <button onClick={() => handleSlideChange("next")}>
          <RiArrowRightWideFill className="cursor-pointer hover:scale-110 transition" />
        </button>
      </div>

      {/* Hero Content */}
      <div
        className={`relative z-20 h-full w-full flex flex-col justify-center px-4 sm:px-8 md:px-16 text-white max-w-3xl transition-opacity ease-in-out duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="text-center sm:text-left flex flex-col items-center sm:items-start px-4 md:px-6">
          <p className="uppercase text-xs sm:text-sm font-light mb-2">
            {topHeading}
          </p>
          {midHeading}
          <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 max-w-lg">
            {belowHeading}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-green-600 flex justify-center items-center gap-2 text-white font-semibold px-5 py-2 rounded-lg hover:bg-green-700 transition">
              <IoArrowForwardCircle className="text-xl" />
              More About Us
            </button>
            <button className="bg-white text-green-600 font-semibold px-5 py-2 rounded-lg border border-green-600 hover:bg-green-50 transition">
              More About Us!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
