import { MdFacebook } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#001623] pt-12 pb-12 sm:pb-24 text-white">
      <div className="w-5/6 mx-auto">
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="text-center sm:text-start">Contact Us</div>

          <div className="flex gap-4 sm:gap-16 justify-center">
            <div>ABOUT US</div>
            <div>LEGAL</div>
          </div>

          <div className="flex justify-center md:justify-end gap-2 text-xl">
            <MdFacebook />
            <FaLinkedin />
            <FaInstagram />
          </div>
        </div>

        <div className="flex justify-center items-center gap-5 mt-20 sm:mt-40">
          <div className="line"></div>
          <Image
            src={"/img/logo-white.png"}
            alt="logo"
            width={60.38}
            height={67.2}
            className=""
          />
          <div className="line"></div>
        </div>

        <div className="text-center mt-6">
          <div className="">M-MAINTENANCE</div>
          <div className="text-sm text-white/35 mt-2">Split</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
