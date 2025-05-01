import React from "react";
import { FaLeaf, FaHome, FaStar, FaBolt, FaUserCheck } from "react-icons/fa";

const features = [
  {
    icon: <FaLeaf className="text-green-600 text-4xl" />,
    title: "Save Your Money",
    description: "Save money on utilities or increase the value of your home by installing solar",
  },
  {
    icon: <FaStar className="text-green-600 text-4xl" />,
    title: "5Stars Customer Service",
    description: "Understand that we must go above our customer expectations during each interaction always.",
  },
  {
    icon: <FaHome className="text-green-600 text-4xl" />,
    title: "Your Home Is Energy",
    description: "Everyday the sun provides us with abundance of free energy by placing solar",
  },
  {
    icon: <FaBolt className="text-green-600 text-4xl" />,
    title: "Consult & Planning",
    description: "Our remote industrial solar systems are designed to reliably power our clients",
  },
  {
    icon: <FaUserCheck className="text-green-600 text-4xl" />,
    title: "Certified Engineers",
    description: "Our sales engineers on our staff have experience and can design any complete",
  },
];

export default function EnergySection() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Content */}
        <div>
          <p className="text-green-600 font-semibold mb-2">Making Tomorrow Different Today.</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Energize Society With Sustainable And Reliable Energy Systems!
          </h2>
          <p className="text-gray-600 mb-6">
            In recent years, new capacity across the solar value chain has become necessary to support the PV market’s growth.
            However, the capital required to establish and scale-up wafer, solar cell and solar module manufacturing facilities is considerable.
          </p>
          <p className="text-gray-600 mb-8">
            Together, these factors pose a serious challenge to sustainable operation and growth of global solar manufacturers.
          </p>
          <button className="bg-green-600 text-white px-5 py-3 rounded-md font-semibold flex items-center gap-2 hover:bg-green-700 transition">
            ➜ Explore All Features!
          </button>
        </div>

        {/* Right Content */}
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col gap-4 items-start">
              {item.icon}
              <div>
                <h4 className="text-md font-semibold text-gray-900 mb-1">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
          <div className="bg-green-600 text-white rounded-lg p-6 flex flex-col justify-center">
            <h4 className="text-lg font-semibold mb-2">Awards & Milestones</h4>
            <p>Benefiting from nearly <span className="font-bold">20 years</span> experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
