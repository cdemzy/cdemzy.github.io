import Header from '../components/Header'
import React from 'react'
import { Helmet } from 'react-helmet'

function NoPage() {
    return (
        <div class="App h-screen dark:bg-black text-L-1 dark:text-primary-d transition">
            <Helmet>
                <title>No Page Error: 404</title>
            </Helmet>
            <Header/>
            <div style={{width: '700px', margin: '0 auto'}}>
                <main class="animate-in mt-16">
                    <h1>No Page</h1>

                </main>


            </div>
        </div>
    )
}

export default NoPage