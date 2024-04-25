import React from 'react';
import { Link } from "react-router-dom";
import youtube from '../assets/images/home-boxes/youtube.png';
import linkedin from '../assets/images/home-boxes/linkedin.png';
import notion from '../assets/images/home-boxes/notion.png';
import github from '../assets/images/home-boxes/github-main.png';
import notionPic1 from '../assets/images/home-boxes/notion-t1.jpg';
import notionPic2 from '../assets/images/home-boxes/notion-t2.jpg';
import notionPic3 from '../assets/images/home-boxes/notion-t3.jpg';
import notionPic4 from '../assets/images/home-boxes/notion-t4.jpg';
import g1 from '../assets/images/home-boxes/g1.jpg';
import g2 from '../assets/images/home-boxes/g2.jpg';

function Showcase() {
    // Handle mouse move event to track mouse position
    const handleMouseMove = (e) => {
        const { currentTarget: target } = e;
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Update CSS variables to track mouse position
        target.style.setProperty("--mouse-x", `${x}px`);
        target.style.setProperty("--mouse-y", `${y}px`);
    };

    return (
        <section className='main-sc-box pt-16 gap-5 md:grid md:grid-rows-2 md:grid-cols-3'>


                {/* Notion Box */}
                {/* <Link to="/notion" className='notion-box col-span-2 w-full glow-border border-solid border-gray-300 dark:bg-g-2 border dark:border-g-1 rounded-2xl flex flex-row gap-6 p-5 shadow-md' onMouseMove={handleMouseMove}>
                    <div className='w-[120px]'>
                        <img className='w-10 rounded-lg' src={notion} alt='notion logo' />
                        <div className='text-L-2 pt-1'>Notion</div>
                        <div>My Notion Templates!</div>
                    </div>

                    <div className="grid grid-rows-2 sm:grid-cols-2 gap-4">
                        <img className='rounded-lg sm:w-full hidden sm:block'  src={notionPic1} alt='notion 1'></img>
                        <img className='rounded-lg sm:w-full' src={notionPic2} alt='notion 2'></img>
                        <img className='rounded-lg sm:w-full' src={notionPic3} alt='notion 3'></img>
                        <img className='rounded-lg sm:w-full hidden sm:block' src={notionPic4} alt='notion 4'></img>
                    </div>
                </Link> */}

                {/* Linkedin Box */}
                <div className='linkedin-box glow-border border-solid border-gray-300 dark:bg-g-2 border dark:border-g-1 rounded-2xl p-5 shadow-md w-full' onMouseMove={handleMouseMove}>
                    <img className='w-10 rounded-lg' src={linkedin} alt='linkedin logo' />
                    <p className='text-L-2 pt-1'>@cdemzyy</p>
                    <div className='px-4 py-1 mt-20 rounded-3xl bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm flex items-center justify-center gap-1 w-[130px]'>
                        <a href='https://www.linkedin.com/in/cdemzyy/' target="_blank" rel="noreferrer"><span className='text-L-1 dark:text-secondary-d font-medium'>Connect </span><span className='text-L-2'>500+</span></a>
                    </div>
                </div>

                {/* Youtube Box */}
                <div className='youtube-box glow-border border-solid border-gray-300 dark:bg-g-2 border dark:border-g-1 rounded-2xl p-5 shadow-md w-full' onMouseMove={handleMouseMove}>
                    <div className='flex flex-col justify-between h-full'>
                        <img className='w-10 rounded-lg' src={youtube} alt='youtube logo' />
                        <p className='text-L-2 pt-1'>@cdemzyy</p>
                        <div className='px-4 py-1 mt-20 w-[135px] rounded-3xl bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm flex items-center justify-center gap-1'>
                            <a href='https://www.youtube.com/@cdemzyy' target="_blank" rel="noreferrer">
                                <span className='text-L-1 dark:text-secondary-d font-medium'>Subscribe </span>
                                <span className='text-L-2'>30+</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* GitHub Box */}
                <div className='github-box col-span-2 glow-border border-solid border-gray-300 dark:bg-g-2 border dark:border-g-1 rounded-2xl flex flex-row items-center gap-3 p-5 shadow-md w-full' onMouseMove={handleMouseMove}>
                    <div className='flex flex-col justify-between h-full'>
                        <img className='w-10 rounded-lg' src={github} alt='github logo' />
                        <div><p className='text-L-2 pt-1'>@cdemzy</p></div>
                        <div className='px-4 py-1 mt-20 rounded-3xl bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm flex items-center justify-center gap-1 w-[75px]'>
                            <a href='https://github.com/cdemzy' target="_blank" rel="noreferrer"><span className='text-L-1 dark:text-secondary-d font-medium'>Follow</span></a>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 gap-2 pl-4'>
                        <img className='w-[300px] rounded-md' src={g1} alt='repository' />
                        <img className='w-[300px] rounded-md' src={g2} alt='repository2' />
                    </div>
                </div>
        </section>
    );
}

export default Showcase;