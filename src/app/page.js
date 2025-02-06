"use client";
import AOS from "aos";
import "aos/dist/aos.css";

import About from "@/components/About";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 800, offset: -100, once: true });
  }, []);

  return (
    <div className="">
      <div>
        <Navbar />
        <Header />
        <div className="w-5/6 mx-auto">
          <Services />
          <About />
        </div>
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
}
