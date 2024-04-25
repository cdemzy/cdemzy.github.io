import React, { } from 'react';
import t1 from '../../assets/images/tech-stack/react.png';
import t2 from '../../assets/images/tech-stack/tailwind.png';
import t3 from '../../assets/images/tech-stack/nodejs.png';
import t4 from '../../assets/images/tech-stack/js.png';
import t5 from '../../assets/images/tech-stack/html.png';
import t6 from '../../assets/images/tech-stack/css.png';
import t7 from '../../assets/images/tech-stack/mysql.png';
import t8 from '../../assets/images/tech-stack/java.png';
import t9 from '../../assets/images/tech-stack/c-sharp.png';
import t10 from '../../assets/images/tech-stack/git.png';
import t11 from '../../assets/images/tech-stack/jira.png';
import t12 from '../../assets/images/tech-stack/figma.png';
import PropTypes from 'prop-types';

function Techstack({ onHover }) {
    const techs = [
        { src: t1, alt: 'React' },
        { src: t2, alt: 'Tailwind CSS' },
        { src: t3, alt: 'Node.js' },
        { src: t4, alt: 'JavaScript' },
        { src: t5, alt: 'HTML5' },
        { src: t6, alt: 'CSS3' },
        { src: t7, alt: 'MySQL' },
        { src: t8, alt: 'Java' },
        { src: t9, alt: 'C#' },
        { src: t10, alt: 'Git' },
        { src: t11, alt: 'Jira' },
        { src: t12, alt: 'Figma' }
    ];

    return (
        <div className='tech-stack-boxes w-full sm:w-[80%] md:w-[70%] pt-3 sm:pt-0'>
            <div className='grid grid-cols-3 sm:grid-cols-6 items gap-y-10 gap-x-10'>
                {techs.map((tech, index) => (
                    <div key={index} onMouseOver={() => onHover(tech.alt)} onMouseOut={() => onHover('')}>
                        <img className={`w-10 h-10 transition-transform transform md:hover:scale-125 mx-auto ${tech.alt === 'Tailwind CSS' || tech.alt === 'Figma' ? 'rounded-lg' : ''}`} src={tech.src} alt={tech.alt} />
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