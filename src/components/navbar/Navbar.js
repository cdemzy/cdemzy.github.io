import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import logo from '../../assets/images/general-logos/logo-light.png';
import logoLight from '../../assets/images/general-logos/logo-dark.png';

function Navbar() {
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

    const handleThemeSwitch = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme); // Remember user's preference
        // Toggle icon scales based on theme switch
        setMoonScale(prevScale => (prevScale === 0 ? 1 : 0));
        setSunScale(prevScale => (prevScale === 0 ? 1 : 0));
    };

    // Get the current location using useLocation hook
    const location = useLocation();

    // Detect user's system preference for dark mode
    useEffect(() => {
        // Check if the user prefers dark mode
        const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        // Set the theme based on the user's preference only if it's not already set in the local storage
        if (!localStorage.getItem('theme')) {
            setTheme(prefersDarkMode ? 'dark' : 'light');
        }
    }, []);

    // Define the styles as a constant
    const linkStyles = {
        backgroundColor: theme === 'dark' ? 'var(--boxBg)' : 'var(--boxBgL)',
        borderRadius: '5px',
        padding: '7px 15px',
        fontSize: '14px',
        color: theme === 'dark' ? '#ffffff' : '#333333'
    };

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav class='flex flex-row justify-between items-center w-[375px] sm:w-[630px] md:w-[700px] px-6 sm:px-0 text-L-2 dark:text-neutral-300 mx-auto'>

            <div className=' -ml-1'>
                <Link to="/">
                    <img src={theme === 'dark' ? logoLight : logo} className="w-10 h-10" alt="Logo"></img>
                </Link>
            </div>

            <div className="md:hidden flex flex-col justify-content items-center">
                <button className="menu-button flex justify-center items-center rounded-full text-black dark:text-white active:bg-W-1 active:dark:bg-g-1 w-12" onClick={toggleMenu}><ion-icon name="menu-outline" style={{ fontSize: '24px' }}></ion-icon></button>
                <ul className={`navbar-list-drop flex flex-col justify-content items-center gap-2 mt-10 bg-white dark:bg-black dark:box-shdw rounded-b-lg ${showMenu ? 'active' : ''}`}>
                    <li class='px-2 pt-2'>
                        <Link to="/projects" className={`active:bg-slate-300 hover:bg-slate-100 hover:text-black dark:hover:bg-g-4 rounded-lg dark:hover:text-primary-d ${location.pathname === '/projects' ? 'active-link' : ''}`} style={{ fontSize: '14px', padding: '7px 15px' }}>Projects</Link>
                    </li>
                    <li class='px-2 pb-2'>
                        <Link to="/contact" className={`active:bg-slate-300 hover:bg-slate-100 hover:text-black dark:hover:bg-g-4 rounded-lg dark:hover:text-primary-d  ${location.pathname === '/contact' ? 'active-link' : ''}`} style={{ fontSize: '14px', padding: '7px 15px' }}>Contact</Link>
                    </li>
                </ul>
            </div>
            
            <div class='hidden md:inline-block'>
                <ul className='flex flex-row justify-content items-center gap-2'>
                    <li><Link to="/projects" class='hover:text-black dark:hover:text-primary-d' style={location.pathname === '/projects' ? linkStyles : {fontSize: '14px', padding: '7px 15px'}}>Projects</Link></li>
                    <li><Link to="/contact" class='hover:text-black dark:hover:text-primary-d' style={location.pathname === '/contact' ? linkStyles : {fontSize: '14px', padding: '7px 15px'}}>Contact</Link></li>
                </ul>
            </div>

            <div className='flex justify-end'>
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

        </nav>
    );
}

export default Navbar;
