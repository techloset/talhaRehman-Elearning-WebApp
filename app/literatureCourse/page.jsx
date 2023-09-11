import React from 'react'
import Header from '../components/header.jsx/Header'
import Footer from '../components/footer/Footer'
import literatureProfile from '../../public/images/literatureProfile.svg'
import Image from 'next/image'
import start from '../../public/images/literaturestar.svg'
import eyes from '../../public/images/literatureeye.svg'
import video from '../../public/images/literaturevideo.svg'
import social from '../../public/images/literaturesocial.svg'


function page() {
  return (
    <>
      {/* Header */}
      <Header />

      <div className='mx-[7.5rem]'>

        <div className='literatureMain pl-[3.12rem] pt-[1.63rem] pb-[1.63rem] flex '>
          <div className='bg-[#fff] rounded-[22.6875rem] w-[22.6875rem] h-[22.6875rem]  '>
            <Image src={literatureProfile} alt='Hello' className='pt-[1rem] pl-[0.81rem] ' />
          </div>
          <div className='bg-[rgb(255,255,255)]/[0.80] rounded-[1.25rem] mt-4 pl-[3.13rem] pr-[2.5rem] w-[74.9375rem] h-[21.75rem] ml-[2.13rem]'>
            <div className='flex justify-between pt-[3rem] items-center'>
              <h2 className='text-[#000000] text-[1.875rem] font-medium tracking-[0.0375rem] leading-normal'>John Anderson</h2>
              <button className='text-[#fff] text-[1.5rem] font-bold bg-[#49BBBD] rounded-[0.75rem] w-[11.44769rem] h-[3.9375rem]'>Enroll Now</button>
            </div>
            <p className='text-[rgba(45,52,54,0.70)] text-[1.125rem] leading-[2rem] mt-[0.44rem]'>Assistant Professor at Mcmaster University</p>
            <p className='text-[#2D3436] text-[1.5625rem] leading-[2rem] mt-[0.94rem] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enum ad minim veniam, quis nostrud</p>
            <div className='flex justify-around mt-[1.56rem]'>
              <div className='flex items-center gap-1'>
                <Image src={start} alt="Start" />
                <p className='text-[rgba(45,52,54,0.80)] text-[0.9375rem] leading-[2rem]'>4.9 instructor Rating</p>
              </div>
              <div className='flex items-center gap-1'>
                <Image src={eyes} alt="Start" />
                <p className='text-[rgba(45,52,54,0.80)] text-[0.9375rem] leading-[2rem]'>1,592 Students</p>
              </div>
              <div className='flex items-center gap-1'>
                <Image src={video} alt="Start" />
                <p className='text-[rgba(45,52,54,0.80)] text-[0.9375rem] leading-[2rem]'>Courses</p>
              </div>
              <div className=''>
                <Image src={social} alt="Scoial Icon" />
              </div>

            </div>
          </div>
        </div>


        <div className='mt-[4.25rem] flex gap-[1.61rem]'> 
            <div className='text-[#696969] text-[1.5rem] font-bold bg-[rgba(187,187,187,0.50)] rounded-[0.75rem] w-[11.44rem] h-[3.9375rem] flex justify-center items-center'>
                  <p>About</p>
            </div>
            <div className='text-[#696969] text-[1.5rem] font-bold bg-[rgba(187,187,187,0.50)] rounded-[0.75rem] w-[11.44rem] h-[3.9375rem] flex justify-center items-center'>
                  <p>Course</p>
            </div>
            <div className='text-[#696969] text-[1.5rem] font-bold bg-[rgba(187,187,187,0.50)] rounded-[0.75rem] w-[11.44rem] h-[3.9375rem] flex justify-center items-center'>
                  <p>Notes</p>
            </div>
            <div className='text-[#696969] text-[1.5rem] font-bold bg-[rgba(187,187,187,0.50)] rounded-[0.75rem] w-[11.44rem] h-[3.9375rem] flex justify-center items-center'>
                  <p>Project</p>
            </div>
            <div className='text-[#696969] text-[1.5rem] font-bold bg-[rgba(187,187,187,0.50)] rounded-[0.75rem] w-[11.44rem] h-[3.9375rem] flex justify-center items-center'>
                  <p>Podcast</p>
            </div>
            <div className='text-[#fff] text-[1.5rem] font-bold bg-[#49BBBD] rounded-[0.75rem] w-[11.44rem] h-[3.9375rem] flex justify-center items-center'>
                  <p>Book</p>
            </div>
            <div className='text-[#696969] text-[1.5rem] font-bold bg-[rgba(187,187,187,0.50)] rounded-[0.75rem] w-[11.44rem] h-[3.9375rem] flex justify-center items-center'>
                  <p>Review</p>
            </div>

        </div>
        <div className='mt-[4.25rem]'>
          <h2 className='text-[#000000] text-[1.875rem] font-medium tracking-[0.0375rem]'>Literature course</h2>
          <div>

            <div className='literatureCourse'>
              {/* <Image src={} alt=""/> */}

            </div>

          </div>

        </div>

      </div>





      {/* Footer */}
      <Footer />
    </>
  )
}

export default page