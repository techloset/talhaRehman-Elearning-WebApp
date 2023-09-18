import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Cards from '../components/cards/Cards'
import Image from 'next/image'
import student from '@/public/images/searchStudent.svg'
import social from '@/public/images/searchSocial.svg'
import profile1 from '@/public/images/searchProfile1.svg'
import profile2 from '@/public/images/searchProfile2.svg'
import profile3 from '@/public/images/searchProfile3.svg'
import profile4 from '@/public/images/searchProfile4.svg'

function page() {
  return (
    <>
    {/* Header */}
    <Header/>
    {/*  */}
    <div className='searchBg' >

        <div className="flex  py-[80px] flex-col items-center justify-center gap-5">
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row w-11/12 sm:w-3/4 2xl:w-[1319px]">
            <div className="flex w-full items-center h-14 sm:h-[73px] bg-white pe-1 rounded-[10px] overflow-hidden">
              <input
                type="text"
                placeholder="Search your favourite course"
                className="w-full h-14 pl-1 sm-pl-6 md:pl-[34px] py-[21px] border  sm:text-xl text-sm border-none focus:outline-none"
              />
              <button className="lg:text-2xl text-sm font-bold w-[183px] h-5/6 md:h-[63px] my-1 md:my-0 bg-[#49BBBD] text-white rounded-md">
                Search
              </button>
            </div>
          </div>
         
          <div className="grid grid-cols-2 xl:grid-cols-6 gap-4 w-11/12 2xl:w-[1319px]">
        
            <select className="block mx-auto xl:mx-0 text-center font-semibold w-fit text-2xl border-r-[12px] border-transparent p-[18px] border border-gray-300 xl:h-[73px] bg-white rounded-[10px] shadow-sm">
              <option value="" className="">
                Subject
              </option>
              <option value="" className="">
                Subject
              </option>
              <option value="" className="">
                Subject
              </option>
            </select>
        
            <select className="block mx-auto xl:mx-0 text-center font-semibold w-fit text-2xl border-r-[12px] border-transparent p-[18px] border border-gray-300 xl:h-[73px] bg-white rounded-[10px] shadow-sm">
              <option value="" className="">
                Partner
              </option>
              <option value="" className="">
                Partner
              </option>
              <option value="" className="">
                Partner
              </option>
            </select>
       
            <select className="block mx-auto xl:mx-0 text-center font-semibold w-fit text-2xl border-r-[12px] border-transparent p-[18px] border border-gray-300 xl:h-[73px] bg-white rounded-[10px] shadow-sm">
              <option value="" className="">
                Program
              </option>
              <option value="" className="">
                Program
              </option>
              <option value="" className="">
                Program
              </option>
            </select>
        
            <select className="block mx-auto xl:mx-0 text-center font-semibold w-fit text-2xl border-r-[12px] border-transparent p-[18px] border border-gray-300 xl:h-[73px] bg-white rounded-[10px] shadow-sm">
              <option value="" className="">
                Language
              </option>
              <option value="" className="">
                Language
              </option>
              <option value="" className="">
                Language
              </option>
            </select>
        
            <select className="block mx-auto xl:mx-0 text-center font-semibold w-fit text-2xl border-r-[12px] border-transparent p-[18px] border border-gray-300 xl:h-[73px] bg-white rounded-[10px] shadow-sm">
              <option value="" className="">
                Availability
              </option>
              <option value="" className="">
                Availability
              </option>
              <option value="" className="">
                Availability
              </option>
            </select>
         
       
            <select className="block mx-auto xl:mx-0 text-center font-semibold w-fit text-2xl border-r-[12px] border-transparent p-[18px] border border-gray-300 xl:h-[73px] bg-white rounded-[10px] shadow-sm">
              <option value="" className="">
                Learning Type
              </option>
              <option value="" className="">
                Learning Type
              </option>
              <option value="" className="">
                Learning Type
              </option>
            </select>
 
          </div>
        </div>

      </div>

    {/*  Recommended for you*/}
    <div className='bg-[#9DCCFF]/[0.2]'>
      <div className='flex justify-between items-center ml-[7.5rem] pt-[6.3rem] mr-[8.9rem] xs:mx-10'>
        <h2 className='text-[#000000] text-[1.875rem] font-medium tracking-[0.0375rem]'>Recommended for you</h2>
        <h3 className='text-[#49BBBD] text-[1.25rem] font-bold hidden md:block'>See all</h3>
      </div>
      <Cards/>
    </div>


    {/* What Our Student have to say */}
    <div className="bg-[#9DCCFF] bg-opacity-20 pb-[80px]">
        <div className="xl:mx-28 lg:mx-16 2xl:mx-[139px]  mx-6">
          <p className="lg:text-3xl text-2xl font-semibold py-[70px]">
            What our students have to say
          </p>
          <div className="flex flex-col  lg:flex-row justify-between bg-white  rounded-[40px] p-12  2xl:h-[629px]">
          <Image src={student} alt="student"/>
            <div className="lg:w-1/2 flex flex-col justify-center">
              <p className="lg:text-3xl font-bold mb-[31px]">Savannah Nguyen</p>

              <p className="lg:text-2xl mb-[19px]">tanya.hill@example.com</p>

              <p className="text-[#696984] text-[18px] mb-[31px] leading-[180%]">
                Lorem ipsum dolor sit amet, consectetur adipising elit,
                <br /> sed do eiusmod tempor <br />
                Lorem ipsum dolor sit amet, consectetur adipising elit,
                <br /> sed do eiusmod tempor <br />
                Lorem ipsum dolor sit amet, consectetur adipising elit,
                <br /> sed do eiusmod tempor
              </p>

              <div className="flex gap-[25px]">
                <Image src={social} alt='Social' />
              </div>
            </div>

            <div className="flex xs:flex-wrap xs:mt-10 lg:flex-col gap-[25px] items-end justify-end">
              <Image src={profile1} alt='Profile'/>
              <Image src={profile2} alt='Profile'/>
              <Image src={profile3} alt='Profile'/>
              <Image src={profile4} alt='Profile'/>
              
            </div>
          </div>
        </div>
      </div>

    {/* top */}
    <div className='pb-16'>
        <div className="mx-6 md:mx-16 lg:mx-28 2xl:mt-[10rem] lg:mt-[5rem]">
          <div className="flex justify-between">
            <div className="font-medium text-xl md:text-2xl xl:text-3xl mb-16">
              Top Education offers and deals are listed here
            </div>
            <div className="text-[#49BBBD] text-[20px] font-bold hidden md:block">
              See all
            </div>
          </div>

          <div className="grid xl:grid-cols-3   gap-8">
            <div class="rounded-xl checkout1 shadow-lg cursor-pointer 2xl:max-w-[506px] 2xl:h-[477px] overflow-hidden"
            >
              <div className="bg-black bg-opacity-30 h-full px-[50px] py-[40px]">
                <div className="">
                  <button className=" text-white bg-[#49BBBD] h-[100px] w-[100px]   rounded-lg  mb-7 text-2xl font-bold  ">
                    50%
                  </button>
                  <h4 className=" font-semibold text-[32px]  text-white mb-9">
                    Lorem ipsum dolor
                  </h4>
                  <p className=" leading-[180%]  text-2xl text-gray-100">
                    Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor
                    Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor
                  </p>
                </div>
              </div>
            </div>
            <div class="rounded-xl checkout2 shadow-lg cursor-pointer 2xl:max-w-[506px] 2xl:h-[477px] overflow-hidden"
            >
              <div className="bg-black bg-opacity-30 h-full px-[50px] py-[40px]">
                <div className="">
                  <button className=" text-white bg-[#49BBBD] h-[100px] w-[100px]   rounded-lg  mb-7 text-2xl font-bold  ">
                    10%
                  </button>
                  <h4 className=" font-semibold text-[32px]  text-white mb-9">
                    Lorem ipsum dolor
                  </h4>
                  <p className=" leading-[180%]  text-2xl text-gray-100">
                    Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor
                    Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor
                  </p>
                </div>
              </div>
            </div>

            <div class="rounded-xl checkout3 shadow-lg cursor-pointer 2xl:max-w-[506px] 2xl:h-[477px] overflow-hidden"
            >
              <div className="bg-black bg-opacity-30 h-full px-[50px] py-[40px]">
                <div className="">
                  <button className=" text-white bg-[#49BBBD] h-[100px] w-[100px]   rounded-lg  mb-7 text-2xl font-bold  ">
                    50%
                  </button>
                  <h4 className=" font-semibold text-[32px]  text-white mb-9">
                    Lorem ipsum dolor
                  </h4>
                  <p className=" leading-[180%]  text-2xl text-gray-100">
                    Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor
                    Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    {/* Footer */}
    <Footer/>
    </>
  )
}

export default page