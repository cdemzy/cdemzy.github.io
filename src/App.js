import React, { useState, useEffect } from 'react'
import Navbar from './components/navbar/Navbar'
import About from './pages/About'
import memoji from './assets/images/other-images/me-moji.png';
import { Helmet } from 'react-helmet'

function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
  };

  const getIconName = (index) => {
    switch (index) {
      case 0:
        return 'pencil';
      case 1:
        return 'code-working';
      case 2:
        return 'cog';
      default:
        return '';
    }
  };

  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    setIsBlinking(true);
    setTimeout(() => setIsBlinking(false), 700); // Adjust timing as needed
  }, []);

  return (
    <div class="w-[375px] sm:w-[630px] md:w-[700px] mx-auto h-screen text-L-1 dark:text-primary-d transition light-scrollbar">
        <Helmet>
          <title>Home</title>
        </Helmet>
        <header class='fixed pt-4 pb-2 top-0 left-0 w-full bg-white dark:bg-black flex justify-center items-center z-10'>
          <Navbar/>
        </header>
          
        <main class="animate-in pt-36 w-[375px] sm:w-[630px] md:w-[700px] px-6 sm:px-0 pb-20">
          <h1 className='animate-in text-h1-L dark:text-primary-d font-semibold'>Charles Dela Cruz</h1>

          <section class='animate-in mt-5 flex flex-row gap-7 text-L-2 dark:text-secondary-d'>
            <img
              className={`bg-[#e5e7eb] dark:bg-g-1 rounded-full transition-transform transform ${
                isBlinking ? 'scale-125' : ''
              } hover:scale-125 w-[100px] h-[100px] mode-btn`}
              src={memoji}
              alt="memoji"
            />

            <ul className="info-side flex flex-col justify-center select-none">
              {['Dalhousie University', 'Software Developer', 'Tech Enthusiast'].map((item, index) => (
                <li
                  key={index}
                  className={`group flex flex-row gap-2 items-center text-sm sm:text-base ${
                    hoveredIndex === null || hoveredIndex === index ? 'opacity-100' : 'opacity-50'
                  }`}
                  onMouseOver={() => handleMouseOver(index)}
                  onMouseOut={ handleMouseOut }
                >
                  <ion-icon name={getIconName(index)}></ion-icon>
                  <p>{item}</p>
                </li>
              ))}
            </ul>

          </section>

          <About/>
        </main>

        
    </div>
  )
}

export default App;
