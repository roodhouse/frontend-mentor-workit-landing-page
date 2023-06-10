import React from 'react'

function BorderTriangleTwo() {
  return (
    <div id='borderContainer' className='w-[100%] bg-white flex flex-col items-center justify-center'>
        <svg id='borderTriangle' xmlns='http://www.w3.org/2000/svg' version='1.1' width='100%' height='80' viewBox='0 0 100 102' preserveAspectRatio='none'>
            <path className='stroke-ghostWhite fill-ghostWhite' d='M0 0 L50 50 L100 0 Z'></path>
        </svg>
    </div>
  )
}

export default BorderTriangleTwo