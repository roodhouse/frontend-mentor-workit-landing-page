import React from 'react';
import ProfilePic from '../images/image-founder.webp'
import PatternThree from '../images/bg-pattern-3.svg'

function Profile() {
  return (
    <div id='profileSection' className='pt-5 px-4 lg:px-10 xl:pl-[167px] xl:mb-[260px]'>
        <div id='profileImage' className='lg:w-72 lg:mb-[-65px] xl:w-[477px]'>
            <img src={ProfilePic} alt='the man' />
        </div>
        <div id='profileMeat' className='flex flex-col justify-center items-center text-center bg-darkPurple relative bottom-16 lg:w-[514px] lg:ml-[174px] lg:items-start lg:pl-8 xl:w-[730px] xl:absolute xl:top-[97rem] xl:h-[fit-content] xl:ml-[24rem]'>
        <div id='profileHeading' className='text-white p-8 font-["Fraunces"] text-[32px] leading-[48px] font-semibold lg:text-5xl lg:leading-[56px] lg:pb-6 lg:pl-0 xl:pt-16 xl:pb-8 xl:pl-16 xl:text-[56px] xl:leading-[64px]'>
            <h2>Be the first to test</h2>
        </div>
        <div id='profileDetails' className='text-white p-8 font-["Manrope"] text-base leading-7 text-center font-normal lg:pt-0 lg:pb-6 lg:pl-0 lg:max-w-[435px] xl:pl-16 xl:max-w-[655px] xl:pr-0 xl:text-[18px] xl:leading-8 xl:pb-8'>
            <p className='lg:text-left'>Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and I'll be in touch to schedule a call.</p>
        </div>
        <div id='profileButton' className='text-darkPurple mb-8 lg:mb-14 xl:pl-16 xl:mb-16'>
        <button className='text-darkPurple font-["Manrope"] border border-darkPurple font-bold text-base leading-8 text-center tracking-[-0.16px] bg-eucaplyptus px-6 py-3 xl:text-[18px] xl:hover:border-eucaplyptus xl:hover:bg-darkPurple xl:hover:text-eucaplyptus'>Apply for access</button>
        </div>
        </div>
        <div id='patternThree' className='hidden lg:block lg:absolute lg:top-[1728px] lg:left-[500px] xl:left-[1000px] xl:top-[1807px]'>
            <img src={PatternThree} alt="third pattern" />
        </div>
    </div>
  )
}

export default Profile