import React from "react";
import { useForm } from "react-hook-form";
import styles, { layout } from "../style";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    window.location.href = `mailto:samuel.c.glantz@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}, ${formData.message}. Contact me at ${formData.email}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={`h-screen flex flex-col relative text-center md:text-left md:flex-row px-10 justify-evenly mx-auto items-center max-w-7xl`}
    >
      <h3 className={`absolute top-20 uppercase tracking-[20px] ${styles.textColor500} text-xl`}>Contact</h3>
      <div className="flex flex-col space-y-9 px-5 mt-28">
        <h4 className="text-2xl md:text-3xl font-semibold text-center">
          I have  what you need.{" "}
          <span className="decoration-[#f7ab0a]/50 underline">Let's talk!</span>
        </h4>

        <div className="space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[var(--main-color)] h-7 w-7 animate-pulse" />
            <p className="text-lg">+49 17681446353</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[var(--main-color)] h-7 w-7 animate-pulse" />
            <p className="text-lg">samuel.c.glantz@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[var(--main-color)] h-7 w-7 animate-pulse" />
            <p className="text-lg">12051 Berlin</p>
          </div>
        </div>

        <form
          className="flex flex-col space-y-2 mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contact-info"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contact-info"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contact-info"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contact-info"
            name=""
            id=""
            cols="30"
            rows="5"
          />
          <button
            type="submit"
            className="bg-[var(--main-color)] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
