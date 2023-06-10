import React from 'react'

function CardOne() {
  return (
    <div id='cardOneContainer' className='flex flex-col justify-center items-center text-center'>
        <div id='numberOneContainer' className='pb-6'>
            <p className='font-["Fraunces"] text-darkPurple text-xl font-semibold leading-9 text-center px-4 py-[5px] border-[1px] border-davyGrey rounded-full'>1</p>
        </div>
        <div id='cardOneHeading' className='pb-8'>
            <h2 className='font-["Fraunces"] text-darkPurple text-xl leading-9 font-semibold text-center'>Actionable insights</h2>
        </div>
        <div id='cardOneDetails' className='mb-10'>
            <p className='font-["Manrope"] font-normal text-[16px] leading-7 text-davyGrey text-center'>Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.</p>
        </div>
    </div>
  )
}

export default CardOne