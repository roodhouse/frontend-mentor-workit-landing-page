import React from 'react'
import HeroImage from '../images/image-hero.webp'

function BorderTriangle() {
  return (
    <>
    <div id='borderContainer' className='w-[100%] bg-ghostWhite flex flex-col items-center justify-center pb-16 sm:pb-28 md:pb-40 xl:pb-[90px]'>
        <svg id='borderTriangle' xmlns='http://www.w3.org/2000/svg' version='1.1' width='100%' height='80' viewBox='0 0 100 102' preserveAspectRatio='none' className='xl:h-[300px]'>
            <path className='stroke-darkPurple fill-darkPurple' d='M0 0 L50 50 L100 0 Z'></path>
        </svg>
    <div id='heroWrapper' className='absolute top-[400px] max-w-[375px] sm:max-w-[465px] md:max-w-[530px] xl:max-w-[768px]'>
        <div id='heroImageContainer' className='pr-4 pl-8 xl:pt-[50px]'>
            <img src={HeroImage} alt='the hero' />
        </div>
    </div>
        
    </div>
    </>
  )
}

export default BorderTriangle