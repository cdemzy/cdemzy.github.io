import React, { useEffect } from 'react'
import Header from '../components/Header'
import AppleSection from '../components/gear-sections/AppleSection'
import SetupSection from '../components/gear-sections/SetupSection'
import PCSection from '../components/gear-sections/PCSection'
import { Helmet } from 'react-helmet'
function Gear() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div class="App w-[375px] sm:w-[630px] md:w-[700px] dark:bg-black text-L-1 dark:text-primary-d transition subpixel-antialiased mx-auto">
            <Helmet>
                <title>Gear</title>
            </Helmet>
            <header class='fixed pt-4 pb-2 top-0 left-0 w-full bg-white dark:bg-black flex justify-center items-center z-10'>
                <Header/>
            </header>

            <main class="animate-in pt-36 pb-10 w-[375px] sm:w-[630px] md:w-[700px] px-6 sm:px-0">
                <h1 className='animate-in text-h1-L dark:text-primary-d font-semibold'>Gear</h1>
                <p class="animate-in text-L-2 dark:text-secondary-d" style={{ '--index': 1 }}>My Arsenal.</p>

                <p class='pt-6'>This is gear that I actually own and recommend.</p>
                
                {/* Tech Sections */}
                <AppleSection/>
                <SetupSection/>
                <PCSection/>

            </main>
        </div>
    )
}

export default Gear