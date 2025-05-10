import React from "react";
import { FaLeaf, FaPlay } from "react-icons/fa";
import { IoArrowForwardCircle } from "react-icons/io5";

export default function SolarEnergySection() {
  return (
    <div className="w-full px-6 py-16 md:px-20 flex flex-col gap-12">
      <div className="w-full md:w-2/3">
        <p className="text-green-600 font-semibold uppercase text-sm">
          Leading The Way In Building And Civil Construction
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          We Are Ready For Solar Energy, All We Need Is To Use It Well!
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row justify-center w-full items-start gap-10">
        {/* Left Column - Stats */}
        <div className="space-y-10 text-center lg:text-left w-full lg:w-1/4">
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

        {/* Middle Column - Image with play button */}
        <div className="relative w-full lg:w-[40%]">
          <img
            src="/LandingPage/SolarEnerySectionImage.png"
            alt="Wind Turbine"
            className="rounded-xl w-full h-auto object-cover"
          />
          {/* <button className="absolute top-4 left-4 bg-white px-4 py-2 rounded-md shadow-md flex items-center gap-2 font-semibold text-sm">
            <FaPlay className="text-green-600" />
            Watch Our Intro!
          </button> */}
        </div>

        {/* Right Column - Description */}
        <div className="space-y-5 w-full lg:w-1/3">
          <FaLeaf className="text-green-600 text-4xl" />
          <p className="text-gray-800 font-semibold">
            We drive the transition to more sustainable, reliable, and
            affordable energy systems. With our innovative technologies, we
            energize society, that’s our aim!
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            The increase in extreme weather events and rising sea levels are
            unmistakable signs of climate change. These challenges threaten
            ecosystems, economies, and human well-being across the globe. At the
            same time, roughly 850 million people still live without access to
            electricity, which is the foundation of sustainable development and
            a basic human right. Reliable energy access enables education,
            healthcare, clean water, and economic opportunity. The urgent
            question we face is: how can we meet the growing demand for
            electricity while protecting our climate? The answer lies in
            accelerating the transition to renewable energy, especially solar
            power, and investing in clean, inclusive technologies that empower
            communities, reduce emissions, and build a more resilient, equitable
            future.
          </p>
          {/* <p className="text-gray-500 text-sm leading-relaxed">
            How can we meet the growing demand for electricity while protecting
            our climate and make planet a better place?
          </p> */}

          <div className="flex flex-col sm:flex-row sm:items-center justify-end pt-4 gap-4">
            {/* <button className="bg-black text-white px-5 py-2 rounded-md flex items-center gap-2 hover:bg-gray-800 transition w-max">
              <IoArrowForwardCircle className="text-xl" />
              Learn More
            </button> */}
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
