import React from 'react'
import CardOne from './cards/CardOne'
import CardTwo from './cards/CardTwo'
import CardThree from './cards/CardThree'

function Cards() {
  return (
    <div id='cardContainer' className='bg-ghostWhite pt-16 flex flex-col items-center justify-center px-4'>
        <CardOne />
        <CardTwo />
        <CardThree />
    </div>
  )
}

export default Cards