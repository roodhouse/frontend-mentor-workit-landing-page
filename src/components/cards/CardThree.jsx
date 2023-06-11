import React from 'react'

function CardThree() {
  return (
    <div id='cardThreeContainer' className='flex flex-col justify-center items-center text-center lg:flex-row lg:text-left'>
        <div id='numberThreeContainer' className='pb-6 pr-8'>
            <p className='font-["Fraunces"] text-darkPurple text-xl font-semibold leading-9 text-center px-4 py-[5px] border-[1px] border-davyGrey rounded-full'>3</p>
        </div>
        <div id='cardThreeTextContainer'>
          <div id='cardThreeHeading' className='pb-8 lg:pb-4'>
              <h2 className='font-["Fraunces"] text-darkPurple text-[28px] leading-9 font-semibold text-center lg:text-left'>Always affordable</h2>
          </div>
          <div id='cardThreeDetails' className='mb-10 lg:max-w-[525px]'>
              <p className='font-["Manrope"] font-normal text-[16px] leading-7 text-davyGrey text-center lg:text-left'>Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.</p>
          </div>

        </div>
    </div>
  )
}

export default CardThree