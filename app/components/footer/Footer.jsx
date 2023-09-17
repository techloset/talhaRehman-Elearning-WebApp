import React from 'react'
import Image from 'next/image'
import footerLogo from '../../../public/images/FooterLogo.svg'

function Footer() {
  return (
    <>
        <div className=' bg-[#252641] flex flex-col items-center '>
            <div className='flex mt-[4.62rem] items-center'>
                <div> <Image src={footerLogo} alt="logo"/> </div>
                <hr className='w-20 bg-[#626381] border-[#626381]  rotate-90 ' />
                <h2 className='text-[#fff] text-[1.375rem] leading-normal tracking-[0.055rem] font-semibold'>Virtual Class for Zoom</h2>
            </div>
            <div className='mt-[6.44rem] '>
                <p className='text-center text-[#B2B3CF] text-[1.625rem] font-medium tracking-[0.065rem]'>Subscribe to get our Newsletter</p>
                <form action="" className='mt-[1.25rem] xs:flex xs:flex-wrap xs:justify-center'>
                    <input type="email" className='w-[25rem] xs:w-[15rem] h-[3.75rem] rounded-[5rem] border-[#83839A] border bg-transparent text-[1.25rem]  tracking-[0.05rem] py-[0.94rem] px-[1.87rem] ' placeholder='Your Email' />
                    <button className='text-[#fff] text-[1.375rem] xs:mt-7 font-medium bg-[#49BBBD] rounded-[3.75rem] w-[11.1875rem] h-[3.75rem] ml-[1.25rem]'>Subscribe</button>
                </form>
            </div>
            <div className='mt-[6rem]'>
                <ul className='flex xs:flex-wrap xs:justify-center items-center'>
                    <li className='text-[#B2B3CF] text-[1.375rem] tracking-[0.055rem] mr-5'>Careers</li>
                    <hr className='w-5 bg-[#626381] border-[#626381]  rotate-90 mr-5 ' />
                    <li className='text-[#B2B3CF] text-[1.375rem] tracking-[0.055rem] mr-5'>Privacy Policy</li>
                    <hr className='w-5 bg-[#626381] border-[#626381]  rotate-90 mr-5 ' />
                    <li className='text-[#B2B3CF] text-[1.375rem] tracking-[0.055rem] mr-5'>Terms & Conditions</li>
                </ul>
                <p className='text-[#B2B3CF] text-[1.375rem] tracking-[0.055rem] mt-[1.25rem] mb-[2.5rem] text-center'>© 2021 Class Technologies Inc. </p>
            </div>
        </div>    
    </>
  )
}

export default Footer