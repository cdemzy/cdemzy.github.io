import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/navbar/Navbar'
import ContactForm from '../components/contact-sections/ContactForm'

const Contact = () => {
  return (
    <div class="w-[375px] sm:w-[630px] md:w-[700px] mx-auto h-screen text-L-1 dark:text-primary-d transition light-scrollbar pb-[101vh]">
        <Helmet>
          <title>Home</title>
        </Helmet>
        <header class='fixed pt-4 pb-2 top-0 left-0 w-full bg-white dark:bg-black flex justify-center items-center z-10'>
          <Navbar/>
        </header>
          
        <main class="animate-in pt-36 w-[375px] sm:w-[630px] md:w-[700px] px-6 sm:px-0 pb-20">
            <h1 className='animate-in text-h1-L dark:text-primary-d font-semibold'>Contact</h1>
            <p class="animate-in text-L-2 dark:text-secondary-d" style={{ '--index': 1 }}>Get in Contact with me!</p>

            <ContactForm/>
        </main>

    </div>
  )
}

export default Contact