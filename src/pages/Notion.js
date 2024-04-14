import React from 'react'
import Header from '../components/Header'
import { Helmet } from 'react-helmet'

function Notion() {
    return (
        <div class="App dark:bg-black text-L-1 dark:text-primary-d transition">
            <Helmet>
                <title>Notion</title>
            </Helmet>
            <Header />
            <div style={{width: '700px', margin: '0 auto'}}>
            
            <div class="animate-in mt-10">
                <h1 className='subpixel-antialiased animate-in text-black dark:text-white'>Notion Templates</h1>
                <p>Coming Soon!</p>
            </div>
            </div>
        </div>
    )
}

export default Notion