import React from 'react'
import Image from 'next/image'
import classRoom from "../../../public/images/classRoomVideo.svg"
import ellipse1 from "../../../public/images/Ellipse12.svg"
import ellipse2 from "../../../public/images/Ellipse13.svg"

function Totc() {
  return (
   <>
    <div className='mt-[19rem] '>
        <h2 className='text-[#2F327D] text-[2.75rem] font-semibold leading-[4.95rem] text-center'>What is <span className='text-[#00CBB8]'> TOTC?</span> </h2>
        <p className='w-[60.8125rem] text-[#696984] text-[1.5rem] tracking-[0.03rem] leading-[2.7rem] mx-auto text-center mt-[1.25rem]'> TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
        <div className='ml-[19.38rem] mt-[4.81rem] flex gap-[6.25rem]'>
            <div className='totc1 w-[37.5rem] h-[25.1875rem] flex flex-col items-center justify-center fill-[rgba(23, 27, 65, 0.50] stroke-1 stroke-black opacity-80 ' >
                <h1 className='text-[#fff] text-[2rem] font-semibold  '>FOR INSTRUCTORS</h1>
                <button className='text-[#fff] text-center text-[1.375rem] font-medium w-[17.6875rem] h-[5rem] rounded-[5rem] border border-[#fff] mt-[1.06rem]'>Start a class today</button>
            </div>
            <div className='totc2 w-[37.5rem] h-[25.1875rem] flex flex-col items-center justify-center fill-[rgba(23, 27, 65, 0.50] stroke-1 stroke-black opacity-80 ' >
                <h1 className='text-[#fff] text-[2rem] font-semibold  '>FOR STUDENTS</h1>
                <button className='text-[#fff] text-center text-[1.375rem] font-medium w-[17.6875rem] h-[5rem] rounded-[5rem] border mt-[1.06rem] bg-[#23BDEEE5]'>Enter access code</button>
            </div>
        </div>

        {/* Everthing Physical ClassRoom */}
        <div className='ml-[13.19rem] mt-[10rem] grid grid-cols-2'>
            <div className='relative'>
                <Image src={ellipse1} alt="green circle" className='absolute top-10 -left-6 -z-10' />
                <Image src={ellipse2} alt="green circle" className='absolute top-[59%] left-[71%] -z-10' />
                <h2 className='text-[#2F327D] text-[2.25rem] font-medium leading-[3.6rem] mt-14 w-[40rem] '>Everything you can do in a physical classroom,<span className='text-[#00CBB8]'> you can do with TOTC</span></h2>
                <p className='mt-[1.88rem] w-[40.6rem] text-[#696984] text-[1.5rem] leading-[2.7rem] tracking-[0.03rem]'>TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
                <button className='underline text-[#696984] text-[1.375rem] leading-[2.475rem] mt-[1.87rem]'>Learn more</button>
            </div>
            <div className='relative'>
                <div className='w-[8.625rem] h-[8.625rem] rounded-[1.25rem] bg-[#23BDEE] absolute -z-10 -left-2 -top-2'> </div>
                <div className='w-[14.4375rem] h-[14.4375rem] rounded-[1.25rem] bg-[#33EFA0] absolute -z-10 left-[30.6rem] top-[15.6rem]'> </div>
                <Image src={classRoom} alt="Class Video"/>
            </div>
        </div>
    </div>
   </>
  )
}

export default Totc