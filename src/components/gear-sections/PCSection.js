import React, { useState } from 'react';
/* PC */
import i15 from '../../assets/images/gear/r5700x.png'
import i16 from '../../assets/images/gear/3060TI.png'
import i17 from '../../assets/images/gear/msi-b550.png'
import i18 from '../../assets/images/gear/ml240L.png'
import i19 from '../../assets/images/gear/xpg-ram.png'
import i20 from '../../assets/images/gear/cx650f.png'
import i21 from '../../assets/images/gear/4000d.png'
import i22 from '../../assets/images/gear/kingston-a2000.png'
import i23 from '../../assets/images/gear/sp120.png'
import i24 from '../../assets/images/gear/UB500.png'

function PCSection() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseOver = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseOut = () => {
        setHoveredIndex(null);
    };

    return (
        <section className='pc-section mt-10'>
            <p className='title text-L-2 dark:text-secondary-d'>Personal Computer Build</p>
            <div className='mt-7 grid grid-rows-10 sm:grid-cols-2'>
                {/* PC 1 */}
                <div
                    className={`pb-7 sm:pr-5 grid grid-cols-4 ${hoveredIndex === null || hoveredIndex === 0 ? 'opacity-100' : 'opacity-50'}`}
                    onMouseOver={() => handleMouseOver(0)}
                    onMouseOut={handleMouseOut}
                >
                    <div className='flex items-center'><img className='w-20 flex-item-left rounded-xl transition-transform transform hover:scale-125' src={i15} alt='pc1' /></div>
                    <div className='col-span-2 pl-5 flex items-center'>
                        <p>Ryzen 5700x
                        <p className='text-L-2 dark:text-secondary-d'>Powerhouse.</p></p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <a href='https://amzn.to/3vZzIH5' target="_blank" rel="noreferrer">
                            <button className='bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm w-[50px] h-[25px] rounded-2xl'>Get</button>
                        </a>
                    </div>
                </div>

                {/* PC 2 */}
                <div
                    className={`pb-7 grid grid-cols-4 ${hoveredIndex === null || hoveredIndex === 1 ? 'opacity-100' : 'opacity-50'}`}
                    onMouseOver={() => handleMouseOver(1)}
                    onMouseOut={handleMouseOut}
                >
                    <div className='flex items-center'><img className='w-20 rounded-xl transition-transform transform hover:scale-125' src={i16} alt='pc2' /></div>
                    <div className='col-span-2 pl-5 flex items-center'>
                        <p>RTX 3060 Ti
                        <p className='text-L-2 dark:text-secondary-d'>Overclocked.</p></p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <a href='https://amzn.to/3xvw4Fk' target="_blank" rel="noreferrer">
                            <button className='bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm w-[50px] h-[25px] rounded-2xl'>Get</button>
                        </a>
                    </div>
                </div>

                {/* PC 3 */}
                <div
                    className={`pb-7 sm:pr-5 grid grid-cols-4 ${hoveredIndex === null || hoveredIndex === 2 ? 'opacity-100' : 'opacity-50'}`}
                    onMouseOver={() => handleMouseOver(2)}
                    onMouseOut={handleMouseOut}
                >
                    <div className='flex items-center'><img className='w-20 rounded-xl transition-transform transform hover:scale-125' src={i17} alt='pc3' /></div>
                    <div className='col-span-2 pl-5 flex items-center'>
                        <p>MSI B550 ATX
                        <p className='text-L-2 dark:text-secondary-d'>Robust.</p></p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <a href='https://amzn.to/4aySV1A' target="_blank" rel="noreferrer">
                            <button className='bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm w-[50px] h-[25px] rounded-2xl'>Get</button>
                        </a>
                    </div>
                </div>

                {/* PC 4 */}
                <div
                    className={`pb-7 grid grid-cols-4 ${hoveredIndex === null || hoveredIndex === 3 ? 'opacity-100' : 'opacity-50'}`}
                    onMouseOver={() => handleMouseOver(3)}
                    onMouseOut={handleMouseOut}
                >
                    <div className='flex items-center'><img className='w-20 rounded-xl transition-transform transform hover:scale-125' src={i18} alt='pc4' /></div>
                    <div className='col-span-2 pl-5 flex items-center'>
                        <p>ML240L
                        <p className='text-L-2 dark:text-secondary-d'>Frostbite.</p></p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <a href='https://amzn.to/3xAYi1L' target="_blank" rel="noreferrer">
                            <button className='bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm w-[50px] h-[25px] rounded-2xl'>Get</button>
                        </a>
                    </div>
                </div>

                {/* PC 5 */}
                <div
                    className={`pb-7 sm:pr-5 grid grid-cols-4 ${hoveredIndex === null || hoveredIndex === 4 ? 'opacity-100' : 'opacity-50'}`}
                    onMouseOver={() => handleMouseOver(4)}
                    onMouseOut={handleMouseOut}
                >
                    <div className='flex items-center'><img className='w-20 rounded-xl transition-transform transform hover:scale-125' src={i19} alt='pc5' /></div>
                    <div className='col-span-2 pl-5 flex items-center'>
                        <p>XPG 16-3200
                        <p className='text-L-2 dark:text-secondary-d'>Dynamic.</p></p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <a href='https://amzn.to/3xEbFy3' target="_blank" rel="noreferrer">
                            <button className='bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm w-[50px] h-[25px] rounded-2xl'>Get</button>
                        </a>
                    </div>
                </div>

                {/* PC 6 */}
                <div
                    className={`pb-7 grid grid-cols-4 ${hoveredIndex === null || hoveredIndex === 5 ? 'opacity-100' : 'opacity-50'}`}
                    onMouseOver={() => handleMouseOver(5)}
                    onMouseOut={handleMouseOut}
                >
                    <div className='flex items-center'><img className='w-20 rounded-xl transition-transform transform hover:scale-125' src={i20} alt='pc6' /></div>
                    <div className='col-span-2 pl-5 flex items-center'>
                        <p>CX650F
                        <p className='text-L-2 dark:text-secondary-d'>Essential.</p></p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <a href='https://amzn.to/4d83L0e' target="_blank" rel="noreferrer">
                            <button className='bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm w-[50px] h-[25px] rounded-2xl'>Get</button>
                        </a>
                    </div>
                </div>

                {/* PC 7 */}
                <div
                    className={`pb-7 sm:pr-5 grid grid-cols-4 ${hoveredIndex === null || hoveredIndex === 6 ? 'opacity-100' : 'opacity-50'}`}
                    onMouseOver={() => handleMouseOver(6)}
                    onMouseOut={handleMouseOut}
                >
                    <div className='flex items-center'><img className='w-20 rounded-xl transition-transform transform hover:scale-125' src={i21} alt='pc7' /></div>
                    <div className='col-span-2 pl-5 flex items-center'>
                        <p>Corsair 4000D
                        <p className='text-L-2 dark:text-secondary-d'>Airflow.</p></p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <a href='https://amzn.to/4cW7zBo' target="_blank" rel="noreferrer">
                            <button className='bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm w-[50px] h-[25px] rounded-2xl'>Get</button>
                        </a>
                    </div>
                </div>

                {/* PC 8 */}
                <div
                    className={`pb-7 grid grid-cols-4 ${hoveredIndex === null || hoveredIndex === 7 ? 'opacity-100' : 'opacity-50'}`}
                    onMouseOver={() => handleMouseOver(7)}
                    onMouseOut={handleMouseOut}
                >
                    <div className='flex items-center'><img className='w-20 rounded-xl transition-transform transform hover:scale-125' src={i22} alt='pc8' /></div>
                    <div className='col-span-2 pl-5 flex items-center'>
                        <p>A2000 1TB M.2
                        <p className='text-L-2 dark:text-secondary-d'>Fast.</p></p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <a href='https://amzn.to/3Q2DSF5' target="_blank" rel="noreferrer">
                            <button className='bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm w-[50px] h-[25px] rounded-2xl'>Get</button>
                        </a>
                    </div>
                </div>

                {/* PC 9 */}
                <div
                    className={`pb-7 sm:pb-0 sm:pr-5 grid grid-cols-4 ${hoveredIndex === null || hoveredIndex === 8 ? 'opacity-100' : 'opacity-50'}`}
                    onMouseOver={() => handleMouseOver(8)}
                    onMouseOut={handleMouseOut}
                >
                    <div className='flex items-center'><img className='w-20 rounded-xl transition-transform transform hover:scale-125' src={i23} alt='pc9' /></div>
                    <div className='col-span-2 pl-5 flex items-center'>
                        <p>SP120 RGB
                        <p className='text-L-2 dark:text-secondary-d'>Breezy.</p></p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <a href='https://amzn.to/3xJ9r09' target="_blank" rel="noreferrer">
                            <button className='bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm w-[50px] h-[25px] rounded-2xl'>Get</button>
                        </a>
                    </div>
                </div>

                {/* PC 10 */}
                <div
                    className={`grid grid-cols-4 ${hoveredIndex === null || hoveredIndex === 9 ? 'opacity-100' : 'opacity-50'}`}
                    onMouseOver={() => handleMouseOver(9)}
                    onMouseOut={handleMouseOut}
                >
                    <div className='flex items-center'><img className='w-20 rounded-xl transition-transform transform hover:scale-125' src={i24} alt='pc10' /></div>
                    <div className='col-span-2 pl-5 flex items-center'>
                        <p>UB500
                        <p className='text-L-2 dark:text-secondary-d'>Bluetooth.</p></p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <a href='https://amzn.to/3Jh0zSf' target="_blank" rel="noreferrer">
                            <button className='bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm w-[50px] h-[25px] rounded-2xl'>Get</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PCSection;
