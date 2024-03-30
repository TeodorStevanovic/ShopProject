import React from "react";
import { logoImg, paymentLog } from "../assets/image";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-gray-50 py-20 sm: flex sm: justify-center">
      <div className="max-w-screen-xl mx-auto lg:grid lg:grid-cols-3 sm:grid-cols-1">
        {/*--------------Logo Section------------------*/}

        <div className="lg:flex lg:flex-col lg:justify-start lg:items-start sm: flex sm: flex-col sm: justify-center sm: items-center gap-7 mb-10">
          <img src={logoImg} alt="logoImg"/>

          <img className="w-40" src={paymentLog} alt="pay" />

          <div className="flex gap-5 text-lg text-gray-400">
            <FaFacebookF className="hover:text-blue-800 duration-300 cursor-pointer" />

            <FaInstagram className="hover:text-fuchsia-800 duration-300 cursor-pointer" />

            <FaTwitter className="hover:text-sky-500 duration-300 cursor-pointer" />

            <FaPinterestP className="hover:text-red-800 duration-300 cursor-pointer" />
          </div>

          <p className="text-white text-sm tracking-wide font-bodyFont">&copy;De-Cart</p>
        </div>

        {/*-----------------Location Section-------------------- */}
        <div>
          <h2
            className="text-2xl font-semibold text-white mb-4 
          lg:flex lg:flex-col lg:justify-start lg:items-start sm: flex sm: justify-center sm: items-center font-bodyFont"
          >
            Our Location
          </h2>

          <div
            className="text-base gap-3 mb-10 
          lg:flex lg:flex-col lg:justify-start lg:items-start sm: flex sm: flex-col sm: justify-center sm: items-center font-bodyFont"
          >
            <p>Adress: Kosovska 45 37000 Krusevac</p>
            <p>Mobile: 064/119-49-50</p>
            <p>Fax: 037/443-932</p>
            <p>E-mail: de-cart@gmail.com</p>
          </div>
        </div>
        {/*------------------------------------------------------*/}

        {/*-----------------Subcribe Section-------------------- */}
        <div className="flex flex-col justify-center ml-10 font-bodyFont">
          <input
            className=" w-80 bg-transparent border rounded-xl px-4 py-2 text-sm lg:flex sm: hidden"
            placeholder="e-mail"
            type="text"
          />
          <button
            className="text-sm border rounded-br-xl rounded-bl-xl text-white border-t-0 hover:bg-gray-900
          active:bg-white active:text-black lg:flex lg:justify-center lg:items-center sm: hidden"
          >
            Subcribe
          </button>
        </div>
        {/*------------------------------------------------------*/}
      </div>
    </div>
  );
};

export default Footer;
