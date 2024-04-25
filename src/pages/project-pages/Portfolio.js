import React from 'react';
import Header from '../../components/Header'
import { Helmet } from 'react-helmet'

function Portfolio() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return(
        <div class="App h-screen dark:bg-black text-L-1 dark:text-primary-d">
            <Helmet>
                <title>Flappy Bird Project</title>
            </Helmet>

            <header class='fixed pt-4 pb-2 top-0 left-0 w-full bg-white dark:bg-black flex justify-center items-center z-10'>
                <Header/>
            </header>

            <main class="animate-in" style={{width: '700px', margin: '150px auto'}}>
                <p class="animate-in text-L-2 dark:text-secondary-d" style={{ '--index': 1 }}>2024 Collection.</p>
                <h1 className='animate-in text-h1-L dark:text-primary-d font-semibold'>Flappy Bird</h1>
                
            </main>
        </div>
    )
};

export default Portfolio;