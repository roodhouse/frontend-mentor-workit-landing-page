import React from 'react';
import PatternOne from '../images/bg-pattern-1.svg'
import PatternTwo from '../images/bg-pattern-2.png'

function Hero() {
  return (
    <div id='hero' className='bg-darkPurple pt-16 lg:pt-14'>
        <div id='heroTextContainer' className='flex flex-col items-center text-center px-4'>
            <div id='heroText' className='font-["Fraunces"] text-white font-semibold text-[47px] leading-[53px] mb-10 max-w-[375px] lg:text-6xl lg:leading-[65px] lg:max-w-[430px] xl:text-[80px] xl:leading-[80px] xl:max-w-[530px]'>
                <h1>Data <span className='underline decoration-eucaplyptus decoration-[3px] underline-offset-[9px]'>tailored</span> to your needs.</h1>
            </div>
            <div id='heroButton' className='pb-[156px]'>
                <button className='text-darkPurple font-["Manrope"] border border-darkPurple font-bold text-base leading-8 text-center tracking-[-0.16px] bg-eucaplyptus px-6 py-3 xl:hover:cursor-pointer xl:hover:bg-darkPurple xl:hover:text-eucaplyptus xl:hover:border xl:hover:border-eucaplyptus xl:text-[18px]'>Learn More</button>
            </div>
        </div>
        <div id='patternOne' className='hidden lg:block lg:absolute lg:top-[75px] lg:left-[-230px]'>
          <img src={PatternOne} alt="generic pattern" />
        </div>
        <div id='patternTwoContainer'>
        <div id='patternTwo' className='hidden lg:block lg:absolute lg:top-[250px] lg:w-[160px] lg:right-0'>
          <img src={PatternTwo} alt="generic pattern two" />
        </div>

        </div>
    </div>
  )
}

export default Hero