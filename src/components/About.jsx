import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
          I am a Full Stack web developer, working in both, backend and frontend
          programming. My current Stack is
          <span className="text-cyan-400 mx-2">[_Django & React_]</span>.
          Excited for improving my skills and learning new technologies. I'm
          open to learn and work with any web technology and currently doing
          freelance gigs.
        </p>
      </div>
    </div>
  );
};

export default About;
