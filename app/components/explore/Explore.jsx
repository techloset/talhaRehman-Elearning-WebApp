import React from 'react'
import Image from 'next/image'
import color from '../../../public/images/color-palette.svg'
import global from '../../../public/images/android-globe.svg'
import detail from '../../../public/images/Detail.svg'
import detail2 from '../../../public/images/Detail2.svg'
import detail3 from '../../../public/images/Detail3.svg'
import ribbon from '../../../public/images/ribbon-b.svg'

function Explore() {
  return (
    <>
    <div className='explore overflow-x-hidden'>
     <div className=" h-full mx-4 sm:mx-6 xl:mx-[155px]">
        <h1 className="font-bold text-4xl mt-[12rem]">Explore Courses</h1>
        <p className="text-gray-600 mt-2">
          Ut sed eros finibus, placerat orci id, dapibus.
        </p>

        <div className="flex justify-between mt-[117px]">
          <p className="flex items-center gap-1 text-[1.75rem] font-bold text-[rgba(0,0,0,0.87)]">
       
          <Image src={color} alt='color' />
            Lorem ipsum
          </p>
          <p className="text-[#00BCD4] text-2xl font-bold">SEE ALL →</p>
        </div>
       
        <div className="relative z-10 mt-12">
       
          <div className="grid md:grid-cols-6  lg:grid-cols-12 gap-6">
            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Ut Sed Erost
                </p>
                <div className="bg-orange-600 relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>

            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Curabitur Egestas
                </p>
                <div className="bg-[#FF8374] relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>

            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Quisque Conseq…
                </p>
                <div className="bg-[#B45A1B] relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>

            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Ut Sed Eros
                </p>
                <div className="bg-[#FFB300] relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>

            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Cras Convallis
                </p>
                <div className="bg-[#C583FF] relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>

            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Vestibulum fauci…
                </p>
                <div className="bg-[#00A8FF] relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>

            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Vestibulum faucibu
                </p>
                <div className="bg-[#6DB4A7] relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>
    
            <div className="block transform xl:ms-6 mx-auto col-span-12 2xl:col-span-5">
              <div class=" max-w-[685px] border-[#347a83a7] rounded-3xl shadow">
                <Image src={detail} alt='first'/>
              </div>
            </div>
          </div>
 
        </div>
        <div className="h-16 -mt-8 hidden xl:block absolute w-[90%] -ms-7 bg-black rounded-xl opacity-5 "></div>
      
     
        <div className="flex justify-between mt-[117px]">
          <p className="flex items-center gap-1 text-[1.75rem] font-bold text-[rgba(0,0,0,0.87)]">
            <Image src={global} alt='global'/> 
            Lorem ipsum
          </p>
          <p className="text-[#00BCD4] text-2xl font-bold">SEE ALL →</p>
        </div>
       
        <div className="relative z-10 mt-12">
         
          <div className="grid md:grid-cols-6  lg:grid-cols-12 gap-6">
            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Ut Sed Erost
                </p>
                <div className="bg-orange-600 relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>

            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Curabitur Egestas
                </p>
                <div className="bg-[#FF8374] relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>

            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Quisque Conseq…
                </p>
                <div className="bg-[#B45A1B] relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>

            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Ut Sed Eros
                </p>
                <div className="bg-[#FFB300] relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>
            {/* card */}
            <div className="block transform xl:mx-6 mx-auto col-span-12 2xl:col-span-5">
              <div class=" max-w-[685px] border-[#347a83a7] rounded-3xl shadow">
              <Image src={detail2} alt='first'/>
              </div>
            </div>
            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Cras Convallis
                </p>
                <div className="bg-[#C583FF] relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>

            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Vestibulum fauci…
                </p>
                <div className="bg-[#00A8FF] relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>

            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Vestibulum faucibu
                </p>
                <div className="bg-[#6DB4A7] relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>
          </div>

        </div>
        <div className="h-16 -mt-8 hidden xl:block absolute w-[90%] -ms-7 bg-black rounded-xl opacity-5 "></div>
   
  
        <div className="flex justify-between mt-[117px]">
          <p className="flex items-center gap-1 text-[1.75rem] font-bold text-[rgba(0,0,0,0.87)]">
        <Image src={ribbon} alt='ribbo' />
            Lorem ipsum
          </p>
          <p className="text-[#00BCD4] text-2xl font-bold">SEE ALL →</p>
        </div>

        <div className="relative z-10 mt-12">
      
          <div className="grid md:grid-cols-6  lg:grid-cols-12 gap-6">
            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Ut Sed Erost
                </p>
                <div className="bg-orange-600 relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>
            {/* card */}
            <div className="block transform xl:mx-6 mx-auto col-span-12 2xl:col-span-5">
              <div class=" max-w-[685px] border-[#347a83a7] rounded-3xl shadow">
              <Image src={detail3} alt='first'/>
              </div>
            </div>
            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Curabitur Egestas
                </p>
                <div className="bg-[#FF8374] relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>

            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Quisque Conseq…
                </p>
                <div className="bg-[#B45A1B] relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>

            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Ut Sed Eros
                </p>
                <div className="bg-[#FFB300] relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>

            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Cras Convallis
                </p>
                <div className="bg-[#C583FF] relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>

            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Vestibulum fauci…
                </p>
                <div className="bg-[#00A8FF] relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>

            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Vestibulum faucibu
                </p>
                <div className="bg-[#6DB4A7] relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        <div className="h-16 -mt-8 hidden xl:block absolute w-[90%] -ms-7 bg-black rounded-xl opacity-5 "></div>
      
      </div>
      </div>
    </>
  )
}

export default Explore