import React, { useState } from 'react';
import dalLogo from '../../assets/images/general-logos/dal-logo.png';

function WorkBoxes() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseOver = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseOut = () => {
        setHoveredIndex(null);
    };

    return (
        <div className='mt-6 grid grid-rows-1'>
            
            <div className={`work-box flex flex-row justify-between ${hoveredIndex === null || hoveredIndex === 1 ? 'opacity-100' : 'opacity-50'}`} onMouseOver={() => handleMouseOver(1)} onMouseOut={handleMouseOut}>
                <div className='flex items-center'>
                    <a href='https://www.dal.ca/' target="_blank" rel="noreferrer"><img src={dalLogo} alt='dalhousie logo' className='w-14 h-14 rounded-full transition-transform transform hover:scale-110'/></a>
                </div>
                <div className='col-span-3 flex flex-col justify-center sm:-ml-20 md:-ml-28'>
                    <div class='flex items-center'>
                        <p class='pr-1 text-sm sm:text-base'>Junior Developer</p>
                        {/* <div class='hover:text-L-2 flex items-center'><ion-icon name="information-circle-outline" style={{ fontSize: '15pt'}}></ion-icon></div> */}
                    </div>
                    
                    <div class='flex items-center'><p className='text-L-2 dark:text-secondary-d text-sm sm:text-base'>Dalhousie University</p></div>
                </div>
                <div className='col-span-2 pl-10 flex items-center justify-center'>
                    <p className='text-L-2 dark:text-secondary-d text-sm sm:text-base'>2024 - 2024</p>
                </div>
            </div>
        </div>
    );
}

export default WorkBoxes;

