import React from 'react'
import DarkLogo from '../images/logo-dark.svg'
import Facebook from '../images/icon-facebook.svg'
import Twitter from '../images/icon-twitter.svg'
import Instagram from '../images/icon-instagram.svg'

function Footer() {
  return (
    <div id='footerContainer' className='pt-[74px] flex flex-col justify-center items-center px-4 mb-16 lg:pt-0'>
        <div id='darkLogo' className='mb-[58px] lg:flex lg:items-center lg:justify-center lg:max-w-[116px] lg:w-[116px]'>
            <img src={DarkLogo} alt="the darker logo" />
        </div>
        <div id='socialMedia' className='flex flex-row justify-evenly w-full lg:max-w-[116px] lg:justify-between'>
            <div id='facebook'>
                <img src={Facebook} alt="facebook" />
            </div>
            <div id='twitter'>
                <img src={Twitter} alt="twitter" />
            </div>
            <div id='instagram'>
                <img src={Instagram} alt="instagram" />
            </div>
        </div>
    </div>
  )
}

export default Footer