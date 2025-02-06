import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-[url(/img/header.png)] md:bg-[url()] bg-bottom bg-no-repeat bg-cover">
      <div
        className="pt-10 pb-24 grid md:grid-cols-2 gap-7 items-center md:items-start overflow-x-hidden w-5/6 mx-auto"
        id="home"
      >
        <div className="lg:py-16 lg:pl-20" data-aos="fade">
          <div className="text-2xl sm:text-5xl font-semibold md:leading-[50px]">
            Experience the Freedom of{" "}
            <span className="text-brand-green">Effortless Laundry.</span>
          </div>

          <div className="font-bold md:font-normal mt-6 mb-12 text-black/60 text-sm sm:text-base">
            Tired of laundry day blues? We offers convenient, eco-friendly
            laundry services. Schedule a pickup today and enjoy fresh, clean
            clothes delivered to your door.
          </div>

          <Link href={"#contact-us"} className="w-fit">
            <button className="text-white font-bold text-sm py-4 w-[190px] bg-brand-green rounded-md">
              Contact Us
            </button>
          </Link>
        </div>

        <Image
          src={"/img/header.png"}
          alt="laundry"
          width={500}
          height={691}
          className="w-full object-cover hidden md:inline"
          data-aos="fade"
        />
      </div>
    </div>
  );
};

export default Header;
