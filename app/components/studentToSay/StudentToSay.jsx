import React from 'react'
import Image from 'next/image'
import girl from '../../../public/images/membershipGirl.svg'
import left from '../../../public/images/membershipLeft.svg'
import right from '../../../public/images/membershipRight.svg'

function StudentToSay() {
  return (
    <>
    <div className='bg-[#9DCCFF]/[0.2] xl:pl-[8rem] pl-[3rem] xs:pl-[1rem] pb-[15rem] mt-28 '>
        <h2 className='pt-[5rem] text-[2.25rem] text-[#2D3436] xs:w-[95%] pb-[50px]'>What our students have to say</h2>
        <div className='relative flex flex-wrap xl:justify-normal sm:justify-center gap-7'>
          <button className='bg-[#49BBBD] rounded-full w-[3.125rem] h-[3.125rem] hidden 2xl:flex justify-center items-center absolute top-[50%] -translate-x-[50%] -translate-y-[50%] '><Image src={left} alt='left'/> </button>
          <div className='xs:mx-auto xs:mt-10'>
            <div className='bg-[#fff] w-[24rem] xs:w-[19rem]  h-[24.68rem] rounded-[1.25rem] flex flex-col  items-center'>
              <div className='mt-[2.19rem]'><Image src={girl} alt='girl'/></div>
              <h2 className='text-[#2D3436] text-[1.5rem] font-semibold mt-5'>Bulkin Simons</h2>
              <h3 className='mt-[1.4rem] text-[#696984] text-[1.125rem] w-[18.5625rem] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</h3>
            </div>
          </div>
          <div className='xs:mx-auto xs:mt-10'>
            <div className='bg-[#fff] w-[24rem] xs:w-[19rem] h-[24.68rem] rounded-[1.25rem] flex flex-col  items-center'>
              <div className='mt-[2.19rem]'><Image src={girl} alt='girl'/></div>
              <h2 className='text-[#2D3436] text-[1.5rem] font-semibold mt-5'>Bulkin Simons</h2>
              <h3 className='mt-[1.4rem] text-[#696984] text-[1.125rem] w-[18.5625rem] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</h3>
            </div>
          </div>
          <div className='xs:mx-auto xs:mt-10'>
            <div className='bg-[#fff] w-[24rem]  xs:w-[19rem] h-[24.68rem] rounded-[1.25rem] flex flex-col  items-center'>
              <div className='mt-[2.19rem]'><Image src={girl} alt='girl'/></div>
              <h2 className='text-[#2D3436] text-[1.5rem] font-semibold mt-5'>Bulkin Simons</h2>
              <h3 className='mt-[1.4rem] text-[#696984] text-[1.125rem] w-[18.5625rem] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</h3>
            </div>
          </div>
          <div className='xs:mx-auto xs:mt-10'>
            <div className='bg-[#fff] w-[24rem]  xs:w-[19rem] h-[24.68rem] rounded-[1.25rem] flex flex-col  items-center'>
              <div className='mt-[2.19rem]'><Image src={girl} alt='girl'/></div>
              <h2 className='text-[#2D3436] text-[1.5rem] font-semibold mt-5'>Bulkin Simons</h2>
              <h3 className='mt-[1.4rem] text-[#696984] text-[1.125rem] w-[18.5625rem] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</h3>
            </div>
          </div>
          <button className='bg-[#49BBBD] rounded-full w-[3.125rem] h-[3.125rem] hidden 2xl:flex justify-center items-center absolute top-[50%] left-[90%] -translate-x-[50%] -translate-y-[50%] '><Image src={right} alt='right'/> </button>
        </div>
    </div>
    </>
  )
}

export default StudentToSay