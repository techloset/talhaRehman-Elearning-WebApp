import React from 'react'
import Image from 'next/image'
import logo from '../../../public/images/logo.svg';
import profileLogo from '../../../public/images/profile.svg'
import arrowdown from '../../../public/images/arrow-down.svg'
import Link from 'next/link';

function Header() {
  return (
    <>
        <nav className="ml-[7.5rem] pt-[1.87rem] pb-[2rem] flex items-center justify-between ">
          <div>
            <Image src={logo} alt="logo" width={100} height={100} />
          </div>
          <div className="flex items-center">
            <ul className="text-[#5B5B5B] text-[1.375rem] flex  font-normal  tracking-[0.0275rem]">
              <li className="ml-20" >Home</li>
              <li className="ml-20" >Courses</li>
              <li className="ml-20" >Careers</li>
              <li className="ml-20" >Blog</li>
              <li className="ml-20" >About Us</li>
            </ul>
            <div className="flex items-center  ml-[4.31rem] mr-[7.5rem] h-auto">
                  <div className='w-[3.9375rem] h-[3.9375rem] rounded-full bg-[#D9D9D9]'><Image src={profileLogo} alt='Profile Pic'/></div>
                  <p className='text-[#000] text-[1.125rem] font-medium leading-[0.0225rem] ml-[0.94rem] mr-[0.75rem]'>Lina</p>
                  <div> <Image src={arrowdown} alt='down'/> </div>
            </div>
          </div>
        </nav>
    </>
  )
}

export default Header