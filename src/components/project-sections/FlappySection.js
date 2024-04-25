import React from 'react';
import { Link } from 'react-router-dom';
import MockupFlappy1 from '../../assets/images/projects/flappybird/Mockup-Flappy1.png'

function FlappySection() {

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

    return(
        <div class='flex flex-col md:flex-row subpixel-antialiased'>

            <Link class='glow-border-sm bg-w-2 dark:bg-g-5 border dark:border-g-1 box-shdw rounded-xl w-full md:w-[800px] mr-10' to='/projects/flappybird' onMouseMove={handleMouseMove}>
                <img class='w-full' src={ MockupFlappy1} alt='iPad and iPhone Mockup' />
            </Link>

            <div class='info pt-4 md:pt-0'>
                <div class='title flex flex-row'>
                    <p class='font-black tracking-wide'>Flappy Bird (Clone)&nbsp;</p><p class='text-L-2 dark:text-secondary-d font-thin'>·&nbsp;2024</p>
                </div>
                <p class='description text-third-d'>
                    An open source game project I started on January 2024 to learn unity for an upcoming course that I took on my second year in university, which involved...
                </p>
            </div>
            
        </div>
    )
};

export default FlappySection;