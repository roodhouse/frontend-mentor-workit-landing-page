import React from 'react'

function CardThree() {
  return (
    <div id='cardThreeContainer' className='flex flex-col justify-center items-center text-center'>
        <div id='numberThreeContainer' className='pb-6'>
            <p className='font-["Fraunces"] text-darkPurple text-xl font-semibold leading-9 text-center px-4 py-[5px] border-[1px] border-davyGrey rounded-full'>3</p>
        </div>
        <div id='cardThreeHeading' className='pb-8'>
            <h2 className='font-["Fraunces"] text-darkPurple text-xl leading-9 font-semibold text-center'>Always affordable</h2>
        </div>
        <div id='cardThreeDetails' className='mb-10'>
            <p className='font-["Manrope"] font-normal text-[16px] leading-7 text-davyGrey text-center'>Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.</p>
        </div>
    </div>
  )
}

export default CardThree