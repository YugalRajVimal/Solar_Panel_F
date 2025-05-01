import React from "react";

const Footer = () => {
  return (
    <footer class="bg-black text-white px-6 py-10 md:px-20">
      <div class="grid grid-cols-1 md:grid-cols-5 gap-10">
        <div>
          <h3 class="font-semibold text-lg mb-4">Quick Contact</h3>
          <p class="text-sm mb-2">
            If you have any questions or need help, feel free to contact with
            our team.
          </p>
          <p class="text-green-500 flex items-center gap-2 mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-green-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 2.5A.5.5 0 012.5 2h1a.5.5 0 01.5.5V5a.5.5 0 01-.5.5h-1A.5.5 0 012 5V2.5zM5 2a2 2 0 00-2 2v1h2.5a.5.5 0 01.5.5v2a.5.5 0 01-.5.5H3v1a2 2 0 002 2h1.5a.5.5 0 01.5.5V16a.5.5 0 01-.5.5H3a2 2 0 01-2-2V4a2 2 0 012-2h2z" />
            </svg>
            55 654 541 17
          </p>
          <p class="mt-4 text-sm">
            2307 Beverley Rd Brooklyn, New York 11226 United States.
          </p>
          <p class="flex items-center text-sm mt-2 text-white gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 12.414a1 1 0 00-1.414 0L6.343 18.343A8 8 0 1117.657 16.657z"
              />
            </svg>
            Get Directions
          </p>
        </div>

        <div>
          <h3 class="font-semibold text-lg mb-4">Company</h3>
          <ul class="text-sm space-y-2">
            <li>About Us</li>
            <li>Leadership Team</li>
            <li>News & Media</li>
            <li>Case Studies</li>
            <li>Our Projects</li>
            <li>Contacts</li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold text-lg mb-4">Services</h3>
          <ul class="text-sm space-y-2">
            <li>Wind Generators</li>
            <li>Solar PV Materials</li>
            <li>Battery Materials</li>
            <li>Refined Products</li>
            <li>Solar Modules</li>
            <li>Biodiesel Fuel</li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold text-lg mb-4">Support</h3>
          <ul class="text-sm space-y-2">
            <li>Terms & Conditions</li>
            <li>Shipping Policy</li>
            <li>Delivery Tips</li>
            <li>Returns</li>
          </ul>
        </div>

        <div>
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
        </div>
      </div>

      <div class="mt-10 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <div class="space-x-4 mb-2 md:mb-0">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Sitemap</a>
        </div>
        <p class="text-gray-400">
          © 2022 Solatec, All Rights Reserved. With Love by{" "}
          <a href="#" class="text-green-500">
            7oroof.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
