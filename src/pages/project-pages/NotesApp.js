import React, {useEffect, useState} from 'react';
import Navbar from '../../components/navbar/Navbar'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom';
import ip1 from '../../assets/images/projects/notes/iP-M1.png'
import ip2 from '../../assets/images/projects/notes/iP-M2.png'
import ip3 from '../../assets/images/projects/notes/iP-M3.png'
import ipa1 from '../../assets/images/projects/notes/iPa-M1.png'
import mb1 from '../../assets/images/projects/notes/MB-M1.png'
import mb2 from '../../assets/images/projects/notes/MB-M2.png'
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
                <title>Notes</title>
            </Helmet>

            <header class='pt-4 pb-2 top-0 left-0 w-full bg-white dark:bg-black flex justify-center items-center z-10'>
                <Navbar/>
            </header>

            <main class="animate-in pt-24 w-[375px] sm:w-[630px] md:w-[700px] mx-auto px-6 sm:px-0 pb-20">
                <p class="animate-in text-L-2 dark:text-secondary-d">2024 · <a class='hover:underline' href='https://github.com/cdemzy/notes-app' target='_blank' rel="noreferrer">Visit Repository</a> </p>
                <h1 className='animate-in text-h1-L dark:text-primary-d font-semibold'>Notes</h1>

                <p class='description text-third-d dark:text-secondary-d pt-4 pb-10'>
                  An open source project that I started on April 2024 to learn the aspects of full-stack development...
                </p>

                <section className='mockups flex flex-col items-center justify-center'>
                  <section class='mockup md:w-full lg:w-[850px]'>
                      <div class='flex items-center justify-center flex-col'>
                          <img class='bg-w-2 dark:bg-g-5 border dark:border-g-1 box-shdw rounded-xl w-full md:w-[1000px]' src={ mb1} alt='Macbook homescreen view' />
                          <p class='mt-2 text-L-2 dark:text-secondary-d text-sm '>Macbook homescreen view.</p>
                      </div>
                  </section>

                  <section class='mockups-mobile mt-5 md:w-full lg:w-[850px]'>
                      <div class='flex items-center flex-col'>
                          <div className='mobile-views flex md:items-center md:justify-center bg-w-2 dark:bg-g-5 border dark:border-g-1 box-shdw rounded-xl p-5 gap-5 overflow-auto'>
                            <img className='h-[380px] md:h-[510px]' src={ ip1 } alt='iPhone view of notes' />
                            <img className='h-[380px] md:h-[510px]' src={ ip2 } alt='iPhone view of notes' />
                            <img className='h-[380px] md:h-[510px]' src={ ip3 } alt='iPhone view of notes' />
                          </div>
                          
                          <p class='mt-2 text-L-2 dark:text-secondary-d text-sm '>Mobile views.</p>
                      </div>
                  </section>

                  <section class='mockup mt-5 md:w-full lg:w-[850px]'>
                      <div class='flex items-center flex-col'>
                          <img class='bg-w-2 dark:bg-g-5 border dark:border-g-1 box-shdw rounded-xl w-full md:w-[1500px]' src={ ipa1 } alt='Macbook dashboard view' />
                          <p class='mt-2 text-L-2 dark:text-secondary-d text-sm'>iPad dashboard view.</p>
                      </div>
                  </section>

                  <section class='mockup mt-5 md:w-full lg:w-[850px]'>
                      <div class='flex items-center flex-col'>
                          <img class='bg-w-2 dark:bg-g-5 border dark:border-g-1 box-shdw rounded-xl w-full md:w-[1500px]' src={ mb2 } alt='Macbook dashboard view' />
                          <p class='mt-2 text-L-2 dark:text-secondary-d text-sm'>Macbook dashboard view.</p>
                      </div>
                  </section>
                </section>

                <section class='mt-10'>
                    <p class=''>Tags</p>
                    <ul className="flex flex-wrap gap-2 pt-3 transition-opacity h-full">
                        <li className={`project-tags ${hoveredIndex === null || hoveredIndex === 0 ? 'opacity-100' : 'opacity-50'}`} onMouseOver={() => handleMouseOver(0)} onMouseOut={handleMouseOut}>Full-Stack Development</li>
                        <li className={`project-tags ${hoveredIndex === null || hoveredIndex === 1 ? 'opacity-100' : 'opacity-50'}`} onMouseOver={() => handleMouseOver(1)} onMouseOut={handleMouseOut}>Open Source</li>
                        <li className={`project-tags ${hoveredIndex === null || hoveredIndex === 2 ? 'opacity-100' : 'opacity-50'}`} onMouseOver={() => handleMouseOver(2)} onMouseOut={handleMouseOut}>MERN</li>
                        <li className={`project-tags ${hoveredIndex === null || hoveredIndex === 3 ? 'opacity-100' : 'opacity-50'}`} onMouseOver={() => handleMouseOver(3)} onMouseOut={handleMouseOut}>MongoDB</li>
                        <li className={`project-tags ${hoveredIndex === null || hoveredIndex === 4 ? 'opacity-100' : 'opacity-50'}`} onMouseOver={() => handleMouseOver(4)} onMouseOut={handleMouseOut}>ExpressJS</li>
                        <li className={`project-tags ${hoveredIndex === null || hoveredIndex === 5 ? 'opacity-100' : 'opacity-50'}`} onMouseOver={() => handleMouseOver(5)} onMouseOut={handleMouseOut}>React</li>
                        <li className={`project-tags ${hoveredIndex === null || hoveredIndex === 6 ? 'opacity-100' : 'opacity-50'}`} onMouseOver={() => handleMouseOver(6)} onMouseOut={handleMouseOut}>Node.js</li>
                        <li className={`project-tags ${hoveredIndex === null || hoveredIndex === 7 ? 'opacity-100' : 'opacity-50'}`} onMouseOver={() => handleMouseOver(7)} onMouseOut={handleMouseOut}>Tailwind CSS</li>
                        <li className={`project-tags ${hoveredIndex === null || hoveredIndex === 8 ? 'opacity-100' : 'opacity-50'}`} onMouseOver={() => handleMouseOver(8)} onMouseOut={handleMouseOut}>RESTful APIs</li>
                        <li className={`project-tags ${hoveredIndex === null || hoveredIndex === 9 ? 'opacity-100' : 'opacity-50'}`} onMouseOver={() => handleMouseOver(9)} onMouseOut={handleMouseOut}>Responsive Design</li>
                    </ul>
                </section>

                <Link class='mt-10 hover flex items-center hover:border-b border-gray-500 w-max' to='/projects'><ion-icon name="arrow-back-outline"></ion-icon>&nbsp;Back to Projects</Link>
            </main>
        </div>
    )
};

export default FlappyBird;