import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaBuilding,
  FaEnvelope,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="bg-white py-10 px-4 sm:px-10 lg:px-20 pt-[120px]">
      <h2 className="text-3xl font-bold text-center mb-10">Contact US</h2>

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-10 shadow-xl p-10 rounded-lg">
        {/* Left Side - Contact Info */}
        <div>
          <h3 className="text-xl font-semibold">
            Contact our support guys or make appointment with{" "}
            <span className="italic text-blue-700 font-bold">
              our consultants
            </span>
          </h3>
          <p className="text-sm text-gray-600 mt-4">
            Please contact us using the information below. For additional
            information on our management consulting services, please visit the
            appropriate page on our site.
          </p>

          {/* Registered Office */}
          <div className="mt-6">
            <h4 className="font-bold text-sm flex items-center gap-2">
              <FaBuilding className="text-blue-700" />
              REGISTERED OFFICE
            </h4>
            <p className="text-sm text-gray-700 ml-6">
              G-13,
              <br />
              Sector 6, Noida
              <br />
              Uttar Pradesh
              <br />
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="text-blue-700 flex items-center gap-1 mt-1"
              >
                <FaMapMarkerAlt /> view on map
              </a>
              <div className="flex items-center gap-2 mt-1 text-black">
                <FaPhoneAlt /> (+91) 999999999
              </div>
              <div className="flex items-center gap-2 mt-1 text-black">
                <FaEnvelope /> info@abcd.com
              </div>
            </p>
          </div>
        </div>

        {/* Right Side - Contact Form
          <div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name*"
                className="w-full border border-blue-400 p-3 rounded-md focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email Address*"
                className="w-full border border-blue-400 p-3 rounded-md focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number*"
                className="w-full border border-blue-400 p-3 rounded-md focus:outline-none"
              />
              <input
                type="text"
                placeholder="Subject*"
                className="w-full border border-blue-400 p-3 rounded-md focus:outline-none"
              />
              <textarea
                rows="5"
                placeholder="Message*"
                className="w-full border border-blue-400 p-3 rounded-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:from-blue-600 hover:to-blue-400"
              >
                Submit
              </button>
            </form>
          </div> */}
      </div>
      <div className="w-full pt-14">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7007.175783145828!2d77.30517591559506!3d28.582135273725672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45e3eccb8a7%3A0xd5eb60e62b19e6ba!2sSector%2015%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1746266105696!5m2!1sen!2sin"
          className="w-full h-[500px] border-0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
