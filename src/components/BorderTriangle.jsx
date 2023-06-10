import React from 'react'
import HeroImage from '../images/image-hero.webp'

function BorderTriangle() {
  return (
    <>
    <div id='borderContainer' className='w-[100%] bg-ghostWhite flex flex-col items-center justify-center'>
        <svg id='borderTriangle' xmlns='http://www.w3.org/2000/svg' version='1.1' width='100%' height='80' viewBox='0 0 100 102' preserveAspectRatio='none'>
            <path className='stroke-darkPurple fill-darkPurple' d='M0 0 L50 50 L100 0 Z'></path>
        </svg>
        <div id='heroImageContainer' className='pr-4 pl-8 absolute top-[400px]'>
            <img src={HeroImage} alt='the hero' />
        </div>
    </div>
    </>
  )
}

export default BorderTriangle