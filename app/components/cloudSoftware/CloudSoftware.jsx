import React from 'react'
import cloud1 from '../../../public/images/cloudSoftware1.svg'
import cloud2 from '../../../public/images/cloudSoftware2.svg'
import cloud3 from '../../../public/images/cloudSoftware3.svg'
import Image from 'next/image'

function CloudSoftware() {
    const Cards = [
        {
            Id:1,
            mainImg:<Image src={cloud1} alt='cloud 1' />,
            heading:"Online Billing, Invoicing, & Contracts",
            paragraph:"Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts"
        },
        {
            Id:2,
            mainImg:<Image src={cloud2} alt='cloud 1' />,
            heading:"Easy Scheduling & Attendance Tracking",
            paragraph:"Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance"
        },
        {
            Id:3,
            mainImg:<Image src={cloud3} alt='cloud 1' />,
            heading:"Customer Tracking",
            paragraph:"Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization "
        }
    ]
  return (
   <>
   <div className='mt-[8.19rem]'>
    <h1 className='text-[2.25rem] font-bold leading-[4.05rem] text-[#2F327D] text-center'>All-In-One <span className='text-[#00CBB8]'>Cloud Software.</span> </h1>
    <p className='text-[#696984] text-[1.5rem] font-normal leading-[2.7rem] text-center xl:w-[52.3125rem] mx-10 xl:mx-auto mt-[1.25rem]'>TOTC is one powerful online software suite that combines all the tools needed to run a successful school or office.</p>
    <div className='2xl:ml-[14.06rem] 2xl:justify-normal mt-[2.44rem] flex flex-wrap xl:flex-nowrap justify-center gap-[3.75rem] '>
        {Cards.map((info,index)=>(
        <div className='bg-[#fff] card relative  top-32  xs:w-[90%] xs:h-auto w-[28.125rem] h-[26.875rem]'>
            <div className='flex justify-center absolute sm:left-[30%] xs:left-[22%] -top-20'>{info.mainImg}</div>
            <h2 className={`text-[#2F327D] text-center text-[1.875rem] font-medium leading-normal w-[20.3125rem] xs:w-[85%] mx-auto pt-[7.62rem] ${index === 2 ? 'mt-[2rem] mb-12' : 'mt-[1rem]'}`}>{info.heading}</h2>
            <p className={`text-[#696984] text-center text-[1.25rem] font-normal leading-[2.25rem] w-[22rem] xs:w-[85%] mx-auto mt-[1.5rem] ${index === 2 ? 'w-[20rem]' : ''}`}>{info.paragraph}</p>
        </div>
        ))}
    </div>
   </div>
   </>
  )
}

export default CloudSoftware