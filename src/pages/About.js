import React, { useState, useEffect } from 'react';
import ConnectBoxes from '../components/about-sections/ConnectBoxes';
import Techstack from '../components/about-sections/Techstack';
import Photostack from '../components/about-sections/Photostack';
import WorkBoxes from '../components/about-sections/WorkBoxes';

function About() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [hoveredTech, setHoveredTech] = useState('');
    const [displayedTech, setDisplayedTech] = useState('');

    useEffect(() => {
        let currentIndex = 0;
        let intervalId;

        if (hoveredTech !== '') {
            intervalId = setInterval(() => {
                setDisplayedTech((prev) => {
                    const nextChar = hoveredTech[currentIndex];
                    currentIndex++;

                    // If there are more characters to display
                    if (nextChar !== undefined) {
                        return prev + nextChar;
                    } else {
                        clearInterval(intervalId);
                        return prev;
                    }
                });
            }, 100); // Adjust the speed here (milliseconds per letter)
        } else {
            // Reset displayedTech when hoveredTech is empty
            setDisplayedTech('');
        }

        return () => clearInterval(intervalId);
    }, [hoveredTech]);

    const handleTechHover = (tech) => {
        setHoveredTech(tech);
    };
    

    return (
        <div class="App h-screen text-L-1 dark:text-primary-d transition">

            <div class="animate-in pt-10 pb-10 md:w-[700px]">

                <section class='photos mb-0 sm:mb-20 flex items-center justify-center'>
                    <Photostack/>
                </section>
                
                <section class='connect mt-10 flex flex-col sm:flex-row'>
                    <p class='w-full sm:w-[20%] md:w-[30%] text-L-2 dark:text-secondary-d'>Connect</p>
                    <ConnectBoxes/>
                </section>

                <section className="stack mt-10 flex flex-col sm:flex-row">
                    <div className="w-full sm:w-[20%] md:w-[30%]">
                        <p className="text-L-2 dark:text-secondary-d">Tech Stack</p>
                        {displayedTech && (
                            <p className="tech hidden mt-5 py-1 px-2 sm:inline-block bg-white mode-btn rounded-lg dark:text-white dark:bg-[#2a2a2a] text-sm">{displayedTech}</p>
                        )}
                    </div>
                    <Techstack onHover={handleTechHover} />
                </section>

                <section class='work mt-10 flex flex-col sm:flex-row'>
                    <p class='w-full sm:w-[20%] md:w-[30%] text-L-2 dark:text-secondary-d'>Work</p>

                    <div class='pt-2 sm:pt-0 w-full sm:w-[80%] md:w-[70%]'>
                        <p>
                            I have experience on collaborating with development teams and I'm currently seeking internships to further develop my skills and contribute to meaningful projects.
                        </p>

                        <WorkBoxes/>
                        
                    </div>

                </section>
            </div>
        </div>
    )
}

export default About;
