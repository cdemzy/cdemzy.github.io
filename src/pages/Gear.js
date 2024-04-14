import React from 'react'
import Header from '../components/Header'
import { Helmet } from 'react-helmet'
/* Apple */
import i1 from '../assets/images/gear/mbp-14.png'
import i2 from '../assets/images/gear/ipad-air-4.png'
import i3 from '../assets/images/gear/ip-13-pro.png'
import i4 from '../assets/images/gear/airpods-pro.png'
import i5 from '../assets/images/gear/airtag.png'
import i6 from '../assets/images/gear/magsafe-case.png'
/* Setup */
import i7 from '../assets/images/gear/q1-pro.png'
import i8 from '../assets/images/gear/xm5.png'
import i9 from '../assets/images/gear/mx-master.png'
import i10 from '../assets/images/gear/g-pro.png'
import i11 from '../assets/images/gear/main-monitor.png'
import i12 from '../assets/images/gear/sec-monitor.png'
import i13 from '../assets/images/gear/at2020.png'
import i14 from '../assets/images/gear/hue-lights.png'
/* PC */
import i15 from '../assets/images/gear/r5700x.png'
import i16 from '../assets/images/gear/3060TI.png'
import i17 from '../assets/images/gear/msi-b550.png'
import i18 from '../assets/images/gear/ml240L.png'
import i19 from '../assets/images/gear/xpg-ram.png'
import i20 from '../assets/images/gear/cx650f.png'
import i21 from '../assets/images/gear/sp120.png'
import i22 from '../assets/images/gear/UB500.png'

function Gear() {
    return (
        <div class="App dark:bg-black text-L-1 dark:text-primary-d transition subpixel-antialiased">
            <Helmet>
                <title>Gear</title>
            </Helmet>
            <Header />

            <div style={{width: '700px', margin: '0 auto'}} >
                <main class="animate-in mt-16 pb-16">
                    <h1 className='animate-in text-h1-L dark:text-primary-d font-semibold'>Gear</h1>
                    <p class="animate-in text-L-2 dark:text-secondary-d" style={{ '--index': 1 }}>My Arsenal.</p>

                    <p class='pt-6'>This is gear that I actually own and recommend.</p>
                    
                    <section class='apple-section mt-12'>

                        <p class='title text-L-2 dark:text-secondary-d'>Apple</p>

                        <div class='mt-7 grid grid-cols-2 gap-y-7 gap-x-5'>
                            <div class='grid grid-cols-4'>
                                <div class='flex items-center w-100'><img class='w-20 flex-item-left rounded-xl'src={ i1 } alt='apple1'/></div>
                                <div class='col-span-2 pl-5 flex items-center'><p>MBP M1 Pro 14<p class='text-L-2 dark:text-secondary-d'>Powerful.</p></p></div>
                                <div class='flex items-center justify-center'><button class='bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm w-[50px] h-[25px] rounded-2xl'>Get</button></div>
                            </div>

                            <div class='grid grid-cols-4'>
                                <div class='flex items-center'><img class='w-20 rounded-xl'src={ i2 } alt='apple2'/></div>
                                <div class='col-span-2 pl-5 flex items-center'><p>iPad Air 4<p class='text-L-2 dark:text-secondary-d'>Productivity.</p></p></div>
                                <div class='flex items-center justify-center'><button class='bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm w-[50px] h-[25px] rounded-2xl'>Get</button></div>
                            </div>

                            <div class='grid grid-cols-4'>
                                <div class='flex items-center'><img class='w-20 rounded-xl'src={ i3 } alt='apple3'/></div>
                                <div class='col-span-2 pl-5 flex items-center'><p>iPhone 13 Pro<p class='text-L-2 dark:text-secondary-d'>Power.</p></p></div>
                                <div class='flex items-center justify-center'><button class='bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm w-[50px] h-[25px] rounded-2xl'>Get</button></div>
                            </div>

                            <div class='grid grid-cols-4'>
                                <div class='flex items-center'><img class='w-20 rounded-xl'src={ i4 } alt='apple4'/></div>
                                <div class='col-span-2 pl-5 flex items-center'><p>Airpods Pro<p class='text-L-2 dark:text-secondary-d'>Clarity.</p></p></div>
                                <div class='flex items-center justify-center'><button class='bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm w-[50px] h-[25px] rounded-2xl'>Get</button></div>
                            </div>

                            <div class='grid grid-cols-4'>
                                <div class='flex items-center'><img class='w-20 rounded-xl'src={ i5 } alt='apple5'/></div>
                                <div class='col-span-2 pl-5 flex items-center'><p>Airtag<p class='text-L-2 dark:text-secondary-d'>Security.</p></p></div>
                                <div class='flex items-center justify-center'><button class='bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm w-[50px] h-[25px] rounded-2xl'>Get</button></div>
                            </div>

                            <div class='grid grid-cols-4'>
                                <div class='flex items-center'><img class='w-20 rounded-xl'src={ i6 } alt='apple6'/></div>
                                <div class='col-span-2 pl-5 flex items-center'><p>Magsafe Case<p class='text-L-2 dark:text-secondary-d'>Protector.</p></p></div>
                                <div class='flex items-center justify-center'><button class='bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm w-[50px] h-[25px] rounded-2xl'>Get</button></div>
                            </div>
                        </div>
                    </section>

                    <section class='setup-section mt-20'>

                        <p class='title text-L-2 dark:text-secondary-d'>Setup</p>

                        <div class='mt-7 grid grid-cols-2 gap-y-7 gap-x-5'>
                            <div class='grid grid-cols-4'>
                                <div class='flex items-center'><img class='w-20 flex-item-left rounded-xl'src={ i7 } alt='setup1'/></div>
                                <div class='col-span-2 pl-5 flex items-center'><p>Q1 Pro<p class='text-L-2 dark:text-secondary-d'>Customizable.</p></p></div>
                                <div class='flex items-center justify-center'><button class='bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm w-[50px] h-[25px] rounded-2xl'>Get</button></div>
                            </div>

                            <div class='grid grid-cols-4'>
                                <div class='flex items-center'><img class='w-20 rounded-xl'src={ i8 } alt='setup2'/></div>
                                <div class='col-span-2 pl-5 flex items-center'><p>Sony XM5<p class='text-L-2 dark:text-secondary-d'>Hi-Fi.</p></p></div>
                                <div class='flex items-center justify-center'><button class='bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm w-[50px] h-[25px] rounded-2xl'>Get</button></div>
                            </div>

                            <div class='grid grid-cols-4'>
                                <div class='flex items-center'><img class='w-20 rounded-xl'src={ i9 } alt='setup3'/></div>
                                <div class='col-span-2 pl-5 flex items-center'><p>MX Master<p class='text-L-2 dark:text-secondary-d'>Ergonomic.</p></p></div>
                                <div class='flex items-center justify-center'><button class='bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm w-[50px] h-[25px] rounded-2xl'>Get</button></div>
                            </div>

                            <div class='grid grid-cols-4'>
                                <div class='flex items-center'><img class='w-20 rounded-xl'src={ i10 } alt='setup4'/></div>
                                <div class='col-span-2 pl-5 flex items-center'><p>Logitech G Pro<p class='text-L-2 dark:text-secondary-d'>Precision.</p></p></div>
                                <div class='flex items-center justify-center'><button class='bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm w-[50px] h-[25px] rounded-2xl'>Get</button></div>
                            </div>

                            <div class='grid grid-cols-4'>
                                <div class='flex items-center'><img class='w-20 rounded-xl'src={ i11 } alt='setup5'/></div>
                                <div class='col-span-2 pl-5 flex items-center'><p>S2721DGF<p class='text-L-2 dark:text-secondary-d'>Dell Monitor.</p></p></div>
                                <div class='flex items-center justify-center'><button class='bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm w-[50px] h-[25px] rounded-2xl'>Get</button></div>
                            </div>

                            <div class='grid grid-cols-4'>
                                <div class='flex items-center'><img class='w-20 rounded-xl'src={ i12 } alt='setup6'/></div>
                                <div class='col-span-2 pl-5 flex items-center'><p>S2419HGF<p class='text-L-2 dark:text-secondary-d'>Dell Monitor.</p></p></div>
                                <div class='flex items-center justify-center'><button class='bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm w-[50px] h-[25px] rounded-2xl'>Get</button></div>
                            </div>

                            <div class='grid grid-cols-4'>
                                <div class='flex items-center'><img class='w-20 rounded-xl'src={ i13 } alt='setup7'/></div>
                                <div class='col-span-2 pl-5 flex items-center'><p>AT2020<p class='text-L-2 dark:text-secondary-d'>Clarity.</p></p></div>
                                <div class='flex items-center justify-center'><button class='bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm w-[50px] h-[25px] rounded-2xl'>Get</button></div>
                            </div>

                            <div class='grid grid-cols-4'>
                                <div class='flex items-center'><img class='w-20 rounded-xl'src={ i14 } alt='setup8'/></div>
                                <div class='col-span-2 pl-5 flex items-center'><p>Hue Lights<p class='text-L-2 dark:text-secondary-d'>Radiant.</p></p></div>
                                <div class='flex items-center justify-center'><button class='bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm w-[50px] h-[25px] rounded-2xl'>Get</button></div>
                            </div>
                        </div>
                    </section>

                    <section class='pc-section mt-20'>

                        <p class='title text-L-2 dark:text-secondary-d'>Personal Computer Build</p>

                        <div class='mt-7 grid grid-cols-2 gap-y-7 gap-x-5'>
                            <div class='grid grid-cols-4'>
                                <div class='flex items-center'><img class='w-20 flex-item-left rounded-xl'src={ i15 } alt='pc1'/></div>
                                <div class='col-span-2 pl-5 flex items-center'><p>Ryzen 5700x<p class='text-L-2 dark:text-secondary-d'>Powerhouse.</p></p></div>
                                <div class='flex items-center justify-center'><button class='bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm w-[50px] h-[25px] rounded-2xl'>Get</button></div>
                            </div>

                            <div class='grid grid-cols-4'>
                                <div class='flex items-center'><img class='w-20 rounded-xl'src={ i16 } alt='pc2'/></div>
                                <div class='col-span-2 pl-5 flex items-center'><p>RTX 3060 Ti<p class='text-L-2 dark:text-secondary-d'>Overclocked.</p></p></div>
                                <div class='flex items-center justify-center'><button class='bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm w-[50px] h-[25px] rounded-2xl'>Get</button></div>
                            </div>

                            <div class='grid grid-cols-4'>
                                <div class='flex items-center'><img class='w-20 rounded-xl'src={ i17 } alt='pc3'/></div>
                                <div class='col-span-2 pl-5 flex items-center'><p>MSI B550<p class='text-L-2 dark:text-secondary-d'>Robust.</p></p></div>
                                <div class='flex items-center justify-center'><button class='bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm w-[50px] h-[25px] rounded-2xl'>Get</button></div>
                            </div>

                            <div class='grid grid-cols-4'>
                                <div class='flex items-center'><img class='w-20 rounded-xl'src={ i18 } alt='pc4'/></div>
                                <div class='col-span-2 pl-5 flex items-center'><p>ML240L<p class='text-L-2 dark:text-secondary-d'>Frostbite.</p></p></div>
                                <div class='flex items-center justify-center'><button class='bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm w-[50px] h-[25px] rounded-2xl'>Get</button></div>
                            </div>

                            <div class='grid grid-cols-4'>
                                <div class='flex items-center'><img class='w-20 rounded-xl'src={ i19 } alt='pc5'/></div>
                                <div class='col-span-2 pl-5 flex items-center'><p>XPG 16-3200<p class='text-L-2 dark:text-secondary-d'>Dynamic.</p></p></div>
                                <div class='flex items-center justify-center'><button class='bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm w-[50px] h-[25px] rounded-2xl'>Get</button></div>
                            </div>

                            <div class='grid grid-cols-4'>
                                <div class='flex items-center'><img class='w-20 rounded-xl'src={ i20 } alt='pc6'/></div>
                                <div class='col-span-2 pl-5 flex items-center'><p>CX650F<p class='text-L-2 dark:text-secondary-d'>Essential.</p></p></div>
                                <div class='flex items-center justify-center'><button class='bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm w-[50px] h-[25px] rounded-2xl'>Get</button></div>
                            </div>

                            <div class='grid grid-cols-4'>
                                <div class='flex items-center'><img class='w-20 rounded-xl'src={ i21 } alt='apple5'/></div>
                                <div class='col-span-2 pl-5 flex items-center'><p>SP120 RGB<p class='text-L-2 dark:text-secondary-d'>Breezy.</p></p></div>
                                <div class='flex items-center justify-center'><button class='bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm w-[50px] h-[25px] rounded-2xl'>Get</button></div>
                            </div>

                            <div class='grid grid-cols-4'>
                                <div class='flex items-center'><img class='w-20 rounded-xl'src={ i22 } alt='apple6'/></div>
                                <div class='col-span-2 pl-5 flex items-center'><p>UB500<p class='text-L-2 dark:text-secondary-d'>Bluetooth.</p></p></div>
                                <div class='flex items-center justify-center'><button class='bg-gray-200 dark:bg-g-3 hover:bg-gray-300 dark:hover:bg-g-4 text-sm w-[50px] h-[25px] rounded-2xl'>Get</button></div>
                            </div>
                        </div>
                    </section>


                </main>

            </div>
        </div>
    )
}

export default Gear