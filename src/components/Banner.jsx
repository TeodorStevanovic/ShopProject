import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.pexels.com/photos/5624977/pexels-photo-5624977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 1 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 1 ? 0 : (prev) => prev + 1);
  };


  return (
    <div className="w-full h-auto overflow-x-hidden py-1 px-1">
      <div className="w-screen h-[840px] relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[200vw] h-full flex transition-transform duration-1000"
        >
          <img
            className="lg:h-auto lg:w-screen sm: h-full sm: w-screen object-cover"
            loading="priority"
            src={data[0]}
            alt="img1"
          />

          <img
            className="lg:w-screen lg:h-full sm: w-full sm: h-full object-cover"
            src={data[1]}
            alt="img2"
          />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-20">
          <div
            onClick={prevSlide}
            className="w-14 h-12 flex items-center
          justify-center rounded-full text-white hover:cursor-pointer hover:bg-gray-400 hover:text-black
          active:bg-white duration-300"
          >
            <FaArrowLeft />
          </div>

          <div
            onClick={nextSlide}
            className="w-14 h-12 flex items-center
          justify-center rounded-full text-white hover:cursor-pointer hover:bg-gray-400 hover:text-black
          active:bg-gray-900 duration-300"
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
