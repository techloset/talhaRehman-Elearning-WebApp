import React from 'react'
import Image from 'next/image';
import course1 from '../../../public/images/Course1.svg'
import course2 from '../../../public/images/Course2.svg'
import course3 from '../../../public/images/Course3.svg'
import profile from '../../../public/images/courseProfile.svg'
import left from '../../../public/images/membershipLeft.svg'
import right from '../../../public/images/membershipRight.svg'

function CourseBack() {
    const cards = [
        {
          id: 1,
          image: course1,
        },
        {
          id: 2,
          image: course2,
        },
        {
          id: 3,
          image:course3
        },
      ];
  return (
    <>
         <div className="bg-[#9DCCFF] bg-opacity-20 font-poppins  ">
        <div className=" mx-6 md:mx-20 xl:mx-24 2xl:ml-[110px] 2xl:mr-[113px] pt-[50px] pb-[57px]">
          <div className="flex justify-between">
            <div className=" xl:text-[30px] text-xl sm:text-2xl mb-[50px] font-semibold font-poppins">
              Welcome back, ready for your next lesson?
            </div>
            <div className="text-[#49BBBD] text-xl xl:text-xl font-bold  hidden md:block">
              View History
            </div>
          </div>

          {/* related blog  */}
          <div className="grid md:grid-cols-2  xl:grid-cols-3 gap-x-6 gap-y-12 mb-[50px]">
            {cards.map((card, index) => (
              <div
                className="mx-auto  bg-white shadow-md overflow-hidden p-4 rounded-[20px]"
                key={index}
              >
                <Image src={card.image} alt='Course'/>
                <div className="p-4">
                  <h2 className="text-xl mt-[12px]font-medium mb-2">AWS Certified Solutions Architect</h2>
                  <div className="flex items-center space-x-4 mb-4 mt-[10px]">
                   <Image src={profile} alt="profile"/>

                    <span className="text-gray-700">Lina</span>
                  </div>

                  <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 mt-[25px] ">
                    <div class="bg-[#49BBBD] h-2.5 rounded-xl  w-[75%] "></div>
                  </div>
                  <p className="float-right text-[#696984] ">Lesson 5 of 7</p>
                  <div className="flex items-center justify-between">
                    <div className="text-gray-600">
                      <div className="text-gray-600 flex items-center"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end gap-3 me-3">
            <button className="bg-[#49BBBD] bg-opacity-60 text-white py-[17px] px-[20px] rounded font-bold mr-2">
             <Image src={left} alt='left'/>
            </button>
            <button className="bg-[#49BBBD]  text-white py-[17px] px-[20px] rounded font-bold">
             <Image src={right} alt='right'/>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseBack