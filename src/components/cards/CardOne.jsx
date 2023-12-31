import React from 'react'

function CardOne() {
  return (
    <div id='cardOneContainer' className='flex flex-col justify-center items-center text-center lg:flex-row lg:text-left xl:flex-col xl:max-w-[335px]'>
        <div id='numberOneContainer' className='pb-6 lg:pr-8 xl:pb-14'>
            <p className='w-[50px] h-[50px] font-["Fraunces"] text-darkPurple text-xl font-semibold leading-9 text-center px-4 py-[5px] border-[1px] border-davyGrey rounded-full xl:text-2xl xl:leading-10'>1</p>
        </div>
        <div id='cardOneTextContainer'>
          <div id='cardOneHeading' className='pb-8 lg:pb-4 xl:pb-7'>
              <h2 className='font-["Fraunces"] text-darkPurple text-[28px] leading-9 font-semibold text-center lg:text-left xl:text-[32px] xl:leading-10 xl:text-center'>Actionable insights</h2>
          </div>
          <div id='cardOneDetails' className='mb-10 lg:max-w-[525px]'>
              <p className='font-["Manrope"] font-normal text-[16px] leading-7 text-davyGrey text-center lg:text-left xl:text-center'>Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.</p>
          </div>

        </div>
    </div>
  )
}

export default CardOne