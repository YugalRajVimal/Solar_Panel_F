import React from "react";

const CustomerExperiences = () => {
  return (
    <div className="relative bg-white ">
      <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[520px]">
        <img
          src="/LandingPage/CustomerExpImg1.png"
          className="h-full w-full object-cover"
        />
      </div>
      {/* Heading */}
      <div className="absolute top-0 text-center w-full pt-10 mb-20">
        <p className="text-green-600 font-semibold mb-2">
          Customers Doing It Their Way
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 ">
          Our Customers Share Their <br className="hidden sm:block" />{" "}
          Experiences & Insights
        </h2>
      </div>

      {/* Avatars positioned (fake absolute points on map) */}
      {/* <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[520px]">
        {[
          { top: "15%", left: "10%" },
          { top: "25%", left: "35%" },
          { top: "20%", left: "60%" },
          { top: "45%", left: "20%" },
          { top: "50%", left: "50%" },
          { top: "30%", left: "80%" },
          { top: "60%", left: "30%" },
          { top: "15%", left: "68%" },
        ].map((pos, idx) => (
          <div
            key={idx}
            className="absolute w-8 h-8 sm:w-10 sm:h-10 rounded-full border-[2px] border-white shadow-lg overflow-hidden"
            style={{ top: pos.top, left: pos.left }}
          >
            <img
              src={`https://i.pravatar.cc/150?img=${idx + 10}`}
              alt={`Customer ${idx + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div> */}
      {/* <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[520px]"></div> */}

      {/* Bottom Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 px-10 md:px-20 ">
        <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-green-500">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-3xl text-green-600">🔆</span>
            <h3 className="text-lg font-semibold">Design & Shipping</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            We collaborate with you to design and deliver a system that meets
            your utility usage and selecting equips.
          </p>
          <a
            href="#"
            className="text-green-600 font-medium flex items-center gap-2 hover:underline"
          >
            <span>Schedule A Visit</span> →
          </a>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-green-500 ">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-3xl text-green-600">♻️</span>
            <h3 className="text-lg font-semibold">Design & Shipping</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Whether you want to install the system on your own or hire local
            contractors directly managing installation.
          </p>
          <a
            href="#"
            className="text-green-600 font-medium flex items-center gap-2 hover:underline"
          >
            <span>Schedule A Visit</span> →
          </a>
        </div>
      </div>

      {/* Bottom link */}
      <div className="text-center mt-10 text-sm text-gray-600 pb-10">
        Discover independence through the power of solar,&nbsp;
        <a
          href="#"
          className="font-semibold text-black underline hover:text-green-700"
        >
          Explore Our Plans →
        </a>
      </div>
    </div>
  );
};

export default CustomerExperiences;
