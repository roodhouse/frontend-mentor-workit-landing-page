import React from 'react'
import CardOne from './cards/CardOne'
import CardTwo from './cards/CardTwo'
import CardThree from './cards/CardThree'

function Cards() {
  return (
    <div id='cardContainer' className='bg-ghostWhite flex flex-col items-center justify-center px-4 lg:px-24 xl:flex-row xl:px-[165px] xl:justify-evenly xl:items-start'>
        <CardOne />
        <CardTwo />
        <CardThree />
    </div>
  )
}

export default Cards