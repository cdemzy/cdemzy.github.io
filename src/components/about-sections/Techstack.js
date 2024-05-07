import React, { } from 'react';
import react from '../../assets/images/tech-stack/react.png';
import tailwind from '../../assets/images/tech-stack/tailwind.png';
import mongo from '../../assets/images/tech-stack/mongo.png';
import express from '../../assets/images/tech-stack/express.png';
import postman from '../../assets/images/tech-stack/postman-icon.svg';
import nodejs from '../../assets/images/tech-stack/nodejs.png';
import html from '../../assets/images/tech-stack/html.png';
import css from '../../assets/images/tech-stack/css.png';
import sql from '../../assets/images/tech-stack/sql.png';
import java from '../../assets/images/tech-stack/java.png';
import csharp from '../../assets/images/tech-stack/c-sharp.png';
import git from '../../assets/images/tech-stack/git.png';
import PropTypes from 'prop-types';

function Techstack({ onHover }) {
    const techs = [
        { src: react, alt: 'React' },
        { src: tailwind, alt: 'Tailwind CSS' },
        { src: mongo, alt: 'MongoDB' },
        { src: express, alt: 'ExpressJS' },
        { src: postman, alt: 'Postman' },
        { src: nodejs, alt: 'Node.js' },
        { src: html, alt: 'HTML' },
        { src: css, alt: 'CSS' },
        { src: sql, alt: 'SQL' },
        { src: java, alt: 'Java' },
        { src: csharp, alt: 'C#' },
        { src: git, alt: 'Git' }
    ];

    return (
        <div className='tech-stack-boxes w-full sm:w-[80%] md:w-[70%] pt-3 sm:pt-0'>
            <div className='grid grid-cols-3 sm:grid-cols-6 items gap-y-10 gap-x-10'>
                {techs.map((tech, index) => (
                    <div key={index} onMouseOver={() => onHover(tech.alt)} onMouseOut={() => onHover('')}>
                        <img className={`w-10 h-10 transition-transform transform md:hover:scale-125 mx-auto ${tech.alt === 'Tailwind CSS' || tech.alt === 'Figma' ? 'rounded-lg' : '' || tech.alt === 'ExpressJS' ? 'bg-W-1 rounded-lg p-1 border' : ''}`} src={tech.src} alt={tech.alt} />
                    </div>
                ))}
            </div>
        </div>
    );
}

Techstack.propTypes = {
    onHover: PropTypes.func.isRequired
};

export default Techstack;