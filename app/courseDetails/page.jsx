import React from 'react'
import Header from '../components/header/Header'
import Image from 'next/image'
import blogDetailMain from '@/public/images/BlogDetailsMain.svg'
import Overview from '../components/overview/Overview'
import Cards from '../components/cards/Cards'
import classRoom from "@/public/images/classRoomVideo.svg"
import ellipse1 from "@/public/images/Ellipse12.svg"
import ellipse2 from "@/public/images/Ellipse13.svg"
import Education from '../components/education/Education'




function page() {
  return (
    <>
    {/* Header */}
    <Header/>
    {/* main section */}
    <div>
        <Image src={blogDetailMain} alt="Background Image for class" />
    </div>
    {/*  */}
    <Overview/>
    <div className='bg-[#9DCCFF]/[0.2]'>
      <div className='flex justify-between items-center ml-[7.5rem] pt-[6.3rem] mr-[8.9rem]'>
        <h2 className='text-[#000000] text-[1.875rem] font-medium tracking-[0.0375rem]'>Marketing Articles</h2>
        <h3 className='text-[#49BBBD] text-[1.25rem] font-bold '>See all</h3>
      </div>
      <Cards/>
    </div>

      {/* Everthing Physical ClassRoom */}
      <div className='2xl:ml-[13.19rem] xs:mx-3 xl:ml-20 mt-[10rem] grid xl:grid-cols-2 grid-cols-1  justify-center overflow-x-hidden overflow-y-hidden'>
            <div className='relative lg:left-[20%] mx-auto xl:mx-0 xl:left-0'>
                <Image src={ellipse1} alt="green circle" className='absolute top-10 -left-6 -z-10' />
                <Image src={ellipse2} alt="green circle" className='absolute top-[59%] left-[71%] -z-10' />
                <h2 className='text-[#2F327D] text-[2.25rem] font-medium leading-[3.6rem] mt-14 w-[40rem] xs:w-[89%] '>Everything you can do in a physical classroom,<span className='text-[#00CBB8]'> you can do with TOTC</span></h2>
                <p className='mt-[1.88rem] w-[40.6rem] xs:w-[85%] text-[#696984] text-[1.5rem] leading-[2.7rem] tracking-[0.03rem]'>TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
                <button className='underline text-[#696984] text-[1.375rem] leading-[2.475rem] mt-[1.87rem]'>Learn more</button>
            </div>
            <div className='relative mt-10 xl:mt-0 lg:left-[20%] mx-auto xl:mx-0 xl:left-0'>
                <div className='w-[8.625rem] h-[8.625rem] rounded-[1.25rem] bg-[#23BDEE] absolute -z-10 -left-2 -top-2'> </div>
                <div className='w-[14.4375rem] h-[14.4375rem] rounded-[1.25rem] bg-[#33EFA0] absolute -z-10 left-[30.6rem] top-[15.6rem]'> </div>
                <Image src={classRoom} alt="Class Video"/>
            </div>
        </div>

        {/* Top Education*/}
        <Education/>
    </>
  )
}

export default page