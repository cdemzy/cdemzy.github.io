import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/images/logo-light.png';
import logoLight from '../assets/images/logo-dark.png';

function Header() {
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme ? storedTheme : 'light';
    });

    // Manage icon visibility and rotation
    const [moonScale, setMoonScale] = useState(theme === 'dark' ? 1 : 0);
    const [sunScale, setSunScale] = useState(theme === 'light' ? 1 : 0);

    // Update document class based on theme preference retrieved from local storage
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
        } else {
            setTheme('light');
        }
    }, []);

    // Update document class and store theme preference in local storage when theme changes
    useEffect(() => {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
        localStorage.setItem('theme', theme);
        // Update icon scales based on theme change
        if (theme === 'dark') {
            setMoonScale(1);
            setSunScale(0);
        } else {
            setMoonScale(0);
            setSunScale(1);
        }
    }, [theme]);

    // Toggle between light and dark mode
    const handleThemeSwitch = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
        // Toggle icon scales based on theme switch
        setMoonScale(prevScale => (prevScale === 0 ? 1 : 0));
        setSunScale(prevScale => (prevScale === 0 ? 1 : 0));
    };

    // Get the current location using useLocation hook
    const location = useLocation();

    // Define the styles as a constant
    const linkStyles = {
        backgroundColor: theme === 'dark' ? 'var(--boxBg)' : 'var(--boxBgL)',
        borderRadius: '5px',
        padding: '7px 15px',
        fontSize: '14px',
        color: theme === 'dark' ? '#ffffff' : '#333333'
    };

    return (
        <div className='header pt-7 pb-10 text-L-2 dark:text-neutral-300' style={{width: '700px', margin: '0 auto'}}>

            <div className='header flex flex-row justify-content items-center '>

                <div className='flex-1'><Link to="/"><img src={theme === 'dark' ? logoLight : logo} className="w-10 h-10" alt="Logo"/></Link></div>
                <div>
                    <ul className='navbar-list flex flex-row justify-content items-center gap-2'>
                        <li><Link to="/about" style={location.pathname === '/about' ? linkStyles : {fontSize: '14px',padding: '7px 15px'}}>About</Link></li>
                        <li><Link to="/gear" style={location.pathname === '/gear' ? linkStyles : {fontSize: '14px', padding: '7px 15px'}}>Gear</Link></li>
                        <li><Link to="/projects" style={location.pathname === '/projects' ? linkStyles : {fontSize: '14px', padding: '7px 15px'}}>Projects</Link></li>
                    </ul>
                </div>
                <div className='flex-1 flex justify-end pr-2'>
                    <button
                        className={`mode-btn w-8 h-8 rounded-full flex justify-center items-center transition-opacity duration-500 ${theme === 'dark' ? 'bg-g-1' : 'bg-gray-100'}`}
                        onClick={handleThemeSwitch}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                            <ion-icon name="moon" style={{ position: 'absolute', transform: `scale(${moonScale}) rotate(${moonScale === 1 ? 360 : 0}deg)`, transition: 'transform 1s ease' }}></ion-icon>
                            <ion-icon name="sunny" style={{ transform: `scale(${sunScale}) rotate(${sunScale === 1 ? 360 : 0}deg)`, transition: 'transform 1s ease' }}></ion-icon>
                        </div>
                    </button>
                </div>

            </div>

        </div>
    );
}

export default Header;
