"use client"
import React from 'react'
import Image from 'next/image'
import logo from '../../../public/images/logo.svg';
import profileLogo from '../../../public/images/profile.svg'
import arrowdown from '../../../public/images/arrow-down.svg'
import Link from 'next/link';
import { useState } from "react";

function Header() {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <nav className="xl:ml-[7.5rem]  lg:ml-14 pt-[1.87rem] pb-[2rem] lg:flex items-center justify-between hidden ">
        <div>
          <Link href='./'>    <Image src={logo} alt="logo" /></Link>
        </div>
        <div className="flex items-center">
          <ul className="text-[#5B5B5B] text-[1.375rem] flex  font-normal  tracking-[0.0275rem]">
            <Link href="./">  <li className="ml-20" >Home</li></Link>
            <Link href="./course"> <li className="ml-20" >Courses</li></Link>
            <Link href="./membership"><li className="ml-20" >Careers</li></Link>
            <Link href="./blog"> <li className="ml-20" >Blog</li></Link>
            <Link href="./blogDetails">   <li className="ml-20" >About Us</li></Link>
          </ul>
          <div className="flex items-center  ml-[4.31rem] xl:mr-[7.5rem] lg:ml-14 h-auto">
            <div className='w-[3.9375rem] h-[3.9375rem] rounded-full bg-[#D9D9D9]'><Image src={profileLogo} alt='Profile Pic' /></div>
            <p className='text-[#000] text-[1.125rem] font-medium leading-[0.0225rem] ml-[0.94rem] mr-[0.75rem]'>Lina</p>
            <div> <Image src={arrowdown} alt='down' /> </div>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Only */}
      <nav className="w-full bg-[#fff] lg:hidden">
        <div className="justify-between px-5 mx-auto xs:mt-[38px] lg:max-w-7xl lg:items-center lg:flex lg:px-8">
          <div>
            <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
              <div className="logo lg:col-span-3 my-auto sm:col-span-6">
                <Image src={logo} alt="Logo" />
              </div>
              <div className="lg:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="evenodd"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="evenodd">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6ZM2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12ZM3 17C2.44772 17 2 17.4477 2 18C2 18.5523 2.44772 19 3 19H21C21.5523 19 22 18.5523 22 18C22 17.4477 21.5523 17 21 17H3Z" fill="evenodd" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${navbar ? "block" : "hidden"
                }`}
            >
              <ul className="items-center justify-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
                <li className="text-gray-600 hover:text-blue-600">

                  Our team

                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  Tokens
                </li>
                <li className="text-gray-600 hover:text-blue-600">

                  Connect wallet

                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  Lightpaper </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header