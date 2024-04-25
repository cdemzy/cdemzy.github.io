import React, { useState } from 'react';
import i1 from '../../assets/images/gear/mbp-14.png';
import i2 from '../../assets/images/gear/ipad-air-4.png';
import i3 from '../../assets/images/gear/ip-13-pro.png';
import i4 from '../../assets/images/gear/airpods-pro.png';
import i5 from '../../assets/images/gear/airtag.png';
import i6 from '../../assets/images/gear/magsafe-case.png';

function AppleSection() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseOver = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseOut = () => {
        setHoveredIndex(null);
    };

    return (
        <section className='apple-section mt-10'>
            <p className='title text-L-2 dark:text-secondary-d'>Apple</p>
            <div className='mt-7 grid grid-rows-6 sm:grid-rows-3 grid-cols-1 sm:grid-cols-2'>
                {/* Apple 1 */}
                <div
                    className={`pb-7 sm:pr-5 grid grid-cols-4 ${hoveredIndex === null || hoveredIndex === 0 ? 'opacity-100' : 'opacity-50'}`}
                    onMouseOver={() => handleMouseOver(0)}
                    onMouseOut={handleMouseOut}
                >
                    <div className='flex items-center'><img className='w-20 flex-item-left rounded-xl transition-transform transform hover:scale-125' src={i1} alt='apple1' /></div>
                    <div className='col-span-2 pl-5 flex items-center'>
                        <p>MBP M1 Pro 14
                        <p className='text-L-2 dark:text-secondary-d'>Powerful.</p></p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <a href='https://amzn.to/3UgJmyn' target="_blank" rel="noreferrer">
                            <button className='bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm w-[50px] h-[25px] rounded-2xl'>Get</button>
                        </a>
                    </div>
                </div>

                {/* Apple 2 */}
                <div
                    className={`pb-7 grid grid-cols-4 ${hoveredIndex === null || hoveredIndex === 1 ? 'opacity-100' : 'opacity-50'}`}
                    onMouseOver={() => handleMouseOver(1)}
                    onMouseOut={handleMouseOut}
                >
                    <div className='flex justify-center items-center'><img className='w-20 rounded-xl transition-transform transform hover:scale-125' src={i2} alt='apple2' /></div>
                    <div className='col-span-2 pl-5 flex items-center'>
                        <p>iPad Air 4
                        <p className='text-L-2 dark:text-secondary-d'>Productivity.</p></p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <a href='https://amzn.to/49H9irw' target="_blank" rel="noreferrer">
                            <button className='bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm w-[50px] h-[25px] rounded-2xl'>Get</button>
                        </a>
                    </div>
                </div>

                {/* Apple 3 */}
                <div
                    className={`pb-7 sm:pr-5 grid grid-cols-4 ${hoveredIndex === null || hoveredIndex === 2 ? 'opacity-100' : 'opacity-50'}`}
                    onMouseOver={() => handleMouseOver(2)}
                    onMouseOut={handleMouseOut}
                >
                    <div className='flex items-center'><img className='w-20 rounded-xl transition-transform transform hover:scale-125' src={i3} alt='apple3' /></div>
                    <div className='col-span-2 pl-5 flex items-center'>
                        <p>iPhone 13 Pro
                        <p className='text-L-2 dark:text-secondary-d'>Power.</p></p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <a href='https://amzn.to/4cYBfhy' target="_blank" rel="noreferrer">
                            <button className='bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm w-[50px] h-[25px] rounded-2xl'>Get</button>
                        </a>
                    </div>
                </div>

                {/* Apple 4 */}
                <div
                    className={`pb-7 grid grid-cols-4 ${hoveredIndex === null || hoveredIndex === 3 ? 'opacity-100' : 'opacity-50'}`}
                    onMouseOver={() => handleMouseOver(3)}
                    onMouseOut={handleMouseOut}
                >
                    <div className='flex items-center'><img className='w-20 rounded-xl transition-transform transform hover:scale-125' src={i4} alt='apple4' /></div>
                    <div className='col-span-2 pl-5 flex items-center'>
                        <p>Airpods Pro
                        <p className='text-L-2 dark:text-secondary-d'>Clarity.</p></p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <a href='https://amzn.to/4cZqrQi' target="_blank" rel="noreferrer">
                            <button className='bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm w-[50px] h-[25px] rounded-2xl'>Get</button>
                        </a>
                    </div>
                </div>

                {/* Apple 5 */}
                <div
                    className={`pb-7 sm:pb-0 sm:pr-5 grid grid-cols-4 ${hoveredIndex === null || hoveredIndex === 4 ? 'opacity-100' : 'opacity-50'}`}
                    onMouseOver={() => handleMouseOver(4)}
                    onMouseOut={handleMouseOut}
                >
                    <div className='flex items-center'><img className='w-20 rounded-xl transition-transform transform hover:scale-125' src={i5} alt='apple5' /></div>
                    <div className='col-span-2 pl-5 flex items-center'>
                        <p>Airtag
                        <p className='text-L-2 dark:text-secondary-d'>Security.</p></p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <a href='https://amzn.to/3VZj0Cl' target="_blank" rel="noreferrer">
                            <button className='bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm w-[50px] h-[25px] rounded-2xl'>Get</button>
                        </a>
                    </div>
                </div>

                {/* Apple 6 */}
                <div
                    className={`grid grid-cols-4 ${hoveredIndex === null || hoveredIndex === 5 ? 'opacity-100' : 'opacity-50'}`}
                    onMouseOver={() => handleMouseOver(5)}
                    onMouseOut={handleMouseOut}
                >
                    <div className='flex items-center'><img className='w-20 rounded-xl transition-transform transform hover:scale-125' src={i6} alt='apple6' /></div>
                    <div className='col-span-2 pl-5 flex items-center'>
                        <p>Magsafe Case
                        <p className='text-L-2 dark:text-secondary-d'>Protector.</p></p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <a href='https://amzn.to/3W2y95V' target="_blank" rel="noreferrer">
                            <button className='bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm w-[50px] h-[25px] rounded-2xl'>Get</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AppleSection;
