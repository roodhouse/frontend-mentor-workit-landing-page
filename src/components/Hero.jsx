import React from 'react';
import HeroImage from '../images/image-hero.webp'

function Hero() {
  return (
    <div id='hero' className='bg-darkPurple pt-16'>
        <div id='heroTextContainer' className='flex flex-col text-center px-4'>
            <div id='heroText' className='font-["Fraunces"] text-white font-semibold text-[47px] leading-[53px] mb-10'>
                <h1>Data <span className='underline decoration-eucaplyptus decoration-[3px] underline-offset-[9px]'>tailored</span> to your needs.</h1>
            </div>
            <div id='heroButton' className='pb-[156px]'>
                <button className='text-darkPurple font-["Manrope"] font-bold text-base leading-8 text-center tracking-[-0.16px] bg-eucaplyptus px-6 py-3'>Learn More</button>
            </div>
        </div>
        
    </div>
  )
}

export default Hero