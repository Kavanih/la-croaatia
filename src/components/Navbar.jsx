"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="bg-white sticky top-0 py-4 h-20 z-10 w-screen overflow-x-hidden">
      <div className="flex justify-between lg:grid grid-cols-8 items-center w-5/6 mx-auto">
        <div className="col-span-2">
          <Image
            src={"/img/logo-black.png"}
            alt="logo"
            width={58}
            height={57}
            className="w-10"
          />
        </div>

        <div className="lg:flex gap-4 items-center col-span-4 justify-center hidden text-sm">
          <Link href={"#home"}>Home</Link>
          <Link href={"#services"}>Services</Link>
          <Link href={"#about-us"}>About Us</Link>
          <Link href={"#contact-us"}>Contact Us</Link>
        </div>

        <div className="col-span-2 flex justify-end">
          <div
            className="lg:hidden inline text-2xl"
            onClick={() => setOpenNav(!openNav)}
          >
            <CgMenuRight />
          </div>

          <Link href={"#contact-us"}>
            <button className="text-brand-green border border-brand-green font-semibold py-2 px-6 rounded hidden lg:inline">
              Get a free quote
            </button>
          </Link>
        </div>
      </div>

      {openNav && (
        <div
          className={`fixed top-20 right-0 bg-white h-[calc(100vh-5rem)] w-full max-w-60 shadow-lg block lg:hidden`}
        >
          <div className="flex gap-4 col-span-4 justify-center flex-col p-4">
            <Link href={"#home"} onClick={() => setOpenNav(false)}>
              Home
            </Link>
            <Link href={"#services"} onClick={() => setOpenNav(false)}>
              Services
            </Link>
            <Link href={"#about-us"} onClick={() => setOpenNav(false)}>
              About Us
            </Link>
            <Link href={"#contact-us"} onClick={() => setOpenNav(false)}>
              Contact Us
            </Link>

            <button className="text-brand-green border border-brand-green font-semibold py-2 px-6 rounded mt-5">
              Get a free quote
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
