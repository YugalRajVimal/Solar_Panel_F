import React from "react";
import { FaPhone, FaMapPin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="bg-black text-white px-6 py-10 md:px-20">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 class="font-semibold text-lg mb-4">Quick Contact</h3>
          <p class="text-sm mb-2">
            If you have any questions or need help, feel free to contact with
            our team.
          </p>
          <p class="text-green-500 flex items-center gap-2 mt-2">
            <FaPhone className="rotate-90" />
            8279983842
          </p>
          <p class="mt-4 text-sm flex items-center gap-2 mt-2">
            <FaMapPin className="" />
            Near Mother India school Bus stand, Etawah 206001
          </p>
        </div>

        <div>
          <h3 class="font-semibold text-lg mb-4">Company</h3>
          <ul class="text-sm space-y-2">
            <li>About Us</li>
            <li>Services we provide</li>
            <li>Our Projects</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* <div>
          <h3 class="font-semibold text-lg mb-4">Services</h3>
          <ul class="text-sm space-y-2">
            <li>Wind Generators</li>
            <li>Solar PV Materials</li>
            <li>Battery Materials</li>
            <li>Refined Products</li>
            <li>Solar Modules</li>
            <li>Biodiesel Fuel</li>
          </ul>
        </div> */}

        {/* <div>
          <h3 class="font-semibold text-lg mb-4">Support</h3>
          <ul class="text-sm space-y-2">
            <li>Terms & Conditions</li>
            <li>Shipping Policy</li>
            <li>Delivery Tips</li>
            <li>Returns</li>
          </ul>
        </div> */}

        {/* <div>
          <h3 class="font-semibold text-lg mb-4">Products Catalogue</h3>
          <a
            href="#"
            class="bg-green-500 text-white px-4 py-2 rounded-md inline-flex items-center gap-2 text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M5 20h14v-2H5v2zm7-18L5.33 9h13.34L12 2z" />
            </svg>
            Download PDF
          </a>
          <div class="flex gap-4 mt-6">
            <div class="bg-black border border-gray-700 rounded-full p-2 text-green-500">
              <i class="fab fa-facebook-f"></i>
            </div>
            <div class="bg-black border border-gray-700 rounded-full p-2 text-green-500">
              <i class="fab fa-instagram"></i>
            </div>
            <div class="bg-black border border-gray-700 rounded-full p-2 text-green-500">
              <i class="fab fa-twitter"></i>
            </div>
          </div>
        </div> */}
      </div>

      <div class="mt-10 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <div class="space-x-4 mb-2 md:mb-0">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
        <p class="text-gray-400">
          © 2025 RJ Solar Technology, All Rights Reserved. With Love by{" "}
          <a href="#" class="text-green-500">
            GoWappily Infotech
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
