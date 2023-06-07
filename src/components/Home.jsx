import React from "react";
// import HeroImage from "../assets/heroImage.png";
import me from "../assets/img.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 home"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="w-[50%] small-screen hidden mt-10 md:mt-0">
          <img
            src={me}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
        <div className="w-[50%] flex flex-col justify-center h-full  leading-10	 font-bold text-white">
          <div className="mt-5 md:mt-0 text-2xl md:text-5xl">
            <p>Hi,</p>
            <p>
              <TypeAnimation
                sequence={[
                  // Same String at the start will only be typed once, initially
                  "I am Shahadat",
                  4000,
                  "I am Hossain",
                  4000,
                ]}
                speed={20}
                repeat={Infinity}
              />
            </p>
          </div>
          <div className="text-xl mt-2 mb-5">
            <p className="text-md font-bold text-cyan-600">
              <TypeAnimation
                sequence={[
                  // Same String at the start will only be typed once, initially
                  "A Full Stack Web Developer",
                  2000,
                  "A Frontend React Developer",
                  2000,
                  "A Backend Django Developer",
                  2000,
                ]}
                speed={40}
                repeat={Infinity}
              />
            </p>
          </div>
          <p className="text-gray-500 py-4 max-w-md">
            I have 2 years of experience building websites and desgining
            software. I love to work on web application using technologies like
            React, Tailwind, Next JS and Django REST API.
          </p>

          <div className="portfolio-btn">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="big-screen flex justify-end w-[30%]">
          <img src={me} alt="profile" className="rounded-full " />
        </div>
      </div>
    </div>
  );
};

export default Home;
