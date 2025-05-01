import React, { useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const services = [
  {
    title: "Solar Panels",
    image: "/LandingPage/ServiceImg1.jpg",
    description:
      "A PV module is an assembly of photovoltaic cells mounted in a framework for installation.",
  },
  {
    title: "Wind Turbines",
    image: "/LandingPage/ServiceImg2.jpg",
    description:
      "The smallest turbines used for applications such as battery charging for cells mounted in a framework auxiliary.",
  },
  {
    title: "Hydropower Plants",
    image: "/LandingPage/ServiceImg3.jpg",
    description:
      "Hydroelectric power plants can include a reservoir to exploit the energy of falling water by the smallest turbines.",
  },
  {
    title: "Fossil Resources",
    image: "/LandingPage/ServiceImg4.jpg",
    description:
      "Green chemistry is attracting interest as it provides clean and green technologies with used for applications.",
  },
  {
    title: "Battery Materials",
    image: "/LandingPage/ServiceImg5.jpg",
    description:
      "Lithium batteries have become the battery type of choice in most applications due to the high energy ",
  },
  {
    title: "Charge Controllers",
    image: "/LandingPage/ServiceImg6.jpg",
    description:
      "Charge controllers regulate the rate of charge from your inverter to your battery bank just browse our controllers.",
  },
];

export default function ServiceSection() {
  const scrollRef = useRef(null);
  const [reverse, setReverse] = useState("flex-row-reverse");

  const scroll = (direction) => {
    toggleReverse(direction == "left" ? 0 : 1);
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = current.offsetWidth; // scroll by visible width (4 cards)
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const toggleReverse = (id) => {
    if (id == 0) {
      setReverse("flex-row");
    } else if (id == 1) {
      setReverse("flex-row-reverse");
    }
  };

  return (
    <section className="bg-[#111] text-white py-16 px-4 sm:px-6 md:px-12 overflow-hidden w-screen">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 items-start">
        <div>
          <p className="text-green-500 font-semibold mb-2">
            Making Tomorrow Different Today.
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
            A Leading Supplier Of Solar Materials For Manufacturers, Installers
            & Contractors.
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-white/90">
            Our Solar business is focused on creating PV material solutions that
            reduce manufacturing costs, while improving the yield and
            performance of solar energy products.
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <button className="bg-green-500 hover:bg-green-600 transition px-5 py-2 rounded-md font-semibold flex items-center gap-2">
              Request A Quote <IoIosArrowForward />
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-black transition px-5 py-2 rounded-md font-semibold flex items-center gap-2">
              Explore All Services <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>

      {/* Services Cards */}
      <div className="max-w-7xl mx-auto mt-14 relative">
        <div
          className="flex gap-4 overflow-x-hidden transition-all duration-300"
          ref={scrollRef}
        >
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white shrink-0 w-full md:w-[25%] text-black rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover bg-green-400"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {service.description}
                </p>
                <button className="flex items-center gap-2 text-sm text-green-600 font-semibold hover:underline">
                  Read More <IoIosArrowForward />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <div className="flex items-center gap-3 text-white text-sm">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full border border-white hover:bg-white hover:text-black transition"
            >
              <FaArrowLeft />
            </button>
            <div className={`flex gap-2 px-4 ${reverse}`}>
              <span className="p-[2px] border-[2px] border-green-400 bg-black rounded-full"></span>
              <span className="p-[2px] border-[2px] border-white bg-white rounded-full"></span>
            </div>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full border border-white hover:bg-white hover:text-black transition"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto text-center mt-12">
        <p className="text-sm text-white/80">
          We drive the transition to more sustainable, reliable & affordable
          energy systems,
          <a
            href="#"
            className="text-green-400 font-semibold ml-1 hover:underline"
          >
            Find Your Solution <IoIosArrowForward className="inline-block" />
          </a>
        </p>
      </div>
    </section>
  );
}
