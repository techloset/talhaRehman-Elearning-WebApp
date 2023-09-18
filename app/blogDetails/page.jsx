import React from 'react'
import Header from '../components/header/Header'
import Image from 'next/image'
import blogDetailMain from '@/public/images/BlogDetailsMain.svg'
import detailsprofile from '@/public/images/blogDetailsProfile.svg'
import ReleatedArticle from '../components/relatedArticle/ReleatedArticle';
import Footer from '../components/footer/Footer';

function page() {
  return (
  <>
    {/* Header */}
    <Header/>
    {/* Blog Details */}
    <div>
        <Image src={blogDetailMain} alt="Background Image for class"  />
    </div>
    <div className='2xl:ml-[7.25rem] xl:ml-[5rem] lg:ml-[3rem] ml-[2.5rem] xs:ml-2 mt-[5rem]'>
        <h2 className='text-[#2F327D] text-[2.75rem] font-semibold leading-[4.95rem] '>Why Swift UI Should Be on the Radar of Every Mobile Developer</h2>
        <p className='text-[#696984] text-[1.5rem] leading-[2.7rem] tracking-[0.03rem] max-w-[95rem]'>TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
        <p className='text-[#696984] text-[1.5rem] leading-[2.7rem] tracking-[0.03rem] max-w-[87.5rem] mt-[1.88rem]'>TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
        <p className='text-[#696984] text-[1.5rem] leading-[2.7rem] tracking-[0.03rem] max-w-[87.5rem]'>TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
        <p className='text-[#696984] text-[1.5rem] leading-[2.7rem] tracking-[0.03rem] max-w-[87.5rem] mt-[1.88rem]'>TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
        <div className='mt-[1.63rem] flex xs:flex-wrap xs:gap-[2rem]'>
            <div className='w-[8.5rem] h-[3.0625rem] rounded-[2.25rem] bg-[rgb(73,187,189)]/[0.10] text-[#696984] text-[1rem] mr-[2.19rem] flex justify-center items-center'>affordable </div>
            <div className='w-[8.5rem] h-[3.0625rem] rounded-[2.25rem] bg-[rgb(73,187,189)]/[0.10] text-[#696984] text-[1rem] mr-[2.19rem] flex justify-center items-center'>Stunning </div>
            <div className='w-[8.5rem] h-[3.0625rem] rounded-[2.25rem] bg-[rgb(73,187,189)]/[0.10] text-[#696984] text-[1rem] mr-[2.19rem] flex justify-center items-center'>making </div>
            <div className='w-[8.5rem] h-[3.0625rem] rounded-[2.25rem] bg-[rgb(73,187,189)]/[0.10] text-[#696984] text-[1rem] mr-[2.19rem] flex justify-center items-center'>madbrawns </div>
        </div>
        <hr className='bg-[#696984] mt-[1.94rem] max-w-[105.0625rem]' />
        <div className='mt-[1.87rem] flex xs:flex-wrap justify-between items-center mr-[8.31rem] pb-[1.87rem]'>
            <div className='flex '>
                <Image src={detailsprofile} alt='Profile'/>
                <div className='flex flex-col justify-around ml-[1.25rem]'>
                    <p className='text-[#696984] text-[0.75rem] font-medium tracking-[0.015rem]'>Written by</p>
                    <p className='text-[#000] text-[1.125rem] font-medium tracking-[0.0225rem]'>Lina</p>
                </div>
            </div>
            <div className='xs:mt-10'>
                <button className='text-[#49BBBD] text-[1rem] font-bold  w-[14.5rem] h-[3.0625rem] rounded-[0.625rem] border border-[#49BBBD] bg-[rgb(73,187,189)]/[0.00]'>Follow</button>
            </div>
        </div>
    </div>
    {/* Related Blog */}
    <ReleatedArticle />

    {/* Footer */}
    <Footer/>
  </>
  )
}

export default page