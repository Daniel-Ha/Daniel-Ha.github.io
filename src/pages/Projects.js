//PROJECT PAGE

import React, { useEffect, useState } from "react";
import Copyright from "../components/Copyright";

export default function Projecs() {
  const [margin, setMargin] = useState(0);
  const MOBILE_SCREEN_WIDTH = 640;
  const DESKTOP_CARD_TO_CONTAINER_MARGIN = 32;

  //hook to set up handling of margin size around each card
  useEffect(() => {
    const updateMarginAroundCard = () => {
      const container = document.querySelector(".parent-container");
      const cards = document.querySelectorAll(".card");

      //margin around card is dynamic when window is of "mobile" width
      if (isMobileSize(window)) {
        const containerWidth = container.offsetWidth;
        const cardWidth = cards[0].offsetWidth;
        const newMargin = (containerWidth - cardWidth) / 2;
        setMargin(newMargin);
      }

      //margin around card is fixed when window is of "desktop" width
      else {
        setMargin(DESKTOP_CARD_TO_CONTAINER_MARGIN);
      }
    };

    window.addEventListener("resize", updateMarginAroundCard);
    updateMarginAroundCard();
    return () => window.removeEventListener("resize", updateMarginAroundCard);
  }, []);

  //function to check if the window is mobile sized
  const isMobileSize = (window) => {
    if (window.innerWidth <= MOBILE_SCREEN_WIDTH) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="flex flex-col mt-10 items-center">
      <h1 className="custom-underline flex py-5 mb-10 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800 dark:text-white">
        Projects
      </h1>
      {/*Card scroller container*/}
      <div className="shadow-md rounded-lg sm:w-parent-bigger bg-custom-gray w-11/12 flex overflow-x-auto pb-10 pt-10 parent-container">
        {/*Card 1*/}
        <div
          className="flex-shrink-0 w-11/12 sm:w-bigger h-96 overflow-hidden rounded-lg  bg-white hover:shadow-xl transition-shadow duration-500 ease-in-out card"
          style={{ marginLeft: margin, marginRight: margin }}
        >
          <div className="flex flex-col justify-center h-full px-10 py-8">
            <h1 className="mb-4">
              I enjoy the process of creating things using code and the learning
              that comes from it!
            </h1>
            <h1 className="mb-4">Here are some projects I have worked on:</h1>
            <h1>Scroll for more -></h1>
          </div>
        </div>

        {/*Card 2*/}
        <div
          className="mx-auto flex-shrink-0 w-11/12 sm:w-bigger h-96 overflow-hidden rounded-lg  bg-white hover:shadow-xl transition-shadow duration-500 ease-in-out card"
          style={{ marginLeft: margin, marginRight: margin }}
        >
          <div className="flex flex-col justify-center h-full px-10 py-8">
            <h1 className="mb-4 font-bold text-lg">This website:</h1>
            <p className="mb-3">
              This is my second iteration of a personal website created using{" "}
              <span className="font-bold">React.js</span>.
            </p>
            <p className="mb-3">
              In its first version, my website was largely styled using{" "}
              <span className="font-bold">Bootstrap</span>. This time, at the
              suggestion of a trusted peer, I decided to use{" "}
              <span className="font-bold">Tailwind.css</span> (I am forever
              converted).
            </p>
          </div>
        </div>

        {/*Card 3*/}
        <div
          className="mx-auto flex-shrink-0 w-11/12 sm:w-bigger h-96 overflow-hidden rounded-lg  bg-white hover:shadow-xl transition-shadow duration-500 ease-in-out card"
          style={{ marginLeft: margin, marginRight: margin }}
        >
          <div className="overflow-y-scroll flex flex-col h-full px-10 py-8">
            <h1 className="mb-4 font-bold text-lg">AcademIQ:</h1>
            <p className="mb-3">
              AcademIQ is a Chrome extension that aims to aid the research
              process by finding and recommending the most relevant scholarly
              papers from arXiv.org to the webpage currently being viewed.
            </p>
            <p className="mb-3">
              I worked in a team of four and was responsible for the{" "}
              <span className="font-bold">front end</span> of the project.
            </p>
            <p className="mb-3">
              It was an entry in HackDartmouth VIII and won 3rd place!
            </p>
            <a
              className="underline"
              target="_blank"
              href="https://devpost.com/software/academiq"
              rel="noopener noreferrer"
            >
              Check it out here!
            </a>
          </div>
        </div>

        {/*Card 4*/}
        <div
          className="mx-auto flex-shrink-0 w-11/12 sm:w-bigger h-96 overflow-hidden rounded-lg  bg-white hover:shadow-xl transition-shadow duration-500 ease-in-out card"
          style={{ marginLeft: margin, marginRight: margin }}
        >
          <div className="overflow-y-scroll flex flex-col h-full px-10 py-8">
            <h1 className="mb-4 font-bold text-lg">Doon:</h1>
            <p className="mb-3">
              Doon is a chatbot accessed through Telegram that allows its users
              to create sophisticated notifications which trigger based on
              Blockchain activity. It was built in{" "}
              <span className="font-bold">Python</span> and utilitzed a{" "}
              <span className="font-bold">MySQL</span> database.
            </p>
            <p className="mb-3">
              Doon was built in a team of 4 for a 6-week apprenticeship called
              BCamp. Since the apprenticeship was sponsored by{" "}
              <a
                className="font-bold"
                target="_blank"
                href="https://usemoon.ai/"
                rel="noopener noreferrer"
              >
                {" "}
                Moon Wallet
              </a>
              , we also worked with Moon's developing codebase to build a UI for
              Moon Wallet in the form of a DApp.
            </p>
            <p>
              <a
                className="underline"
                target="_blank"
                href="https://youtu.be/MDUJ4z0LjP4"
                rel="noopener noreferrer"
              >
                {" "}
                Check out a video demo here!
              </a>
            </p>
            <br/>
            <p>
            <a
              className="underline"
              target="_blank"
              href="https://github.com/0xBcamp/Kyle-janus-dragon"
              rel="noopener noreferrer"
            >
              {" "}
              Check out our codebase here!
            </a>
            </p>
          </div>
        </div>
        {/*ghost element to fix margin in mobile devices*/}
        <div style={{ marginLeft: 0, flexShrink: 0, width: 1 }}></div>
      </div>

      {/*Copyright information*/}
      <Copyright />
    </div>
  );
}
