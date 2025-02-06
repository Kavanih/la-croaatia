import Image from "next/image";
// src={"/img/service.png"}

const SingleService = ({ title, text, img }) => {
  // src={"/img/wash.jpg"}
  return (
    <div>
      <Image
        src={img}
        alt=""
        width={378}
        height={399}
        className="w-full object-cover h-[380px]"
      />

      <div className="p-4 pb-8 sm:pb-28">
        <div className="text-xl sm:text-2xl">{title}</div>
        <div className="text-sm font-normal mt-4 text-black/60">{text}</div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="mt-20" id="services">
      <div className="section-title">Our services</div>

      <div className="services-grid" data-aos="fade">
        <SingleService
          title={"Laundry Done Right"}
          text={
            "Tired of laundry day blues? Let us handle the dirty work! Schedule a pickup today and enjoy fresh, clean clothes delivered to your door."
          }
          img={"/img/wash1.jpeg"}
        />
        <SingleService
          title={"Clean Conscience, Clean Clothes"}
          text={
            "Life's too short for laundry. Let us transform your laundry day from a chore into a carefree experience. We'll take care of every detail, from delicate fabrics to stubborn stains."
          }
          img={"/img/wash2.jpeg"}
        />
        <SingleService
          title={"Expert Care for Your Garments"}
          text={
            "Ready to reclaim your weekends? Schedule your first pickup online in minutes and enjoy the freedom of laundry-free living."
          }
          img={"/img/wash3.jpeg"}
        />
        <SingleService
          title={"Indulge in Effortless Laundry"}
          text={
            "Your clothes deserve better than the laundry room. Let us handle the washing, drying, and folding so you can focus on what matters."
          }
          img={"/img/wash4.jpeg"}
        />
        <SingleService
          title={"Reclaim Your Weekends"}
          text={
            "Reclaim Your Weekends:  Spend Less Time Sorting, Washing, and Folding. Laundry Doesn't Have to Steal Your Saturday (or Sunday!)"
          }
          img={"/img/wash5.jpeg"}
        />
        <SingleService
          title={"Eco-Friendly Laundry"}
          text={
            "Eco-Friendly Laundry That Cares for Your Clothes & the Planet. Make the Switch Today"
          }
          img={"/img/wash6.jpeg"}
        />
      </div>
    </div>
  );
};

export default Services;
