import React from 'react'

function CardTwo() {
  return (
    <div id='cardTwoContainer' className='flex flex-col justify-center items-center text-center lg:flex-row lg:text-left'>
        <div id='numberTwoContainer' className='pb-6 pr-8'>
            <p className='font-["Fraunces"] text-darkPurple text-xl font-semibold leading-9 text-center px-4 py-[5px] border-[1px] border-davyGrey rounded-full'>2</p>
        </div>
        <div id='cardTwoTextContainer'>
          <div id='cardTwoHeading' className='pb-8 lg:pb-4'>
              <h2 className='font-["Fraunces"] text-darkPurple text-[28px] leading-9 font-semibold text-center lg:text-left'>Data-driven decisions</h2>
          </div>
          <div id='cardTwoDetails' className='mb-10 lg:max-w-[525px]'>
              <p className='font-["Manrope"] font-normal text-[16px] leading-7 text-davyGrey text-center lg:text-left'>Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.</p>
          </div>

        </div>
    </div>
  )
}

export default CardTwo