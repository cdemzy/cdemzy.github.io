import React, { useState } from 'react';
/* Setup */
import i7 from '../../assets/images/gear/q1-pro.png'
import i8 from '../../assets/images/gear/xm5.png'
import i9 from '../../assets/images/gear/mx-master.png'
import i10 from '../../assets/images/gear/g-pro.png'
import i11 from '../../assets/images/gear/main-monitor.png'
import i12 from '../../assets/images/gear/sec-monitor.png'
import i13 from '../../assets/images/gear/at2020.png'
import i14 from '../../assets/images/gear/hue-lights.png'

function SetupSection() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseOver = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseOut = () => {
        setHoveredIndex(null);
    };

    return (
        <section className='setup-section mt-10'>
            <p className='title text-L-2 dark:text-secondary-d'>Setup</p>
            <div className='mt-7 grid grid-rows-8 sm:grid-rows-4 grid-cols-1 sm:grid-cols-2'>
                {/* Setup 1 */}
                <div
                    className={`pb-7 sm:pr-5 grid grid-cols-4 ${hoveredIndex === null || hoveredIndex === 0 ? '' : 'opacity-50'}`}
                    onMouseOver={() => handleMouseOver(0)}
                    onMouseOut={handleMouseOut}
                >
                    <div className='flex items-center'><img className={`w-20 rounded-xl transition-transform transform hover:scale-125 ${hoveredIndex === 0 ? 'flex-item-left' : ''}`} src={i7} alt='setup1' /></div>
                    <div className='col-span-2 pl-5 flex items-center'>
                        <p>Q1 Pro
                        <p className='text-L-2 dark:text-secondary-d'>Customizable.</p></p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <a href='https://amzn.to/3VZmBAr' target="_blank" rel="noreferrer">
                            <button className='bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm w-[50px] h-[25px] rounded-2xl'>Get</button>
                        </a>
                    </div>
                </div>

                {/* Setup 2 */}
                <div
                    className={`pb-7 grid grid-cols-4 ${hoveredIndex === null || hoveredIndex === 1 ? '' : 'opacity-50'}`}
                    onMouseOver={() => handleMouseOver(1)}
                    onMouseOut={handleMouseOut}
                >
                    <div className='flex items-center'><img className='w-20 rounded-xl transition-transform transform hover:scale-125' src={i8} alt='setup2' /></div>
                    <div className='col-span-2 pl-5 flex items-center'>
                        <p>Sony XM5
                        <p className='text-L-2 dark:text-secondary-d'>Hi-Fi.</p></p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <a href='https://amzn.to/3xLGjp2' target="_blank" rel="noreferrer">
                            <button className='bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm w-[50px] h-[25px] rounded-2xl'>Get</button>
                        </a>
                    </div>
                </div>

                {/* Setup 3 */}
                <div
                    className={`pb-7 sm:pr-5 grid grid-cols-4 ${hoveredIndex === null || hoveredIndex === 2 ? '' : 'opacity-50'}`}
                    onMouseOver={() => handleMouseOver(2)}
                    onMouseOut={handleMouseOut}
                >
                    <div className='flex items-center'><img className='w-20 rounded-xl transition-transform transform hover:scale-125' src={i9} alt='setup3' /></div>
                    <div className='col-span-2 pl-5 flex items-center'>
                        <p>MX Master 3s
                        <p className='text-L-2 dark:text-secondary-d'>Ergonomic.</p></p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <a href='https://amzn.to/3vVo9kn' target="_blank" rel="noreferrer">
                            <button className='bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm w-[50px] h-[25px] rounded-2xl'>Get</button>
                        </a>
                    </div>
                </div>

                {/* Setup 4 */}
                <div
                    className={`pb-7 grid grid-cols-4 ${hoveredIndex === null || hoveredIndex === 3 ? '' : 'opacity-50'}`}
                    onMouseOver={() => handleMouseOver(3)}
                    onMouseOut={handleMouseOut}
                >
                    <div className='flex items-center'><img className='w-20 rounded-xl transition-transform transform hover:scale-125' src={i10} alt='setup4' /></div>
                    <div className='col-span-2 pl-5 flex items-center'>
                        <p>Logitech G Pro
                        <p className='text-L-2 dark:text-secondary-d'>Precision.</p></p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <a href='https://amzn.to/3xxXXMZ' target="_blank" rel="noreferrer">
                            <button className='bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm w-[50px] h-[25px] rounded-2xl'>Get</button>
                        </a>
                    </div>
                </div>

                {/* Setup 5 */}
                <div
                    className={`pb-7 sm:pr-5 grid grid-cols-4 ${hoveredIndex === null || hoveredIndex === 4 ? '' : 'opacity-50'}`}
                    onMouseOver={() => handleMouseOver(4)}
                    onMouseOut={handleMouseOut}
                >
                    <div className='flex items-center'><img className='w-20 rounded-xl transition-transform transform hover:scale-125' src={i11} alt='setup5' /></div>
                    <div className='col-span-2 pl-5 flex items-center'>
                        <p>S2721DGF
                        <p className='text-L-2 dark:text-secondary-d'>Dell Monitor.</p></p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <a href='https://amzn.to/3Q4t2ON' target="_blank" rel="noreferrer">
                            <button className='bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm w-[50px] h-[25px] rounded-2xl'>Get</button>
                        </a>
                    </div>
                </div>

                {/* Setup 6 */}
                <div
                    className={`pb-7 grid grid-cols-4 ${hoveredIndex === null || hoveredIndex === 5 ? '' : 'opacity-50'}`}
                    onMouseOver={() => handleMouseOver(5)}
                    onMouseOut={handleMouseOut}
                >
                    <div className='flex items-center'><img className='w-20 rounded-xl transition-transform transform hover:scale-125' src={i12} alt='setup6' /></div>
                    <div className='col-span-2 pl-5 flex items-center'>
                        <p>S2419HGF
                        <p className='text-L-2 dark:text-secondary-d'>Dell Monitor.</p></p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <a href='https://amzn.to/3UhMHgH' target="_blank" rel="noreferrer">
                            <button className='bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm w-[50px] h-[25px] rounded-2xl'>Get</button>
                        </a>
                    </div>
                </div>

                {/* Setup 7 */}
                <div
                    className={`pb-7 sm:pb-0 sm:pr-5 grid grid-cols-4 ${hoveredIndex === null || hoveredIndex === 6 ? '' : 'opacity-50'}`}
                    onMouseOver={() => handleMouseOver(6)}
                    onMouseOut={handleMouseOut}
                >
                    <div className='flex items-center'><img className='w-20 rounded-xl transition-transform transform hover:scale-125' src={i13} alt='setup7' /></div>
                    <div className='col-span-2 pl-5 flex items-center'>
                        <p>AT2020
                        <p className='text-L-2 dark:text-secondary-d'>Clarity.</p></p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <a href='https://amzn.to/3Ugu5h0' target="_blank" rel="noreferrer">
                            <button className='bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm w-[50px] h-[25px] rounded-2xl'>Get</button>
                        </a>
                    </div>
                </div>

                {/* Setup 8 */}
                <div
                    className={`grid grid-cols-4 ${hoveredIndex === null || hoveredIndex === 7 ? '' : 'opacity-50'}`}
                    onMouseOver={() => handleMouseOver(7)}
                    onMouseOut={handleMouseOut}
                >
                    <div className='flex items-center'><img className='w-20 rounded-xl transition-transform transform hover:scale-125' src={i14} alt='setup8' /></div>
                    <div className='col-span-2 pl-5 flex items-center'>
                        <p>Hue Lights
                        <p className='text-L-2 dark:text-secondary-d'>Radiant.</p></p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <a href='https://amzn.to/3UgQevD' target="_blank" rel="noreferrer">
                            <button className='bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm w-[50px] h-[25px] rounded-2xl'>Get</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SetupSection;
