import axios from "axios";
import { useState } from "react";
import Loader from "./Loader";

const Input = ({ label, placeholder, name, handleChange, type }) => {
  return (
    <div className="my-5">
      <label htmlFor="" className="text-xs mb-1">
        {label}
      </label>
      <input
        type={type ?? "text"}
        className="border border-[#BCBCBC] text-[#10182061] px-4 py-3 w-full"
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
        required
      />
    </div>
  );
};

const ContactUs = () => {
  const [payload, setPayload] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayload({ ...payload, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("https://mooh-server.onrender.com/contact", payload)
      .then((data) => {
        setLoading(false);
        setErrors("");
      })
      .catch((err) => {
        setLoading(false);
        setErrors("Pleasse try again");
      });
  };

  return (
    <div className="py-16 bg-[#F9F9F9] mt-28" id="contact-us">
      <div className="font-bold text-2xl sm:text-3xl text-center">
        Contact Us
      </div>
      <div className="text-center font-normal text-black/60 text-sm sm:text-base">
        Someone will reach out to you soon
      </div>

      <form
        action=""
        className="mx-auto w-5/6 max-w-[427px]"
        onSubmit={handleSubmit}
      >
        <Input
          label={"First Name *"}
          placeholder={"eg. John"}
          name={"name"}
          handleChange={handleChange}
        />
        <Input
          label={"Email *"}
          placeholder={"eg. john@info.com"}
          name={"email"}
          handleChange={handleChange}
          type={"email"}
        />

        <div>
          <div className="text-xs mb-1">Some kind of explanation</div>
          <textarea
            placeholder="Some kind of explanation"
            className="input resize-none h-[123px] w-full"
            name="message"
            onChange={handleChange}
          ></textarea>
        </div>

        <button className="text-white font-bold text-sm py-4 bg-brand-green rounded-md w-full mt-20 flex justify-center">
          {loading ? <Loader /> : "Explore"}
        </button>

        <p className="text-red-500 text-sm text-center mt-2">{errors}</p>
      </form>
    </div>
  );
};

export default ContactUs;
