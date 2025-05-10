import React from "react";

const CompanyInfoComponent = () => {
  return (
    <section className="w-full px-4 py-20 md:px-16 bg-zinc-300">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left Section */}
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            WELCOME TO <br />
            RJ Solar Technology
          </h2>
          <p className="text-gray-600 mb-2">
            RJ Solar Technology is a manufacturer, wholesaler, trader and
            service provider of Solar Product, Solar Pumps, Solar Batteries,
            Solar Plants, Solar Thermal Plants, Solar Lightings and Solar
            Vehicles.
          </p>
          <a href="#" className="text-indigo-600 underline mb-4 inline-block">
            Read More...
          </a>
          <p className="text-gray-700 font-medium mb-4">
            GET IN TOUCH WITH US FOR BEST DEALS
          </p>
          <a href="mailto:rjsolartechnology@gmail.com">
            <button className="bg-black text-white px-6 py-3 rounded-md shadow hover:bg-green-800 transition duration-200">
              Contact Us
            </button>
          </a>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:w-1/2">
          <InfoCard
            icon="🤝"
            label="Nature of Business"
            value="Service Provider and Others"
          />
          <InfoCard
            icon="👥"
            label="Total Number of Employees"
            value="11 to 25 People"
          />
          <InfoCard
            icon="🏢"
            label="GST Registration Date"
            value="07-10-2019"
          />
          <InfoCard
            icon="⚖️"
            label="Legal Status of Firm"
            value="Limited Company"
          />
          <InfoCard icon="🔄" label="Annual Turnover" value="1.5 - 5 Cr" />
          <InfoCard icon="🧾" label="GST No." value="09AAECE2033J1ZS" />
          <InfoCard icon="🏷️" label="CIN No." value="U72900DL2016PTC290367" />
          <InfoCard icon="✅" label="Trustseal Verified" value="" />
        </div>
      </div>
    </section>
  );
};

const InfoCard = ({ icon, label, value }) => (
  <div className="flex items-start gap-3">
    <div className="text-2xl text-[#6d752f]">{icon}</div>
    <div>
      <p className="text-sm font-semibold text-gray-800">{label}</p>
      {value && <p className="text-sm text-gray-600">{value}</p>}
    </div>
  </div>
);

export default CompanyInfoComponent;
