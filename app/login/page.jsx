import React from 'react'
import Image from 'next/image'
import hidePass from '../../public/images/invisible1.svg';
import Link from 'next/link';

function page() {
  return (
   <>
   <div className='mt-[2.38rem] ml-[2.56rem] flex gap-[6.94rem] mr-[6.94rem]'>
        <div className='loginPage w-[46.0625rem]'>
            <h2 className='pt-[41.94rem] pl-[4.31rem] text-[#fff] text-[2.3125rem] font-bold'>Lorem Ipsum is simply </h2>
            <p className='pl-[4.31rem] mt-1 text-[#fff] text-[1.5625rem] pb-[4rem] '>Lorem Ipsum is simply </p>
        </div>
        <div>
            <h2 className='text-[#000000] text-[1rem] text-center mt-28 '>Welcome to lorem..!</h2>
            <div className='text-center rounded-[2.0625rem] mt-[1.5rem] w-[20.5625rem] h-[3.6875rem] flex justify-center items-center mx-auto bg-[rgba(73,187,189,0.60);]'><Link href="/login"> <button className='bg-[#49BBBD] rounded-[2.0625rem] w-[9.125rem] h-[2.5rem] text-[1rem] text-[#fff] font-medium' >Login</button></Link> <Link href="./login/register"><button className='rounded-[2.0625rem] w-[9.125rem] h-[2.5rem] text-[1rem] text-[#fff]'>Register</button></Link></div>
            <p className='mt-[3.25rem] text-[#5B5B5B] text-[1rem] w-[28.375rem] pl-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <form action="" className='mt-[2.63rem] pl-6 flex flex-col'>
                <label htmlFor="userName" className='text-base text-[#000000]'>User name</label>
                <input type="text" id='userName' placeholder='Enter your User name' className='mt-[0.75rem] bg-[#fff] rounded-[2.5rem] border border-[#49BBBD] active:border-[#49BBBD] pl-[1.94rem] pb-[1rem] pt-[0.94rem] text-[#ACACAC] text-[0.9375rem] font-light' />
                <label htmlFor="userPass" className='text-base text-[#000000] mt-[1.87rem]'>Password</label>
                <input type="password" id='userPass' placeholder='Enter your User name' className='mt-[0.75rem] bg-[#fff] rounded-[2.5rem] border border-[#49BBBD] active:border-[#49BBBD] pl-[1.94rem] pb-[1rem] pt-[0.94rem] text-[#ACACAC] text-[0.9375rem] font-light' />
                <Image  src={hidePass} alt='Passworrd hide' className='relative left-[90%] -top-9' />
                <div className='flex justify-between mt-[1.37rem]'>
                    <div className='flex items-center gap-1'>
                        <input type="checkbox" id='Remember' />
                        <label htmlFor="Remember" className='text-[0.75rem] font-light text-[#000] '> Rememebr me</label>
                    </div>
                    <div>
                        <p className='text-[#000] text-[0.75rem] font-light'>Forgot Password ?</p>
                    </div>
                </div>
                <button className='text-[#FFFFFF] text-base w-[14.5rem] h-[3.0625rem] mt-[3.8rem] ml-[46%] rounded-[2.5rem] bg-[#49BBBD]'>Login</button>
            </form>

        </div>
   </div>
   </>
  )
}

export default page