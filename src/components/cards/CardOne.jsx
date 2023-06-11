import React from 'react'

function CardOne() {
  return (
    <div id='cardOneContainer' className='flex flex-col justify-center items-center text-center lg:flex-row lg:text-left'>
        <div id='numberOneContainer' className='pb-6 pr-8'>
            <p className='font-["Fraunces"] text-darkPurple text-xl font-semibold leading-9 text-center px-4 py-[5px] border-[1px] border-davyGrey rounded-full'>1</p>
        </div>
        <div id='cardOneTextContainer'>
          <div id='cardOneHeading' className='pb-8 lg:pb-4'>
              <h2 className='font-["Fraunces"] text-darkPurple text-[28px] leading-9 font-semibold text-center lg:text-left'>Actionable insights</h2>
          </div>
          <div id='cardOneDetails' className='mb-10 lg:max-w-[525px]'>
              <p className='font-["Manrope"] font-normal text-[16px] leading-7 text-davyGrey text-center lg:text-left'>Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.</p>
          </div>

        </div>
    </div>
  )
}

export default CardOne