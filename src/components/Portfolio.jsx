import React from "react";
import tenzis from "../assets/portfolio/Tenzies-Game.png";
import interactive from "../assets/portfolio/interactive.png";
import invoice from "../assets/portfolio/invoice.png";
import quiz from "../assets/portfolio/quiz.png";
import calculator from "../assets/portfolio/calculator.png";
import timer from "../assets/portfolio/timer.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: tenzis,
      link: "https://shahadat-react-tenzies-game.netlify.app",
      repo: "https://github.com/ShahadatShuvo/Tenzies-Game-react",
    },
    {
      id: 2,
      src: interactive,
      link: "https://angry-sammet-8f4e5b.netlify.app/",
      repo: "https://github.com/ShahadatShuvo/Interactive-cares-home-design",
    },
    {
      id: 3,
      src: invoice,
      link: "https://invoice-app-shahadat.netlify.app/",
      repo: "https://github.com/ShahadatShuvo/Invoice-React",
    },
    {
      id: 4,
      src: quiz,
      link: "https://quizzical-shahadat-shuvo.netlify.app/",
      repo: "https://github.com/ShahadatShuvo/Quizzical",
    },
    {
      id: 5,
      src: calculator,
      link: "https://shahadatshuvo.github.io/Js-Calculator/",
      repo: "https://github.com/ShahadatShuvo/Js-Calculator",
    },
    {
      id: 6,
      src: timer,
      link: "https://elastic-jackson-f21ae3.netlify.app/",
      repo: "https://github.com/ShahadatShuvo/Digital-Clock",
    },
  ];

  return (
    <div
      name="portfolio"
      className="mb-24 bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(link, "_blank")}
                >
                  Demo
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(repo, "_blank")}
                >
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
