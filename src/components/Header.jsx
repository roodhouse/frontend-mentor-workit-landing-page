import React from 'react';
import LogoLight from '../images/logo-light.svg'

function Header() {
  return (
    <div className='bg-darkPurple flex items-center justify-between pt-8 px-4 lg:px-10'>
        <div id='logoLight'>
            <img src={LogoLight} alt='workit logo' />
        </div>
        <div id='apply' className='text-white font-["Manrope"] font-bold text-[16px] leading-8 tracking-[-0.16px]'>
            <p className='underline decoration-eucaplyptus decoration-[3px] underline-offset-[9px]'>Apply for access</p>
        </div>
    </div>
  )
}

export default Header