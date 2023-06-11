import React from 'react';
import ProfilePic from '../images/image-founder.webp'

function Profile() {
  return (
    <div id='profileSection' className='pt-5 px-4 lg:px-10'>
        <div id='profileImage' className='lg:w-72 lg:mb-[-65px]'>
            <img src={ProfilePic} alt='the man' />
        </div>
        <div id='profileMeat' className='flex flex-col justify-center items-center text-center bg-darkPurple relative bottom-16 lg:w-[514px] lg:ml-[174px] lg:items-start lg:pl-8'>
        <div id='profileHeading' className='text-white p-8 font-["Fraunces"] text-[32px] leading-[48px] font-semibold lg:text-5xl lg:leading-[56px] lg:pb-6 lg:pl-0'>
            <h2>Be the first to test</h2>
        </div>
        <div id='profileDetails' className='text-white p-8 font-["Manrope"] text-base leading-7 text-center font-normal lg:pt-0 lg:pb-6 lg:pl-0'>
            <p className='lg:text-left'>Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and I'll be in touch to schedule a call.</p>
        </div>
        <div id='profileButton' className='text-darkPurple mb-8 lg:mb-14'>
        <button className='text-darkPurple font-["Manrope"] font-bold text-base leading-8 text-center tracking-[-0.16px] bg-eucaplyptus px-6 py-3'>Apply for access</button>
        </div>
        </div>
    </div>
  )
}

export default Profile