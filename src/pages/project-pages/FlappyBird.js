import React, {useEffect, useState} from 'react';
import Header from '../../components/Header'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom';
import MockupFlappy1 from '../../assets/images/projects/flappybird/Mockup-Flappy1.png'

function FlappyBird() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseOver = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseOut = () => {
        setHoveredIndex(null);
    };

    return(
        <div class="App w-[375px] sm:w-[630px] md:w-[700px] mx-auto h-screen dark:bg-black text-L-1 dark:text-primary-d">
            <Helmet>
                <title>Flappy Bird Project</title>
            </Helmet>

            <header class='fixed pt-4 pb-2 top-0 left-0 w-full bg-white dark:bg-black flex justify-center items-center z-10'>
                <Header/>
            </header>

            <main class="animate-in pt-36 w-[375px] sm:w-[630px] md:w-[700px] mx-auto px-6 sm:px-0 pb-20">
                <p class="animate-in text-L-2 dark:text-secondary-d">2024 · <a class='hover:underline' href='https://github.com/cdemzy/Flappy-Bird' target='_blank' rel="noreferrer">Visit Project</a> </p>
                <h1 className='animate-in text-h1-L dark:text-primary-d font-semibold'>Flappy Bird</h1>

                <p class='description text-third-d dark:text-secondary-d pt-4 pb-10'>
                    An open source game project I started on January 2024 to learn unity for an upcoming course that I took on my second year in university, which involved game development.
                </p>

                <section class=''>
                    <div class='flex items-center flex-col'>
                        <img class='bg-w-2 dark:bg-g-5 border dark:border-g-1 box-shdw rounded-xl w-full' src={MockupFlappy1} alt='iPad and iPhone Mockup of the game' />
                        <p class='mt-2 text-L-2 dark:text-secondary-d'>iPhone main menu & iPad gameplay view mockup.</p>
                    </div>
                </section>

                <section class='mt-10'>
                    <p class=''>Tags</p>
                    <div className="flex flex-wrap gap-2 pt-3 transition-opacity">
                        <p className={`bg-g-6 text-L-2 dark:bg-g-3 dark:text-g-7 py-2 px-4 rounded-lg text-sm ${hoveredIndex === null || hoveredIndex === 0 ? 'opacity-100' : 'opacity-50'}`} onMouseOver={() => handleMouseOver(0)} onMouseOut={handleMouseOut}>Game Development</p>
                        <p className={`bg-g-6 text-L-2 dark:bg-g-3 dark:text-g-7 py-2 px-4 rounded-lg text-sm ${hoveredIndex === null || hoveredIndex === 1 ? 'opacity-100' : 'opacity-50'}`} onMouseOver={() => handleMouseOver(1)} onMouseOut={handleMouseOut}>Open Source</p>
                        <p className={`bg-g-6 text-L-2 dark:bg-g-3 dark:text-g-7 py-2 px-4 rounded-lg text-sm ${hoveredIndex === null || hoveredIndex === 2 ? 'opacity-100' : 'opacity-50'}`} onMouseOver={() => handleMouseOver(2)} onMouseOut={handleMouseOut}>Unity</p>
                        <p className={`bg-g-6 text-L-2 dark:bg-g-3 dark:text-g-7 py-2 px-4 rounded-lg text-sm ${hoveredIndex === null || hoveredIndex === 3 ? 'opacity-100' : 'opacity-50'}`} onMouseOver={() => handleMouseOver(3)} onMouseOut={handleMouseOut}>C#</p>
                    </div>
                </section>

                <Link class='mt-10 hover flex items-center hover:border-b border-gray-500 w-max' to='/projects'><ion-icon name="arrow-back-outline"></ion-icon>&nbsp;Back to Projects</Link>
            </main>
        </div>
    )
};

export default FlappyBird;