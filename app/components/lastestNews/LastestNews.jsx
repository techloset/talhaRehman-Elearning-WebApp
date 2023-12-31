import React from 'react'
import Image from 'next/image'
import LatestNewsBig from '../../../public/images/LatestNewsBig.svg'
import Link from 'next/link'
import news1 from '../../../public/images/NewsBlog1.svg'
import news2 from '../../../public/images/NewsBlog2.svg'
import news3 from '../../../public/images/NewsBlog3.svg'

function LastestNews() {
   const Cards=[
        {
            id:1,
            img:<Image src={news1} alt='news1' className='' />,
            btn:"PRESS RELEASE",
            h1:"Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
            h2:"Class Technologies Inc., the company that created Class,..."
        },
        {
            id:1,
            img:<Image src={news2} alt='news1'/>,
            btn:"NEWS",
            h1:"Zoom’s earliest investors are betting millions on a better Zoom for schools",
            h2:"Zoom was never created to be a consumer product. Nonetheless, the..."
        },
        {
            id:1,
            img:<Image src={news3} alt='news1'/>,
            btn:"NEWS",
            h1:"Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms",
            h2:"This year, investors have reaped big financial returns from betting on Zoom..."
        }
    ]
  return (
    <>
    <div className=" text-center mt-36 mx-auto xs:hidden   ">
        <p className="text-[#2F327D] text-4xl   font-bold py-5 font-nunito">
          Latest News and Resources
        </p>
        <p className="text-[#696984] text-2xl mt-5 font-nunito">
          See the developments that have occurred to TOTC in the world
        </p>
      </div>

      <div className="grid grid-cols-12 xl:py-5 2xl:pb-[115px] xl:gap-4 xl:mx-4 xs:hidden 2xl:ml-[12.5rem] lg:ml-[6rem] mt-24 flex-col lg:flex-row pb-[8rem] overflow-x-hidden font-poppins">
        <div class="col-span-12 xl:col-span-5 mx-auto xl:mx-0">
            <Image src={LatestNewsBig} alt='News'/>
            <div className='mt-4'>
            <button className="bg-[#49BBBD] text-white text-xl py-2 px-4 rounded-full w-1/4">
              NEWS
            </button>
            <h5 class="mb-2 text-[26px] font-medium text-[#252641] mt-5 leading-[180%] w-[90%] md:w-[70%] xl:w-[100%] 2xl:w-[38rem]">
              Class adds $30 million to its balance sheet for a Zoom-friendly
              edtech solution
            </h5>
            <p class="mb-4 text-xl text-neutral-600 mt-5 leading-[180%] 2xl:w-[35rem] xl:w-[101%] w-[68%]">
              Class, launched less than a year ago by Blackboard co-founder
              Michael Chasen, integrates exclusively...
            </p>
            <Link class="text-xl text-neutral-500 mt-7 underline" href="/blog">
              Read more
            </Link>
            </div>
         
        </div>

        <div className="cards col-span-12 xl:col-span-7 2xl:mt-0 mt-8 2xl:mx-8  md:mx-auto  ">

       {Cards.map((info,index)=>(<div className='flex gap-4 mb-5' key={index}>
                <div className='relative'> 
                   <div className='w-[280px] '> {info.img}</div>
                    <button className={'text-[#fff] text-[1.125rem] tracking-[0.02254rem] bg-[#49BBBD] rounded-[5rem] p-2 px-3 top-[70%] left-[70%] absolute flex justify-center items-center'} style={{ width: index === 0 ? '200px' : '100px' , left: index ===0 ? '25%' : '55%' }}>{info.btn}</button>
                
                </div>
                <div className='2xl:ml-[30px]'>
                    <h3 className='text-[#252641] text-[1.375rem] font-medium leading-[2.475rem] w-[95%] 2xl:w-[30rem]'>{info.h1}</h3>
                    <h4 className='mt-4 text-[#696984] text-[1.25rem] leading-[2.25rem] tracking-[0.025rem]  2xl:w-[29rem]'>{info.h2}</h4>
                </div>
            </div>))}
          
          
        
        </div>
      </div>
    </>
  )
}

export default LastestNews