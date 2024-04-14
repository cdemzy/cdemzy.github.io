import React from 'react'
import Header from '../components/Header'
import { Helmet } from 'react-helmet'

function About() {
    return (
        <div class="App text-L-1 dark:text-primary-d transition">
            <Helmet>
                <title>About</title>
            </Helmet>
            <Header/>
            <div style={{width: '700px', margin: '0 auto'}} >

                <main class="animate-in mt-16">
                    <h1 className='animate-in text-h1-L dark:text-white font-semibold'>About</h1>
                    <p class="animate-in text-L-2" style={{ '--index': 1 }}>Things about me.</p>
                </main>
            </div>
        </div>
    )
}

export default About