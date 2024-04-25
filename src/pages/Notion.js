import React, {useEffect} from 'react'
import Header from '../components/Header'
import { Helmet } from 'react-helmet'

function Notion() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div class="App h-screen dark:bg-black text-L-1 dark:text-primary-d transition">
            <Helmet>
                <title>Notion</title>
            </Helmet>
            <header class='fixed pt-4 pb-2 top-0 left-0 w-full bg-white dark:bg-black flex justify-center items-center z-10'>
                <Header/>
            </header>
            
            <main class="animate-in" style={{width: '700px', margin: '150px auto'}}>

                <h1 className='subpixel-antialiased animate-in text-h1-L dark:text-primary-d'>Notion Templates</h1>
                <p class='text-L-2 dark:text-secondary-d'>Productivity Tools</p>

                <section class='collection-1 mt-10'>
                    <p><em>Coming Soon!</em></p>
                </section>

            </main>
        </div>
    )
}

export default Notion