import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="mt-32" id="about-us">
      <div className="section-title">About Us</div>
      <div className="grids bg-[#F9F9F9] items-center w-full overflow-x-hidden">
        <Image
          src={"/img/sunshine.jpeg"}
          alt=""
          width={832}
          height={691}
          className="w-full"
          data-aos="fade"
        />

        <div className="lg:px-10 px-5 lg:py-14 py-6" data-aos="fade">
          <div className="text-3xl lg:text-5xl font-semibold">
            Let the sunshine brighten your day.
          </div>

          <div className="text-black/60 mb-12 mt-9">
            Your clothes are an investment. Treat them with the care they
            deserve. Choose <span className="font-bold">MAINTENANCE</span> for
            top-quality laundry services that will keep your garments looking
            their best. <br /> <br /> Experience the future of laundry with our
            technically advanced washing machines. Our smart technology
            optimizes every wash, saving you time, water, and energy, all while
            delivering exceptional cleaning results.
          </div>

          <Link href={"#contact-us"}>
            <button className="text-white font-bold text-sm py-4 px-20 bg-brand-green rounded-md">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      <div className="grids divide-y-2 md:divide-y-0 md:divide-x-2 items-center mt-10 w-full overflow-x-hidden">
        <div className="p-20 uppercase text-center md:text-start">
          <div>
            <div className="text-[60px] font-semibold text-brand-green">25</div>
            <div className="text-black/60 font-normal">
              Years of <span className="font-bold">experience</span>
            </div>
          </div>

          <div className="mt-20">
            <div className="text-[60px] font-semibold text-brand-green">A+</div>
            <div className="text-black/60 font-normal">
              <span className="font-bold">rated</span> windows and doors
            </div>
          </div>
        </div>

        <div className="text-black/60 text-lg sm:text-2xl pl-4 md:pl-24 pr-4 py-7 text-center md:text-start">
          We are a family business with family values. Comprehensive insurance
          backed guarantee and Fensa Certificate with every installation. <br />{" "}
          Exclusive product range including the latest in style, security and
          energy saving performance. <br /> All installations carried out by
          Master Surveyors and Installers.
        </div>
      </div>
    </div>
  );
};

export default About;
