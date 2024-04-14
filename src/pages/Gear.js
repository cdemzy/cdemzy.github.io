import React from 'react'
import Header from '../components/Header'
import { Helmet } from 'react-helmet'

function Gear() {
    return (
        <div class="App h-screen dark:bg-black text-L-1 dark:text-primary-d transition">
            <Helmet>
                <title>Gear</title>
            </Helmet>
            <Header />
            <div style={{width: '700px', margin: '0 auto'}} >
                <main class="animate-in mt-16">
                    <h1 className='animate-in text-h1-L dark:text-white font-semibold'>Gear</h1>
                    <p class="animate-in text-L-2" style={{ '--index': 1 }}>My Arsenal.</p>
                    
                    <section>
                        
                    </section>

                </main>

            </div>
        </div>
    )
}

export default Gear