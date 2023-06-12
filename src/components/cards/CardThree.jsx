import React from 'react'

function CardThree() {
  return (
    <div id='cardThreeContainer' className='flex flex-col justify-center items-center text-center lg:flex-row lg:text-left xl:flex-col xl:max-w-[335px]'>
        <div id='numberThreeContainer' className='pb-6 lg:pr-8 xl:pb-14'>
            <p className='w-[50px] h-[50px] font-["Fraunces"] text-darkPurple text-xl font-semibold leading-9 text-center px-4 py-[5px] border-[1px] border-davyGrey rounded-full xl:text-2xl xl:leading-10'>3</p>
        </div>
        <div id='cardThreeTextContainer'>
          <div id='cardThreeHeading' className='pb-8 lg:pb-4 xl:pb-7'>
              <h2 className='font-["Fraunces"] text-darkPurple text-[28px] leading-9 font-semibold text-center lg:text-left xl:text-[32px] xl:leading-10 xl:text-center'>Always affordable</h2>
          </div>
          <div id='cardThreeDetails' className='mb-10 lg:max-w-[525px]'>
              <p className='font-["Manrope"] font-normal text-[16px] leading-7 text-davyGrey text-center lg:text-left xl:text-center'>Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.</p>
          </div>

        </div>
    </div>
  )
}

export default CardThree