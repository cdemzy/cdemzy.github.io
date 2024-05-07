import React from 'react';
import harajuku from '../../assets/images/collage/harajuku.jpg';
import hoover from '../../assets/images/collage/hoover.jpg';
import tree from '../../assets/images/collage/tree.jpg';
import dumbo from '../../assets/images/collage/dumbo.jpg';
import backImageHarajuku from '../../assets/images/collage/back-paper-stock-harajuku.jpg';
import backImageHoover from '../../assets/images/collage/back-paper-hoover.jpg';
import backImageTree from '../../assets/images/collage/back-paper-tree.jpg';
import backImageDumbo from '../../assets/images/collage/back-paper-brooklyn.jpg';

function PhotoStack() {

    return (
        <div className='main-one flex flex-row'>
            <div class="1st-pic hidden md:block transition-transform transform hover:scale-110">
                <div class="group h-72 w-56 [perspective:1000px] -ml-[80px] sm:-ml-[20px] sm:-mr-[50px]" style={{ transform: 'rotate(-10deg)' }}>
                    <div class="pic-con relative h-full w-full rounded-2xl shadow-xl transition-all duration-200 [transform-style:perspective-3d] group-hover:[transform:rotateY(180deg)]">
                        <img class="absolute inset-0 h-full w-full rounded-2xl object-cover transform scale-x-[-1]" src={ backImageHarajuku } alt='harajuku back'/>
                        <img class="w-full h-full rounded-2xl [transform-rotateY(180deg)] group-hover:opacity-0" src={ harajuku } alt='harajuku'/>
                    </div>
                </div>
            </div>
            <div class="2nd-pic hidden md:block transition-transform transform hover:scale-110">
                <div class="group h-64 w-64 [perspective:1000px] -ml-[40px] -mr-[30px]" style={{ transform: 'rotate(5deg)' }}>
                    <div class="relative h-full w-full rounded-2xl shadow-2xl transition-all duration-200 [transform-style:perspective-3d] group-hover:[transform:rotateY(180deg)]">
                        <img class="absolute inset-0 h-full w-full rounded-2xl object-cover transform scale-x-[-1] scale-105" src={ backImageHoover}  alt='hoover dam back'/>
                        <img class="w-full h-full rounded-2xl shadow-xl [transform-rotateY(180deg)] group-hover:opacity-0" src={ hoover } alt='hoover dam'/>
                    </div>
                </div>
            </div>
            <div class="3rd-pic transition-transform transform hover:scale-110">
                <div class="group h-52 w-52 sm:h-72 sm:w-72 md:h-60 md:w-64 [perspective:1000px] -ml-[30px] -mr-[60px]" style={{ transform: 'rotate(-5deg)' }}>
                    <div class="relative h-full w-full rounded-2xl shadow-2xl transition-all duration-200 [transform-style:perspective-3d] group-hover:[transform:rotateY(180deg)]">
                        <img class="absolute inset-0 h-full w-full rounded-2xl object-cover transform scale-x-[-1]" src={ backImageTree } alt='joshua tree back'/>
                        <img class="w-full h-full rounded-2xl shadow-xl [transform-rotateY(180deg)] group-hover:opacity-0" src={ tree } alt='joshua tree'/>
                    </div>
                </div>
            </div>
            <div class="4th-pic transition-transform transform hover:scale-110">
                <div class="group mt-10 md:mt-0 h-56 w-44 sm:h-72 sm:w-56 [perspective:1000px] -ml-[30px] -mr-[20px] md:-ml-[50px] md:-mr-[10px]" style={{ transform: 'rotate(10deg)' }}>
                    <div class="relative h-full w-full rounded-2xl shadow-2xl transition-all duration-200 [transform-style:perspective-3d] group-hover:[transform:rotateY(180deg)]">
                        <img class="absolute inset-0 h-full w-full rounded-2xl object-cover transform scale-x-[-1]" src={ backImageDumbo } alt='brooklyn new york back'/>
                        <img class="w-full h-full rounded-2xl shadow-xl  [transform-rotateY(180deg)] group-hover:opacity-0" src={ dumbo } alt='brooklyn new york'/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default PhotoStack;
