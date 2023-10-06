import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Image from 'next/image'
import arrowDown from '../../public/images/membershipArrowDown.svg'
import tick from '../../public/images/membershipTick.svg'
import yellowTick from '../../public/images/yellowTick.svg'
import greentick from '../../public/images/greenTick.svg'
import StudentToSay from '../components/studentToSay/StudentToSay'
import Membershipcard from '../components/membershipCard/Membershipcard'
import androidLogo from '../../public/images/andriodLogo.svg'
import appleLogo from '../../public/images/appleLogo.svg'


function page() {
  const Questions = [
    {
      question: "Lorem ipsum dolor sit amet",
    },
    {
      question: "Consectetur adipiscing elit, sed do ",
    },
    {
      question: "Eiusmod tempos Lorem ipsum",
    },
    {
      question: "Lorem ipsum dolor sit amet",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
      question: "Lorem ipsum dolor sit amet",
    },
  ];
  return (

    <>
      {/* Header */}
      <Header />

      <div className='mt-[5.41rem] xs:mt-[3rem]'>
        <h1 className='text-[#49BBBD] text-[4rem] font-extrabold tracking-[-0.0625rem] text-center xs:text-[3rem]'>Affordable pricing</h1>
        <div className='mt-[4.81rem] 2xl:mx-[23.4rem]'>
          <div className="flex justify-between flex-wrap lg:flex-nowrap gap-7">
            {/* free */}
            <div className="flex flex-col p-8  mx-auto 2xl:w-[23.125rem] 2xl:h-[33.5rem] text-gray-900 bg-white  font-['Inter',sans-serif]  ">
              <p className="text-[#49BBBD] font-semibold text-xl ">
                Like a pusy
              </p>

              <h3 className="mb-6 mt-4 text-5xl font-bold  font-['Inter',sans-serif]">
                Free <span className="text-xs font-extrabold uppercase tracking-[2.5px]">/FOREVER</span>
              </h3>

              <ul className="mb-8 space-y-6 text-left font-['Inter',sans-serif]">
                <li className="flex items-center space-x-3">
                  <Image src={tick} alt='tick' />
                  <span>Components-driven system</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Image src={tick} alt='tick' />
                  <span>Sales-boosting landing pages</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Image src={tick} alt='tick' />
                  <span>Awesome Feather icons pack </span>
                </li>
              </ul>
              <div className="mt-auto font-['Inter',sans-serif]">
                <button className="text-[#49BBBD] text-lg font-bold border-gray-400 py-3 rounded-xl border-2 w-full">
                  Try for free
                </button>
              </div>
            </div>
            {/* individual */}
            <div className="flex flex-col p-8 mx-auto 2xl:w-[23.125rem]  text-gray-900 bg-white rounded-lg border border-gray-100 shadow-xl font-['Inter',sans-serif] ">
              <div className="flex justify-between">
                <div className="flex">
                  <p className="text-[#49BBBD] font-semibold text-xl">
                    👤 Individual
                  </p>
                </div>
                <button className="text-black px-4 rounded-full border-2 w-[5.625rem] h-[2rem] border-blue-600">
                  BEST!
                </button>
              </div>

              <h3 className="mb-6 mt-4 text-5xl font-bold">
                $24 <span className="text-xs uppercase tracking-[2.5px] font-extrabold">/MONTH</span>
              </h3>

              <ul className="mb-7 space-y-6 text-left">
                <li className="flex items-center space-x-3">
                  <Image src={yellowTick} alt="Yelong" />
                  <span>Components-driven system</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Image src={yellowTick} alt="Yelong" />
                  <span>Sales-boosting landing pages</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Image src={yellowTick} alt="Yelong" />
                  <span>Awesome Feather icons pack </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Image src={yellowTick} alt="Yelong" />
                  <span>Themed into 3 different styles </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Image src={yellowTick} alt="Yelong" />
                  <span>Will help to learn Figma </span>
                </li>
              </ul>

              <button
                href="#"
                className=" bg-[#49BBBD] rounded-xl text-white py-[14px]  mt-1  border-2 text-2xl font-['Inter',sans-serif]">
                Regular license
              </button>
            </div>
            {/* corporate */}
            <div className="flex flex-col p-8 mx-auto  2xl:w-[23.125rem] 2xl:h-[33.5rem] text-gray-900 bg-white rounded-lg  font-['Inter',sans-serif] ">
              <div className="flex">
                <p className="text-[#49BBBD] font-semibold text-xl">
                  👥 Corporate
                </p>
              </div>

              <h3 className="mb-6 mt-4 text-5xl font-bold">
                $12 <span className="text-xs uppercase tracking-[2.5px] font-extrabold">/EDITOR</span>
              </h3>

              <ul className="mb-8 space-y-6 text-left">
                <li className="flex items-center space-x-3">
                  <Image src={greentick} alt='greentick' />
                  <span>Components-driven system</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Image src={greentick} alt='greentick' />
                  <span>Sales-boosting landing pages</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Image src={greentick} alt='greentick' />
                  <span>Awesome Feather icons pack </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Image src={greentick} alt='greentick' />
                  <span>Themed into 3 different styles </span>
                </li>
              </ul>
              <div className="mt-auto">
                <button className="text-[#49BBBD] text-lg font-bold border-gray-400 py-3 rounded-xl border-2 w-full">
                  Extended license
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-[#252641] mt-[12rem] text-white flex flex-col justify-center  px-6 md:px-0 h-[459px] md:mx-16 mx-6  2xl:mx-[7.5rem] rounded-[37px] font-['Inter',sans-serif]">

        <h1 className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-semibold text-center mt-[4.3rem]">
          Online coaching lessons for remote learning.
        </h1>

        <p className=" md:text-xl xl:text-2xl max-w-[73.6rem] text-center leading-[2.7rem] mt-[1.87rem] mx-auto tracking-[0.03rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit,
          sed do eiusmod tempor
        </p>
        <button className="bg-[#49BBBD] w-[236px] h-[63px] rounded-xl mx-auto mt-[4.85rem] ">
          Start learning now
        </button>
      </div>



      {/*  */}
      <div className='mt-28 '>
        <section className="mx-6 2xl:ml-[142px] 2xl:mr-[129px] ">
          <h1 className="text-center text-xl sm:text-2xl lg:text-4xl font-semibold font-['Inter',sans-serif]">
            Online coaching lessons for remote learning
          </h1>

          <div className="questions mt-10 font-['Inter',sans-serif]">
            {Questions.map((question, index) => (
              <div key={index} className="border-b border-gray-300 rounded mb-4">
                <div className="flex items-center justify-between py-4 cursor-pointer">
                  <div className="flex">
                    <div className="w-5 h-5 bg-[#55EFC4] rounded-full mr-5 "></div>
                    <h2 className="text-lg font-semibold text-[#2D3436]">
                      {question.question}
                    </h2>
                  </div>
                  <Image src={arrowDown} alt="arrow down" />
                </div>
                <div className="p-4 ">
                  <p className="text-[#696984] max-w-[1570dpx] tracking-wide text-sm leading-[180%]">
                    {question.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      {/*  */}
      <StudentToSay />

      <div className=" mx-10 xl:mx-28 relative -top-28">
        <div className="bg-[#252641] text-white rounded-[37px] px-12 xl:px-24 h-[13.6rem] flex flex-col xl:flex-row justify-center gap-4 xl:justify-between items-center font-bold">

          <h1 className="xl:text-3xl sm:text-2xl text-center font-bold ">
            APP is available or free{" "}
          </h1>
          <div className="flex flex-col md:flex-row justify-center text-xl gap-4">
            <div className="bg-[#29B9E7] font-bold w-[254px] h-[63px] rounded-xl mx-auto flex items-center justify-center gap-2">
              <Image src={androidLogo} alt='Logo' />
              <button className="">Android APP</button>
            </div>

            <div className=" bg-[#49BBBD] font-bold w-[254px] h-[63px] rounded-xl mx-auto flex items-center justify-center gap-2">
              <Image src={appleLogo} alt='apple logo'/>
              <button className="">IOS APP</button>
            </div>
          </div>

        </div>
      </div>
      {/* End Section */}
      <Membershipcard />


      {/* Footer */}
      <Footer />
    </>
  )
}

export default page