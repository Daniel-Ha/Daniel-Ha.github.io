import React, { useEffect, useState } from 'react';

export default function Projecs(){
    const [margin, setMargin] = useState(0);

    const updateMargin = () => {
        // Adjust this value based on when you want to apply the margins (e.g., for mobile devices)
        const mobileScreenWidth = 640;

        const container = document.querySelector('.parent-container');
        const cards = document.querySelectorAll('.card');

        if (window.innerWidth <= mobileScreenWidth && container && cards.length > 0) {
            const containerWidth = container.offsetWidth;
            const cardWidth = cards[0].offsetWidth; // Assuming all cards have the same width
            const newMargin = (containerWidth - cardWidth) / 2;
            setMargin(newMargin);
        } else {
            setMargin(32); // Fixed margin of 32 pixels for larger screens
        }
    };

    useEffect(() => {
        window.addEventListener('resize', updateMargin);
        updateMargin();
        return () => window.removeEventListener('resize', updateMargin);
    }, []);
    return(
        
        <div className="flex flex-col mt-10 items-center">

            <h1
                 className="custom-underline flex py-5 mb-10 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800 dark:text-white"
             >
                 Projects
            </h1>
            {/*Scrolling thingy*/}
            <div
                 className="shadow-md rounded-lg sm:w-parent-bigger bg-custom-gray w-11/12 flex overflow-x-auto pb-10 pt-10 parent-container"
             >
                    {/*Cards*/}
                     <div
                     className="flex-shrink-0 w-11/12 sm:w-bigger h-96 overflow-hidden rounded-lg  bg-white hover:shadow-xl transition-shadow duration-500 ease-in-out card" style={{ marginLeft: margin, marginRight: margin }}
                     >
                        <div className="flex flex-col justify-center h-full px-10 py-8">
                             <h1 className="mb-4">
                                 I enjoy the process of creating things using code and the learning that comes from it! 
                             </h1>
                             <h1 className="mb-4">
                                 Here are some projects I have worked on:
                             </h1>
                             <h1>
                                 Scroll for more ->
                             </h1>
                         </div>
                     
                     </div>
                     <div
                     className="mx-auto flex-shrink-0 w-11/12 sm:w-bigger h-96 overflow-hidden rounded-lg  bg-white hover:shadow-xl transition-shadow duration-500 ease-in-out card" style={{ marginLeft: margin, marginRight: margin }}
                     >
                        <div className="flex flex-col justify-center h-full px-10 py-8">
                            <h1 className="mb-4 font-bold text-lg">
                                 This website:
                             </h1>
                             <p className="mb-3">
                                 This is my second iteration of a personal website created using <span className="font-bold">React.js</span>.
                             </p>
                             <p className="mb-3">
                                 In its first version, my website was largely styled using <span className="font-bold">Bootstrap</span>. This time, at the suggestion of a trusted peer, I decided to use <span className="font-bold">Tailwind.css</span> (I am forever converted).
                            </p>
                         </div>
                     </div>
                     <div
                     className="mx-auto flex-shrink-0 w-11/12 sm:w-bigger h-96 overflow-hidden rounded-lg  bg-white hover:shadow-xl transition-shadow duration-500 ease-in-out card" style={{ marginLeft: margin, marginRight: margin }}
                     >
                        <div className="overflow-y-scroll flex flex-col h-full px-10 py-8">
                            <h1 className="mb-4 font-bold text-lg">
                                 AcademIQ:
                             </h1>
                             <p className="mb-3">
                                 AcademIQ is a Chrome extension that aims to aid the research process by finding and recommending the most relevant scholarly papers from arXiv.org to the webpage currently being viewed.
                             </p>
                             <p className="mb-3">
                                 I worked in a team of four and was responsible for the <span className="font-bold">front end</span> of the project.
                             </p>
                             <p className="mb-3">
                                 It was an entry in HackDartmouth VIII and won 3rd place! 
                             </p>
                             <a className="underline" target="_blank" href="https://devpost.com/software/academiq" rel="noopener noreferrer">Check it out here!</a>
                         </div>
                     </div>
                     <div
                     className="mx-auto flex-shrink-0 w-11/12 sm:w-bigger h-96 overflow-hidden rounded-lg  bg-white hover:shadow-xl transition-shadow duration-500 ease-in-out card" style={{ marginLeft: margin, marginRight: margin }}
                     >
                        <div className="overflow-y-scroll flex flex-col h-full px-10 py-8">
                            <h1 className="mb-4 font-bold text-lg">
                                 Projects in progress:
                             </h1>
                             <h1 className="mb-3 underline">
                                 Streaming Service Stock Price Predictor:
                             </h1>
                             <p className="mb-3">
                                 To predict stock prices of major streaming services such as Netflix and Hulu, I plan on using machine learning. I will use sentiment data from news articles, stock data, and quantified hype behind movie and show releases to tune a model that can predict stock movements as accurately as possible.
                             </p>
                             <h1 className="mb-3 underline">
                                 Smart Contract Application
                             </h1>
                             <p className="mb-3">
                                 I am currently getting hands on experience with smart contract development and plan on publishing a smart contract application soon using <span className="font-bold">Scaffold.eth</span>.
                             </p>
                         </div>
                     </div>
                     {/*ghost element to fix margin in mobile devices*/}
                     <div style={{ marginLeft: 0, flexShrink: 0, width: 1 }}></div>
             </div>
             <footer className="mt-48 text-black dark:text-white text-xs flex justify-center">
                © 2023 Daniel Ha created using React.js and Tailwind.css
            </footer>
        </div>
    )
}
