import React, { useState } from 'react'
import Header from './components/Header'
import Showcase from './components/Showcase'
import memoji from './assets/images/me-moji.jpg';
import { Helmet } from 'react-helmet'

function App() {

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

  return (
    
    <div class="App text-L-1 dark:text-primary-d transition">
        <Helmet>
          <title>Home</title>
        </Helmet>
        <Header/>
        <div style={{width: '700px', margin: '0 auto'}}>
          
          <main class="animate-in mt-16">
            <h1 className='animate-in text-h1-L dark:text-primary-d font-semibold'>Charles Dela Cruz</h1>
            {/* <p class="animate-in text-L-2 dark:text-secondary-d" style={{ '--index': .8 }}>Second Year Computer Science Student</p> */}

            <section class='animate-in mt-5 flex flex-row gap-7 text-L-2'>
              <img class='rounded-full' width='100px' src={memoji} alt="memoji" />


              <ul className="info-side flex flex-col justify-center">
                {['Dalhousie University', 'Aspiring Developer', 'Tech Enthusiast'].map((item, index) => (
                  <li
                    key={index}
                    className={`group flex flex-row gap-2 items-center ${
                      hoveredIndex === null || hoveredIndex === index ? 'opacity-100' : 'opacity-50'
                    }`}
                    onMouseOver={() => handleMouseOver(index)}
                    onMouseOut={handleMouseOut}
                  >
                    <ion-icon name={getIconName(index)}></ion-icon>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

            </section>
            <p class='animate-in mt-5 dark:text-secondary-d' style={{ '--index': .5 }}>
              Hey there, I'm Charles, a Computer Science student at Dalhousie University who thrives on building cool stuff with code! 
              Passionate about tech and creative problem-solving. Always evolving and expanding my skills!
            </p>

            {/* <section class='mt-3 text-L-2'>
              <span><a class='hover:underline underline-offset-4' href='mailto:cdelacruz@dal.ca'>↗ Send an Email</a></span>
            </section> */}
            
            <Showcase/>
          </main>
        </div>
    </div>
  )
}

export default App;
