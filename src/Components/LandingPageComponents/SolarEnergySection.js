import React, { useEffect, useRef } from "react";
import { FaLeaf } from "react-icons/fa";
import { IoArrowForwardCircle } from "react-icons/io5";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SolarEnergySection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll(".gsap-fade-in");

    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full px-6 py-16 md:px-20 flex flex-col gap-12"
    >
      <div className="w-full md:w-2/3 gsap-fade-in">
        <p className="text-green-600 font-semibold uppercase text-sm">
          Leading The Way In Building And Civil Construction
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          We Are Ready For Solar Energy, All We Need Is To Use It Well!
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row justify-center w-full items-start gap-10">
        {/* Left Column - Stats */}
        <div className="space-y-10 text-center lg:text-left w-full lg:w-1/4 gsap-fade-in">
          <div>
            <h2 className="text-green-600 text-5xl font-semibold">6,154</h2>
            <p className="mt-1 text-gray-700 font-medium">
              Projects Completed In Last 5 Years
            </p>
          </div>
          <div>
            <h2 className="text-green-600 text-5xl font-semibold">2,512</h2>
            <p className="mt-1 text-gray-700 font-medium">
              Qualified Employees & Workers With Us
            </p>
          </div>
          <div>
            <h2 className="text-green-600 text-5xl font-semibold">98%</h2>
            <p className="mt-1 text-gray-700 font-medium">
              Customer Satisfaction Across All Projects
            </p>
          </div>
        </div>

        {/* Middle Column - Image */}
        <div className="relative w-full lg:w-[40%] gsap-fade-in">
          <img
            src="/LandingPage/SolarEnerySectionImage.png"
            alt="Wind Turbine"
            className="rounded-xl w-full h-auto object-cover"
          />
        </div>

        {/* Right Column - Description */}
        <div className="space-y-5 w-full lg:w-1/3 gsap-fade-in">
          <FaLeaf className="text-green-600 text-4xl" />
          <p className="text-gray-800 font-semibold">
            We drive the transition to more sustainable, reliable, and
            affordable energy systems...
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            The increase in extreme weather events and rising sea levels are
            unmistakable signs of climate change...
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-end pt-4 gap-4">
            <div>
              <p className="font-semibold">by RJ Solar</p>
              <p className="text-green-600 text-sm">Technology</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
