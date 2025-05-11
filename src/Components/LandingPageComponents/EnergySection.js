import React, { useEffect, useRef } from "react";
import { FaLeaf, FaHome, FaStar, FaBolt, FaUserCheck } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <FaLeaf className="text-green-600 text-4xl" />,
    title: "Save Your Money",
    description:
      "Save money on utilities or increase the value of your home by installing solar",
  },
  {
    icon: <FaStar className="text-green-600 text-4xl" />,
    title: "5Stars Customer Service",
    description:
      "Understand that we must go above our customer expectations during each interaction always.",
  },
  {
    icon: <FaHome className="text-green-600 text-4xl" />,
    title: "Your Home Is Energy",
    description:
      "Everyday the sun provides us with abundance of free energy by placing solar",
  },
  {
    icon: <FaBolt className="text-green-600 text-4xl" />,
    title: "Consult & Planning",
    description:
      "Our remote industrial solar systems are designed to reliably power our clients",
  },
  {
    icon: <FaUserCheck className="text-green-600 text-4xl" />,
    title: "Certified Engineers",
    description:
      "Our sales engineers on our staff have experience and can design any complete",
  },
];

export default function EnergySection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".fade-up-left",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".fade-up-left",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.utils.toArray(".feature-card").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      gsap.fromTo(
        ".milestone-box",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".milestone-box",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <section className="bg-white py-16 px-6" ref={sectionRef}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Content */}
        <div className="fade-up-left">
          <p className="text-green-600 font-semibold mb-2">
            Making Tomorrow Different Today.
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Energize Society With Sustainable And Reliable Energy Systems!
          </h2>
          <p className="text-gray-600 mb-6">
            In recent years, new capacity across the solar value chain has
            become necessary to support the PV market’s growth...
          </p>
          <button className="bg-green-600 text-white px-5 py-3 rounded-md font-semibold flex items-center gap-2 hover:bg-green-700 transition">
            ➜ Explore All Features!
          </button>
        </div>

        {/* Right Content */}
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((item, index) => (
            <div key={index} className="feature-card flex flex-col gap-4 items-start">
              {item.icon}
              <div>
                <h4 className="text-md font-semibold text-gray-900 mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
          <div className="milestone-box bg-green-600 text-white rounded-lg p-6 flex flex-col justify-center">
            <h4 className="text-lg font-semibold mb-2">Awards & Milestones</h4>
            <p>
              Benefiting from nearly <span className="font-bold">5+ years</span>{" "}
              experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
