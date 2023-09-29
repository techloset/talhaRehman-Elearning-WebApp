import React from 'react'
import Image from 'next/image'
import article1 from '../../../public/images/article1.svg'
import article2 from '../../../public/images/article2.svg'
import artivleblock from '../../../public/images/articleblock.svg'
import articletime from '../../../public/images/articletime.svg'
import profilemini from '../../../public/images/articleBlog.svg'
function Cards() {
    const marketArticle=[
        {
            id:1,
            mainImg:article1

        },
        {
            id:2,
            mainImg:article2      
          },
        {
            id:3,
            mainImg:article1     
           },
        {
            id:4,
            mainImg:article2     
          }
    ]
  return (
    <>
       <div className='md:ml-[7.5rem] 2xl:ml-[139px] xs:ml-2 justify-center 2xl:justify-normal mt-[3.13rem]  flex flex-wrap  gap-[3.12rem]'>
               {marketArticle.map((info)=>(  <div className='bg-[#fff] flex  flex-col articleShadow w-[23.375rem] xs:w-[20rem] '>
               <Image src={info.mainImg}  alt='article img' className='mt-[1.25rem] sm:ml-[1.31rem] xs:ml-6 sm:mr-[1.13rem] xs:w-[18rem]'/>
                        <div className='flex justify-between items-center mt-[1.31rem] ml-[1.69rem]'>
                            <div className='flex items-center '>
                                <Image src={artivleblock} alt='block'/>
                                <p className='text-[#696984] text-[0.875rem] font-medium leading-[1.575rem] tracking-[0.0175rem] ml-2'>Design</p>
                            </div>
                            <div className='flex items-center mr-[1.19rem]'>
                                <Image src={articletime} alt='time'/>
                                <p className='text-[#696984] text-[0.875rem] font-medium leading-[1.575rem] tracking-[0.0175rem] ml-2'>3 Months</p>
                            </div>
                        </div>
                        <h2 className='text-[#252641] text-[1.5rem] font-medium ml-[1.69rem] mt-[1.25rem]'>AWS Certified solutions Architect</h2>
                        <p className='ml-[1.69rem] w-[20rem] text-[#696984] text-[1.125rem] font-normal leading-[2.025rem] tracking-[0.0225rem] mt-[1.31rem]'>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                        <div className='flex justify-between ml-[1.69rem] mt-[1.06rem] pb-[2.19rem]'>
                                <div className='flex items-center'>
                                    <div className='w-[2.77rem] h-[2.76559rem] rounded-full flex justify-center items-end bg-[#D9D9D9]'>
                                    <Image src={profilemini} alt='mini profile'/>
                                    </div>
                                    <p className='ml-[1.11rem] text-[1.125rem] font-medium tracking-[0.0225rem]'>Lina</p>
                                </div>    
                            <div className='flex items-center mr-[2.37rem]'>
                                <span className='text-[1.125rem] italic font-light tracking-[0.0225rem] line-through text-[black]/[0.50]'>$100</span>
                                <h3 className='text-[#49BBBD] text-[1.5rem] font-bold leading-normal tracking-[0.03rem] ml-[0.88rem]'>$80</h3>
                            </div>
                        </div>
                    </div>))}
                </div>
    </>
  )
}

export default Cards