import React from 'react'
import DarkLogo from '../images/logo-dark.svg'
import Facebook from '../images/icon-facebook.svg'
import Twitter from '../images/icon-twitter.svg'
import Instagram from '../images/icon-instagram.svg'

function Footer() {
  return (
    <div id='footerContainer' className='pt-[74px] flex flex-col justify-center items-center px-4 mb-16'>
        <div id='darkLogo' className='mb-[58px]'>
            <img src={DarkLogo} alt="the darker logo" />
        </div>
        <div id='socialMedia' className='flex flex-row justify-evenly w-full'>
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