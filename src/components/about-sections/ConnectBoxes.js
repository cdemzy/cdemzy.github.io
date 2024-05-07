import React from 'react'

function ConnectBoxes(){

    // Handle mouse move event to track mouse position
    const handleMouseMove = (e) => {
        const { currentTarget: target } = e;
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Update CSS variables to track mouse position
        target.style.setProperty("--mouse-x", `${x}px`);
        target.style.setProperty("--mouse-y", `${y}px`);
    };

    return(
        <div class='link-boxes w-full sm:w-[80%] md:w-[70%] flex flex-col gap-2 pt-2 sm:pt-0'>
            
            <a class='glow-border flex flex-row items-center justify-between border rounded-lg border-gray-300 dark:border-g-1 dark:bg-g-2 shadow-md px-4 py-4 h-min' href='mailto:cdelacruz@dal.ca' target="_blank" rel="noreferrer" onMouseMove={handleMouseMove}>
                <div class='flex justify-center items-center'><ion-icon name="mail" class="h-5 w-5"></ion-icon><p class='col-span-4 flex items-center text-sm sm:text-base pl-2 sm:pl-0 ml-2'>Email</p></div>
                
                <div class='flex justify-center items-center'><ion-icon name="arrow-forward"></ion-icon></div>
            </a>

            <div className='flex flex-row gap-2'>
                <a class='glow-border flex flex-row items-center justify-between border rounded-lg border-gray-300 dark:border-g-1 dark:bg-g-2 shadow-md px-4 py-4 w-[50%]' href='https://www.linkedin.com/in/cdemzyy/' target="_blank" rel="noreferrer" onMouseMove={handleMouseMove}>
                    <div class='flex justify-center items-center'><ion-icon name="logo-linkedin" class="h-5 w-5"></ion-icon><p class='col-span-4 flex items-center text-sm sm:text-base pl-2 sm:pl-0 ml-2'>LinkedIn</p></div>
                    
                    <div class='flex justify-center items-center'><ion-icon name="arrow-forward"></ion-icon></div>
                </a>

                <a class='glow-border flex flex-row items-center justify-between border rounded-lg border-gray-300 dark:border-g-1 dark:bg-g-2 shadow-md px-4 py-4 w-[50%]' href='https://github.com/cdemzy' target="_blank" rel="noreferrer" onMouseMove={handleMouseMove}>
                    <div class='flex justify-center items-center'><ion-icon name="logo-github" class="h-5 w-5"></ion-icon><p class='col-span-4 flex items-center text-sm sm:text-base pl-2 sm:pl-0 ml-2'>GitHub</p></div>
                    
                    <div class='flex justify-center items-center'><ion-icon name="arrow-forward"></ion-icon></div>
                </a>
            </div>
        </div>
    )
}

export default ConnectBoxes;