import React, { useEffect } from "react";
import Footer from "../Footer/Footer";

// Aos
import Aos from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {

    useEffect(() => {
      Aos.init({
        duration: 1500,
      });
    }, []);
  return (
    <div className="aboutContent">
      <div class="sm:flex items-center max-w-screen-xl">
        <div data-aos="fade-right" class="sm:w-1/2 p-10">
          <div class="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png" />
          </div>
        </div>

        <div data-aos="fade-left" class="sm:w-1/2 p-5">
          <div class="text">
            <span class="text-gray-500 border-b-2 border-indigo-600 uppercase">
              About us
            </span>
            <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">
              About <span class="text-indigo-600">Our Company</span>
            </h2>
            <p class="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              commodi doloremque, fugiat illum magni minus nisi nulla numquam
              obcaecati placeat quia, repellat tempore voluptatum.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
