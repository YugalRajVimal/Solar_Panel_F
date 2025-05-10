"use client";
import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const projects = [
  {
    image: "/LandingPage/Project00001.jpg",
    category: "Finance, Supply Chain",
    title: "Expanding The Solar Supply Chain Finance Program",
  },
  {
    image: "/LandingPage/Project00002.jpg",
    category: "Customized Solar Solutions",
    title: "Tailored designs based on your location, energy needs, and budget.",
  },
  {
    image: "/LandingPage/Project00003.jpg",
    category: "High-Quality Solar Panels & Equipment",
    title:
      "We use only premium, high-efficiency panels and inverters with long warranties.",
  },
  {
    image: "/LandingPage/Project00004.jpg",
    category: "Flexible Financing Options",
    title: "EMI and leasing plans to make solar affordable for everyone.",
  },
  {
    image: "/LandingPage/Project00005.jpg",
    category: "Fast & Hassle-Free Installation",
    title: "Timely execution with minimal disruption to your daily routine.",
  },
  {
    image: "/LandingPage/Project00006.jpg",
    category: "Remote Monitoring & Smart Tracking",
    title: "Real-time performance tracking apps and tools for your solar system.",
  },
];

export default function ProjectsSlider() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="relative bg-black text-white px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 items-center gap-8 mb-10">
          <div>
            <p className="text-green-500 font-semibold mb-2">
              Improving The Performance Of Solar Energy.
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Latest Projects, Solutions And Energy Supplies
            </h2>
          </div>
          <div>
            <p className="text-gray-300 mb-4">
              With our innovative technologies, clear focus on the needs of our
              customers, and 1,210 dedicated employees, we energize society.
              Let’s make tomorrow different today!
            </p>
            <button className="border border-white text-white px-5 py-2 rounded-md hover:bg-white hover:text-black transition font-semibold">
              ⭢ Our Core Values
            </button>
          </div>
        </div>

        {/* Arrows */}
        <div className="absolute hidden md:absolute top-0 left-0 w-[188px] h-full flex justify-center items-center gap-4 mt-6 z-10">
          <div className="flex flex-col items-center gap-1 text-white text-6xl">
            <button
              onClick={scrollRight}
              className="p-2 rounded-full text-white transition"
            >
              <IoIosArrowForward />
            </button>

            <button
              onClick={scrollLeft}
              className="p-2 rounded-full text-white transition"
            >
              <IoIosArrowBack />
            </button>
          </div>
        </div>

        {/* Project Cards */}
        <div
          ref={sliderRef}
          className="relative  md:pl-6 flex gap-4 w-full overflow-x-scroll scroll-smooth scrollbar-hide"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg w-full md:w-[30%] overflow-hidden text-black shrink-0"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[350px] object-cover"
              />
              <div className="p-4">
                <p className="text-green-600 text-sm mb-1">
                  {project.category}
                </p>
                <h4 className="font-semibold text-md">{project.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
