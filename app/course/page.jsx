import React from 'react'
import CourseBack from '../components/courseBack/CourseBack'
import Header from '../components/header/Header'
import Choice from '../components/choice/Choice'
import Cards from '../components/cards/Cards'
import Footer from '../components/footer/Footer'

function page() {
  return (
    <>
    <Header/>
    <CourseBack/>
    <Choice/>
    <div className='bg-[#9DCCFF]/[0.2]'>
      <div className='flex justify-between items-center ml-[7.5rem] pt-[6.3rem] mr-[8.9rem]'>
        <h2 className='text-[#000000] text-[1.875rem] font-medium tracking-[0.0375rem]'>Recommended for you</h2>
        <h3 className='text-[#49BBBD] text-[1.25rem] font-bold '>See all</h3>
      </div>
      <Cards/>
    </div>
    <div className=''>
      <div className='flex justify-between items-center ml-[7.5rem] pt-[6.3rem] mr-[8.9rem]'>
        <h2 className='text-[#000000] text-[1.875rem] font-medium tracking-[0.0375rem]'>Get choice of your course</h2>
        <h3 className='text-[#49BBBD] text-[1.25rem] font-bold '>See all</h3>
      </div>
      <Cards/>
    </div>
    <div className="bg-[#252641] text-white flex flex-col justify-center  px-6 md:px-0 h-[459px] md:mx-16 mx-6 mb-[90px] 2xl:mx-[120px] rounded-[37px] ">
        <h1 className="xl:text-4xl lg:text-3xl mt-3 md:text-2xl text-xl font-semibold text-center">
          Online coaching lessons for remote learning.
        </h1>
        <p className=" md:text-xl xl:text-2xl mt-2 max-w-[1259px] text-center leading-[180%] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit,
          sed do eiusmod tempor
        </p>
        <button className="bg-[#49BBBD] w-[236px] h-[63px] rounded-xl mt-8 mx-auto">
          Start learning now
        </button>
       
      </div>
      <div className=''>
      <div className='flex justify-between items-center ml-[7.5rem] pt-[6.3rem] mr-[8.9rem]'>
        <h2 className='text-[#000000] text-[1.875rem] font-medium tracking-[0.0375rem]'>The course in personal development</h2>
        <h3 className='text-[#49BBBD] text-[1.25rem] font-bold '>See all</h3>
      </div>
      <Cards/>
    </div>
    <div className='bg-[#9DCCFF]/[0.2]'>
      <div className='flex justify-between items-center ml-[7.5rem] pt-[6.3rem] mr-[8.9rem]'>
        <h2 className='text-[#000000] text-[1.875rem] font-medium tracking-[0.0375rem]'>Student are viewing</h2>
        <h3 className='text-[#49BBBD] text-[1.25rem] font-bold '>See all</h3>
      </div>
      <Cards/>
    </div>
    {/* Footer */}
    <Footer/>
    
    </>
  )
}

export default page