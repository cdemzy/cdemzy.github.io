import React, { useState } from 'react';
import doorDashLogo from '../../assets/images/general-logos/doordash.png';
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
            <div className={`pb-4 work-box grid grid-cols-6 ${hoveredIndex === null || hoveredIndex === 0 ? 'opacity-100' : 'opacity-50'}`} onMouseOver={() => handleMouseOver(0)} onMouseOut={handleMouseOut}>
                <div className='flex items-center'>
                    <a href='https://www.doordash.com/en-CA/' target="_blank" rel="noreferrer"><img src={doorDashLogo} alt='doordash logo' className='w-14 h-14 rounded-full transition-transform transform hover:scale-110'/></a>
                </div>
                <div className='col-span-3 flex flex-col justify-center'>
                    <div class='flex items-center'>
                        <p class='pr-1'>Independent Contractor</p>
                        {/* <div class='hover:text-L-2 flex items-center'><ion-icon name="information-circle-outline" style={{ fontSize: '15pt'}}></ion-icon></div> */}
                    </div>
                    
                    <div class='flex items-center'><p className='text-L-2 dark:text-secondary-d'>DoorDash</p></div>
                </div>
                <div className='col-span-2 pl-10 flex items-center justify-center'>
                    <p className='text-L-2 dark:text-secondary-d'>2021 - Present</p>
                </div>
            </div>

            <div className={`work-box grid grid-cols-6 ${hoveredIndex === null || hoveredIndex === 1 ? 'opacity-100' : 'opacity-50'}`} onMouseOver={() => handleMouseOver(1)} onMouseOut={handleMouseOut}>
                <div className='flex items-center'>
                    <a href='https://www.dal.ca/' target="_blank" rel="noreferrer"><img src={dalLogo} alt='dalhousie logo' className='w-14 h-14 rounded-full transition-transform transform hover:scale-110'/></a>
                </div>
                <div className='col-span-3 flex flex-col justify-center'>
                    <div class='flex items-center'>
                        <p class='pr-1'>Junior Developer</p>
                        {/* <div class='hover:text-L-2 flex items-center'><ion-icon name="information-circle-outline" style={{ fontSize: '15pt'}}></ion-icon></div> */}
                    </div>
                    
                    <div class='flex items-center'><p className='text-L-2 dark:text-secondary-d'>Dalhousie University</p></div>
                </div>
                <div className='col-span-2 pl-10 flex items-center justify-center'>
                    <p className='text-L-2 dark:text-secondary-d'>2024 - 2024</p>
                </div>
            </div>
        </div>
    );
}

export default WorkBoxes;

