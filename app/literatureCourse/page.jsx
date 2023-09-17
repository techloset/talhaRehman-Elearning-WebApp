import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import literatureProfile from '../../public/images/literatureProfile.svg'
import Image from 'next/image'
import start from '../../public/images/literaturestar.svg'
import eyes from '../../public/images/literatureeye.svg'
import video from '../../public/images/literaturevideo.svg'
// import social from '../../public/images/literaturesocial.svg'
import social from '../../public/images/literaturesocial.svg'
import course1 from '../../public/images/Literaturecourse1.svg'
import course2 from '../../public/images/Literaturecourse2.svg'
import course3 from '../../public/images/Literaturecourse3.svg'
import course4 from '../../public/images/Literaturecourse4.svg'
import course5 from '../../public/images/Literaturecourse5.svg'
import course6 from '../../public/images/Literaturecourse6.svg'


function page() {
  const Courses = [
    {
      id: 1,
      img: <Image src={course1} alt='book1' className='mx-[1.6rem] mt-[1.88rem]' />
    },
    {
      id: 2,
      img: <Image src={course2} alt='book1' className='mx-[1.6rem] mt-[1.88rem]' />
    },
    {
      id: 3,
      img: <Image src={course3} alt='book1' className='mx-[1.6rem] mt-[1.88rem]' />
    },
    {
      id: 4,
      img: <Image src={course4} alt='book1' className='mx-[1.6rem] mt-[1.88rem]' />
    },
    {
      id: 5,
      img: <Image src={course5} alt='book1' className='mx-[1.6rem] mt-[1.88rem]' />
    },
    {
      id: 6,
      img: <Image src={course6} alt='book1' className='mx-[1.6rem] mt-[1.88rem]' />
    },
  ]
  return (
    <>
      {/* Header */}
      <Header />

      <div className='2xl:mx-[7.5rem] xl:mx-[2.5rem] lg:mx-[1.5rem]'>

        <div className='literatureMain lg:pl-[3.12rem] sm:pl-2 pt-[1.63rem] pb-[1.63rem] flex flex-wrap lg:flex-nowrap sm:justify-center '>
          <div className='bg-[#fff] rounded-[22.6875rem] min-w-[22.6875rem] max-h-[22.6875rem]  '>
            <Image src={literatureProfile} alt='Hello' className='pt-[1rem] pl-[0.81rem] ' />
          </div>
          <div className='bg-[rgb(255,255,255)]/[0.80] rounded-[1.25rem] mt-4 lg:pl-[1.8rem] xl:pl-[3.13rem] pr-[2.5rem]  w-[74.9375rem] lg:h-[24rem] xl:h-[21.75rem] ml-[2.13rem] xs:ml-2 xs:pl-0'>
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


        <div className='mt-[4.25rem] flex xs:ml-3 flex-wrap lg:flex-nowrap gap-[1.61rem]'>
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
          <div className='grid 2xl:grid-cols-3 lg:grid-cols-2 gap-[5.31rem] sm:justify-center lg:justify-normal' >

            {Courses.map((info) => (<div className='literatureCourse lg:w-[31.437rem] w-[25rem]'>
              <div>
                {info.img}
              </div>
              <div className='flex justify-between items-center mx-[1.8rem] mt-[1.55rem] pb-[1.73rem]'>
                <h2 className='text-[#000000CC]/[0.80] text-[1.5625rem] tracking-[0.03125rem]'>All Benefits of PLUS</h2>
                <h3 className='text-[rgba(73,187,189,0.80)] text-[1.875rem] font-extrabold tracking-[0.0375rem]'>$24</h3>
              </div>


            </div>
            ))}
          </div>
          {/* Pagination */}
          <div className='flex justify-center mt-[3.23rem] pb-[3.25rem]'>
            <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
              <a href="#" class="relative inline-flex items-center  px-3 py-3 bg-[rgba(73,187,189,0.20)] text-[#49BBBD] font-black hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                <span class="sr-only">Previous</span>
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
                </svg>
              </a>

              <a href="#" aria-current="page" class="relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>
              <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 focus:z-20 focus:outline-offset-0">2</a>
              <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 bg-[#49BBBD]  focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
              <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900  focus:z-20 focus:outline-offset-0 md:inline-flex">4</a>
              <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900  focus:z-20 focus:outline-offset-0 md:inline-flex">5</a>
            
              <a href="#" class="relative inline-flex items-center px-3 py-3 bg-[rgba(73,187,189,0.20)] text-[#49BBBD]  focus:z-20 focus:outline-offset-0">
                <span class="sr-only">Next</span>
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                </svg>
              </a>
            </nav>
          </div>
        </div>

      </div>





      {/* Footer */}
      <Footer />
    </>
  )
}

export default page