import React from 'react'
import Header from '../components/Header'
import { Helmet } from 'react-helmet'

function Projects() {
    return (
        <div class="App h-screen dark:bg-black text-L-1 dark:text-primary-d transition">
            <Helmet>
                <title>Projects</title>
            </Helmet>
            <Header />
            <div style={{width: '700px', margin: '0 auto'}}>
                <main class="animate-in mt-16">
                    <h1 className='animate-in text-h1-L dark:text-white font-semibold'>Projects</h1>
                    <p class="animate-in text-L-2" style={{ '--index': 1 }}>Work Collection.</p>
                </main>

            </div>
        </div>
    )
}

export default Projects