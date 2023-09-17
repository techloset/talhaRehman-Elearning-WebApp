"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/images/mainLogo.svg';
import logo1 from '../../../public/images/logo.svg';
import watch from '../../../public/images/watch.svg';
import headerPromotion from '../../../public/images/headerPromotion.svg';
import teengergirl from '../../../public/images/teengerGirl.svg';
import { useState } from "react";


function HomeHeader() {
    const [navbar, setNavbar] = useState(false);
  return (
   <>
   <header className="header-bg  overflow-x-hidden">
        <nav className="2xl:ml-[7.56rem] lg:ml-16 pt-[1.88rem] items-center justify-between xl:flex hidden ">
          <div>
          <Link href="./"> <Image src={logo} alt="logo" width={100} height={100} /></Link>
          </div>
          <div className="flex items-center">
            <ul className="text-[#fff] text-[1.375rem] flex  font-normal  tracking-[0.0275rem]">
          <Link href="./"><li className="ml-20" >Home</li></Link>
          <Link href="./course">    <li className="ml-20" >Courses</li></Link>
          <Link href="./membership">  <li className="ml-20" >Careers</li></Link>  
            <Link href="./blog">  <li className="ml-20" >Blog</li></Link>
              <li className="ml-20" >About Us</li>
            </ul>
            <div className="flex items-center  ml-[5.06rem] 2xl:mr-[8.375rem] lg:mr-12 h-auto">
            <Link href="./login"><button className="text-[#5B5B5B] text-[1.375rem] font-medium tracking-[0.0275rem] w-40 h-[3.75rem] rounded-[5rem] shadow-[0px 20px 24px 0px rgba(0, 0, 0, 0.03)] bg-[#fff]">Login</button></Link>
             <Link href="./login/register"> <button className="text-[#FFFFFF] text-[1.375rem] font-medium tracking-[0.0275rem] w-40 h-[3.75rem] rounded-[5rem] shadow-[0px 20px 24px 0px rgba(0, 0, 0, 0.03)] bg-[rgba(255,255,255,0.30)] ml-[1.63rem]">Sign Up</button></Link>
            </div>
          </div>
        </nav>
        {/* mobile */}
         {/* Mobile Nav Only */}
         <nav className="w-full bg-[#fff] xl:hidden">
        <div className="justify-between px-5 mx-auto xs:mt-[38px] xl:max-w-7xl xl:items-center xl:flex xl:px-8">
          <div>
            <div className="flex items-center justify-between py-3 lg:py-5 xl:block">
              <div className="logo xl:col-span-3 my-auto sm:col-span-6">
                <Image src={logo1} alt="Logo" />
              </div>
              <div className="xl:hidden">
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
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6ZM2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12ZM3 17C2.44772 17 2 17.4477 2 18C2 18.5523 2.44772 19 3 19H21C21.5523 19 22 18.5523 22 18C22 17.4477 21.5523 17 21 17H3Z" fill="evenodd"/>
                  </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 xl:block lg:pb-0 lg:mt-0 ${navbar ? "block" : "hidden"
                }`}
            >
              <ul className="items-center justify-center space-y-8 xl:flex xl:space-x-6 xl:space-y-0">
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
        <main className="xl:pt-[15.06rem] pt-[7rem] 2xl:ml-[8.75rem] lg:ml-20 grid xl:grid-cols-2 grid-cols-1 justify-center pb-[23.69rem] ">
          <div>
            <h1 className="font-bold text-[3.375rem] leading-normal text-[#fff] w-[42.5625rem]"><span className="text-[#F48C06]">Studying</span> Online is now much easier</h1>
            <p className="text-[#fff] text-2xl font-normal leading-[2.4rem] w-[32.6875rem] mt-[2.12rem]">TOTC is an interesting platform that will teach you in more an interactive way</p>
            <div className="mt-[3.25rem] flex">
              <button className="text-[#FFFFFF] text-[1.5rem] font-semibold leading-normal w-[13.75rem] h-[5rem] rounded-[5rem] shadow-[0px 20px 24px 0px rgba(0, 0, 0, 0.03)] bg-[rgba(255,255,255,0.30)] ">Join for free</button>
              <div className="flex items-center -mt-10 -ml-8 ">
                <Image src={watch} alt="Watch How it work " className="" />
                <p className="text-[#252641] text-2xl leading-normal font-normal -ml-7 -mt-8 ">Watch how it works</p>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center">
            <Image src={headerPromotion} alt="Promotion" className="absolute top-0 xl:-left-24 z-10"/>
            <Image src={teengergirl} alt="Promotion" className="absolute z-0 -top-[10.5rem] overflow-y-hidden"/>

          </div>
        </main>
      </header>
   </>
  )
}

export default HomeHeader