import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Cards from '../components/cards/Cards'
import Image from 'next/image'
import student from '@/public/images/searchStudent.svg'
import profile1 from '@/public/images/searchProfile1.svg'
import profile2 from '@/public/images/searchProfile2.svg'
import profile3 from '@/public/images/searchProfile3.svg'
import profile4 from '@/public/images/searchProfile4.svg'
import twitter from '@/public/images/searchTwitter.svg'
import facebook from '@/public/images/searchFacebook.svg'
import instagram from '@/public/images/seacrhInstagram.svg'
import searchMeetings from '@/public/images/searchMeeting.svg'
import creator1 from '@/public/images/creator1.svg'
import creator2 from '@/public/images/creator2.svg'
import creator3 from '@/public/images/creator3.svg'

function page() {
  const creator = [
    {
      img:creator1,
      name:"Jane Cooper"
    },
    {
      img:creator2,
      name:"Adam"
    },
    {
      img:creator3,
      name:"Tomara"
    },
    {
      img:creator1,
      name:"Jane Cooper"
    },
    {
      img:creator1,
      name:"Jane Cooper"
    },
    {
      img:creator1,
      name:"Jane Cooper"
    },
  ]
  
  
  return (
    <>
      {/* Header */}
      <Header />
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

          <div className="lg:flex hidden   w-11/12 2xl:w-[1319px] gap-3 2xl:gap-0 flex-wrap 2xl:flex-nowrap justify-center 2xl:justify-between ">

            <select className="block mx-auto xl:mx-0 text-center font-semibold w-fit text-2xl border-r-[12px] border-transparent p-[18px] border border-gray-300 xl:h-[73px] bg-white rounded-[10px] shadow-sm">
              <option value="" className="">
                Subject 
              </option>.
              <option value="" className="">
                Subject2
              </option>
              <option value="" className="">
                Subject3
              </option>
            </select>

            <select className="block mx-auto xl:mx-0 text-center font-semibold w-fit text-2xl border-r-[12px] border-transparent p-[18px] border border-gray-300 xl:h-[73px] bg-white rounded-[10px] shadow-sm">
              <option value="" className="">
                Partner 
              </option>
              <option value="" className="">
                Partner 2
              </option>
              <option value="" className="">
                Partner 3
              </option>
            </select>

            <select className="block mx-auto xl:mx-0 text-center font-semibold w-fit text-2xl border-r-[12px] border-transparent p-[18px] border border-gray-300 xl:h-[73px] bg-white rounded-[10px] shadow-sm">
              <option value="" className="">
                Program 
              </option>
              <option value="" className="">
                Program 2
              </option>
              <option value="" className="">
                Program 3
              </option>
            </select>

            <select className="block mx-auto xl:mx-0 text-center font-semibold w-fit text-2xl border-r-[12px] border-transparent p-[18px] border border-gray-300 xl:h-[73px] bg-white rounded-[10px] shadow-sm">
              <option value="" className="">
                Language 
              </option>
              <option value="" className="">
                Language 2
              </option>
              <option value="" className="">
                Language 3
              </option>
            </select>

            <select className="block mx-auto xl:mx-0 text-center font-semibold w-fit text-2xl border-r-[12px] border-transparent p-[18px] border border-gray-300 xl:h-[73px] bg-white rounded-[10px] shadow-sm">
              <option value="" className="">
                Availability 
              </option>
              <option value="" className="">
                Availability 2
              </option>
              <option value="" className="">
                Availability 3
              </option>
            </select>


            <select className="block mx-auto xl:mx-0 text-center font-semibold w-fit text-2xl border-r-[12px] border-transparent p-[18px] border border-gray-300 xl:h-[73px] bg-white rounded-[10px] shadow-sm">
              <option value="" className="">
                Learning Type 
              </option>
              <option value="" className="">
                Learning Type 2
              </option>
              <option value="" className="">
                Learning Type 3
              </option>
            </select>

          </div>
        </div>

      </div>

      {/* Cards */}
      <div className='mt-16 mb-[65px]' >
        <Cards></Cards>
        <Cards></Cards>
      </div>

      {/*  */}
      <div className='font-poppins mb-[65px]'>
        <div className='rounded-[20px] bg-[#9DCCFF]/[0.2] flex gap-5  w-[86%] xs:w-[98%] mx-auto flex-wrap justify-center 2xl:flex-nowrap '>
          <div className='mr-[250px] ml-[133px] xs:mr-5 xs:ml-6 mb-10'>
            <h2 className='text-[#252641] text-[30px] font-semibold mt-[99px]  w-[20rem] xs:w-[92%]'>
              Know about learning learning platform
            </h2>
            <div className='mt-[35px] flex gap-5 items-center'>
              <div className='bg-[#55EFC4]/[0.48] w-[20px] h-[20px] rounded-full'></div>
              <p className='font-inter text-[18px] text-[#2D3436]'>Free E-book, video & consolation</p>
            </div>
            <div className='mt-[10px] flex gap-5 items-center'>
              <div className='bg-[#55EFC4]/[0.48] w-[20px] h-[20px] rounded-full'></div>
              <p className='font-inter text-[18px] text-[#2D3436]'>Top instructors from around world</p>
            </div>
            <div className='mt-[10px] flex gap-5 items-center'>
              <div className='bg-[#55EFC4]/[0.48] w-[20px] h-[20px] rounded-full'></div>
              <p className='font-inter text-[18px] text-[#2D3436]'>Top courses from your team</p>
            </div>
            <button className='font-bold text-[24px] bg-[#49BBBD] rounded-[12px] w-[309px] h-[63px] mt-6  text-[#fff]'>Start learning now</button>
          </div>
          <div className='mt-10'>
            <Image src={searchMeetings} alt='Meetings' />

          </div>

        </div>
      </div>

      {/*  Recommended for you*/}
      <div className='bg-[#9DCCFF]/[0.2] pb-[213px] font-poppins'>
        <div className='flex justify-between items-center ml-[7.5rem] pt-[6.3rem] mr-[8.9rem] xs:mx-10'>
          <h2 className='text-[#000000] text-[1.875rem] font-medium tracking-[0.0375rem]'>Recommended for you</h2>
          <h3 className='text-[#49BBBD] text-[1.25rem] font-bold hidden md:block'>See all</h3>
        </div>
        <Cards />
      </div>

      {/* Classes taught by Real Creator */}
      <div className='font-poppins lg:ml-[142px] mt-[90px] lg:mr-[135px] ml-5'>
        <div className='flex justify-between'>
          <h2 className='text-[#000000] text-[30px] font-medium '> Classes tought by real creators</h2>
          <h4 className='text-[#49BBBD] text-[20px] font-bold xs:hidden'> See all</h4>
        </div>
        <div className='mt-[188px] mb-[80px] flex flex-wrap  gap-10 '>
        {creator.map((info,index)=>(  <div className={`bg-[#fff] flex xs:mt-48 flex-col gap-5 justify-center items-center w-[516px] h-[303px] creatorShadow ${index > 2 ? 'mt-[186px]' : 'mt-[90px]'} `}>
            <Image src={info.img} alt='creator' className='-mt-36' />
            <h2 className='text-[#252641] text-[24px] font-medium'>{info.name}</h2>
            <p className='text-[#696984] text-[18px] text-center w-[85%] '>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
          </div>))}

        </div>
      </div>


      {/* What Our Student have to say */}
      <div className="bg-[#9DCCFF] bg-opacity-20 pb-[80px] font-poppins">
        <div className="xl:mx-28 lg:mx-16 2xl:mx-[139px]  mx-6">
          <p className="lg:text-3xl text-2xl font-semibold py-[70px]">
            What our students have to say
          </p>
          <div className="flex flex-col  lg:flex-row justify-between bg-white  rounded-[40px] p-12  2xl:h-[629px]">
            <Image src={student} alt="student" />
            <div className="lg:w-1/2 flex flex-col justify-center ml-24">
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
                <Image src={twitter} alt='twitter' />
                <Image src={facebook} alt='facebook' />
                <Image src={instagram} alt='instagram' />
              </div>
            </div>

            <div className="flex xs:flex-wrap xs:mt-10 lg:flex-col gap-[28px] 2xl:mr-16 items-end justify-end">
              <Image src={profile1} alt='Profile' />
              <Image src={profile2} alt='Profile' />
              <Image src={profile3} alt='Profile' />
              <Image src={profile4} alt='Profile' />

            </div>
          </div>
        </div>
      </div>

      {/* top */}
      <div className='pb-16 font-poppins'>
        <div className="mx-6 md:mx-16 lg:ml-[120px] 2xl:mt-[10rem] lg:mt-[5rem]">
          <div className="flex justify-between">
            <div className="font-medium text-xl md:text-2xl xl:text-3xl mb-16">
              Top Education offers and deals are listed here
            </div>
            <div className="text-[#49BBBD] text-[20px] font-bold hidden md:block 2xl:mr-10">
              See all
            </div>
          </div>

          <div className="grid xl:grid-cols-3   gap-8">
            <div class="rounded-xl checkout1 shadow-lg cursor-pointer 2xl:max-w-[506px] 2xl:h-[477px] overflow-hidden"
            >
              <div className="bg-black bg-opacity-30 h-full px-[50px] py-[40px]">
                <div className="">
                  <button className=" text-white bg-[#49BBBD] h-[124px] w-[127px]     rounded-lg  mb-7 text-2xl 2xl:text-[50px] font-bold  ">
                    50%
                  </button>
                  <h4 className=" text-[28px] text-[#fff] font-bold mb-1 ">
                    Lorem ipsum dolor
                  </h4>
                  <p className=" text-xl text-[#fff] font-medium leading-[36px] tracking-[0.4px] sm:w-[19.6rem]">
                    Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor <br />
                    Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor
                  </p>
                </div>
              </div>
            </div>
            <div class="rounded-xl checkout2 shadow-lg cursor-pointer 2xl:max-w-[506px] 2xl:h-[477px] overflow-hidden"
            >
              <div className="bg-black bg-opacity-30 h-full px-[50px] py-[40px]">
                <div className="">
                  <button className=" text-white bg-[#49BBBD] h-[124px] w-[127px]    rounded-lg  mb-7 text-2xl 2xl:text-[50px]  font-bold  ">
                    10%
                  </button>
                  <h4 className=" text-[28px] text-[#fff] font-bold mb-1">
                    Lorem ipsum dolor
                  </h4>
                  <p className=" text-xl text-[#fff] font-medium leading-[36px] tracking-[0.4px] sm:w-[19.6rem]">
                    Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor <br />
                    Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor
                  </p>
                </div>
              </div>
            </div>

            <div class="rounded-xl checkout3 shadow-lg cursor-pointer 2xl:max-w-[506px] 2xl:h-[477px] overflow-hidden"
            >
              <div className="bg-black bg-opacity-30 h-full px-[50px] py-[40px]">
                <div className="">
                  <button className=" text-white bg-[#49BBBD] h-[124px] w-[127px]   rounded-lg  mb-7 text-2xl 2xl:text-[50px]  font-bold  ">
                    50%
                  </button>
                  <h4 className=" text-[28px] text-[#fff] font-bold mb-1">
                    Lorem ipsum dolor
                  </h4>
                  <p className=" text-xl text-[#fff] font-medium leading-[36px] tracking-[0.4px] sm:w-[19.6rem]">
                    Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor <br />
                    Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor
                  </p>
                </div>
              </div>
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