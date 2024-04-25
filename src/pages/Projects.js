import React, {useEffect} from 'react'
import Header from '../components/Header'
import { Helmet } from 'react-helmet'

import FlappySection from '../components/project-sections/FlappySection';
import PortfolioSection from '../components/project-sections/PortfolioSection';

function Projects() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div class="App w-[375px] sm:w-[630px] md:w-[700px] mx-auto h-screen dark:bg-black text-L-1 dark:text-primary-d">
            <Helmet>
                <title>Projects</title>
            </Helmet>

            <header class='fixed pt-4 pb-2 top-0 left-0 w-full bg-white dark:bg-black flex justify-center items-center z-10'>
                <Header/>
            </header>

            <main class="animate-in pt-36 pb-[500px] md:pb-[900px] w-full sm:w-[630px] md:w-[700px] px-6 sm:px-0">
                <h1 className='animate-in text-h1-L dark:text-primary-d font-semibold'>Projects</h1>
                <p class="animate-in text-L-2 dark:text-secondary-d" style={{ '--index': 1 }}>Work Collection.</p>

                <section class='work-games mt-12 flex flex-col'>
                    {/* <p class='mb-5'>Games</p> */}
                    <section class='games-list'>
                        <FlappySection/>
                    </section>
                </section>

                <section class='work-apps mt-10 flex flex-row'>
                    <PortfolioSection/>
                </section>

            </main>

        </div>
    )
}

export default Projects