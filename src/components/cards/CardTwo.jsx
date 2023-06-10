import React from 'react'

function CardTwo() {
  return (
    <div id='cardTwoContainer' className='flex flex-col justify-center items-center text-center'>
        <div id='numberTwoContainer' className='pb-6'>
            <p className='font-["Fraunces"] text-darkPurple text-xl font-semibold leading-9 text-center px-4 py-[5px] border-[1px] border-davyGrey rounded-full'>2</p>
        </div>
        <div id='cardTwoHeading' className='pb-8'>
            <h2 className='font-["Fraunces"] text-darkPurple text-xl leading-9 font-semibold text-center'>Data-driven decisions</h2>
        </div>
        <div id='cardTwoDetails' className='mb-10'>
            <p className='font-["Manrope"] font-normal text-[16px] leading-7 text-davyGrey text-center'>Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.</p>
        </div>
    </div>
  )
}

export default CardTwo