import Header from '../components/Header'
import React, {useEffect} from 'react'
import { Helmet } from 'react-helmet'

function NoPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div class="App h-screen dark:bg-black text-L-1 dark:text-primary-d transition">
            <Helmet>
                <title>No Page Error: 404</title>
            </Helmet>
            <header class='fixed pt-4 pb-2 top-0 left-0 w-full bg-white dark:bg-black flex justify-center items-center z-10'><Header/></header>
            <div style={{width: '700px', margin: '150px auto'}}>
                <main class="animate-in mt-16">
                    <h1>No Page</h1>

                </main>


            </div>
        </div>
    )
}

export default NoPage