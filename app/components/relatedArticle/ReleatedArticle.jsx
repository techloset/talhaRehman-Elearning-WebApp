import React from 'react'
import Image from 'next/image'
import blogMain from "../../../public/images/BlogArticle.svg"
import profileLogo from '../../../public/images/profile.svg'
import eye from '../../../public/images/blogeye.svg'

function ReleatedArticle() {
  return (
    <>
      <div className='bg-[#9DCCFF]/[0.2] pb-[11.8rem] xl:px-5 2xl:px-0'>
                <div className='flex justify-between 2xl:ml-[7.5rem]  pt-[5.81rem] mr-[9.31rem]'>
                    <h2 className='text-[#000000] text-[1.875rem] font-medium tracking-[0.0375rem]'>Related Blog </h2>
                    <p className='text-[#49BBBD] text-[1.25rem] font-bold'>See all</p>
                </div>
                <div className='mt-[2.56rem] 2xl:ml-[7.25rem] xl:gap-[6.19rem] lg:gap-9 flex flex-wrap lg:flex-nowrap'>
                    <div className='bg-[#FFFFFF] rounded-[1.25rem] shadow-[0px 18.83px 47.08px 0px rgb(47, 50, 125)] pt-[3.75rem] pb-[4.01rem] px-[2.1rem] 2xl:w-[49.125rem] xl:w-[37rem] w-[30rem] xs:w-[20rem] flex flex-col'>
                        <Image src={blogMain} alt='Teacher' />
                        <h3 className='text-[#252641] text-[1.625rem] font-medium leading-[2.925rem] 2xl:w-[38rem] w-[90%] mt-[0.77rem]'>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h3>
                        <div className='flex items-center mt-[0.98rem]'> <div className='w-[4.4275rem] h-[4.4275rem] rounded-full bg-[#D9D9D9] flex items-end'><Image src={profileLogo} alt='Profile Pic' /></div>
                            <p className='text-[#000] text-[1.125rem] font-medium leading-[0.0225rem]  ml-[1.05rem]'>Lina</p></div>
                        <p className='mt-[1.48rem] text-[#696984] text-[1.25rem] leading-[2.25rem] 2xl:w-[39rem] w-[90%]'>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                        <div className='flex justify-between mt-[2.81rem]'><button className='text-[#696984] text-[1.25rem] leading-[2.25rem] underline tracking-[0.025rem]'>Read more</button> <div className='flex items-center gap-6'> <Image  src={eye} alt='eyes' /> 251,232</div></div>
                    </div>

                    <div className='bg-[#FFFFFF] rounded-[1.25rem] shadow-[0px 18.83px 47.08px 0px rgb(47, 50, 125)] pt-[3.75rem] pb-[4.01rem] px-[2.1rem] 2xl:w-[49.125rem] xl:w-[37rem] w-[30rem] xs:w-[20rem] flex flex-col'>
                        <Image src={blogMain} alt='Teacher' />
                        <h3 className='text-[#252641] text-[1.625rem] font-medium leading-[2.925rem] 2xl:w-[38rem] w-[90%] mt-[0.77rem]'>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h3>
                        <div className='flex items-center mt-[0.98rem]'> <div className='w-[4.4275rem] h-[4.4275rem] rounded-full bg-[#D9D9D9] flex items-end'><Image src={profileLogo} alt='Profile Pic' /></div>
                            <p className='text-[#000] text-[1.125rem] font-medium leading-[0.0225rem]  ml-[1.05rem]'>Lina</p></div>
                        <p className='mt-[1.48rem] text-[#696984] text-[1.25rem] leading-[2.25rem] 2xl:w-[39rem] w-[90%]'>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                        <div className='flex justify-between mt-[2.81rem]'><button className='text-[#696984] text-[1.25rem] leading-[2.25rem] underline tracking-[0.025rem]'>Read more</button> <div className='flex items-center gap-6'> <Image  src={eye} alt='eyes' /> 251,232</div></div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default ReleatedArticle