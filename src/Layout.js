import { Outlet } from "react-router-dom";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />

      {/* <div className="fixed flex  items-center  justify-between p-4 w-full bottom-[10px] sm:bottom-0 left-0 z-[100] ">
          <a href="https://www.instagram.com/geetafabs" className="">
            <IoLogoInstagram className="text-5xl text-white bg-black p-2   rounded-full" />
          </a>
          <a href="http://wa.me/+918595205465">
            <IoLogoWhatsapp className="text-5xl text-[#08c241] " />
          </a>
        </div> */}

      <Footer />
    </>
  );
};

export default Layout;
