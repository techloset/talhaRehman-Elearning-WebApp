import React from 'react'
import Footer from '../components/footer/Footer'
import Image from 'next/image'
import payapl from '@/public/images/Paypal.svg'
import visa from '@/public/images/visa.svg'
import american from '@/public/images/amercianexpress.svg'
import Header from '../components/header/Header'
import main from '@/public/images/checkoutMain.svg'

function page() {
  return (
    <>
      {/* Header */}
      <Header />
      <div className="flex 2xl:flex-row flex-col gap-8 justify-between mx-6 md:mx-[120px] mt-[60px] mb-[158px] font-poppins">

        <div className="p-[50px] shadow-xl  2xl:w-[962px] 2xl:h-[909px] rounded-2xl ">
          <h1 className="font-semibold text-2xl md:text-4xl">Checkout</h1>

          <p className="font-semibold text-[#5B5B5B] sm:text-xl mt-2">
            Cart Type
          </p>

          <div className="flex sm:flex-row flex-col gap-[20px] mt-[38px] mb-[84px] items-center ">
            <div className="w-[139px] h-[92px] border rounded-[0.625rem] border-[#49BBBD]">
              <Image src={payapl} alt='paypal' className='mx-auto' />
            </div>

            <div className="rounded-lg  w-[139px] h-[92px]  ">
              <Image src={american} alt='american' className='h-[92px]' />
            </div>

            <div className="rounded-lg  w-[139px] h-[92px] ">
              <Image src={visa} alt="visa" className='h-[92px]' />
            </div>

            <div className="rounded-lg h-[92px]  w-[139px]  border-2 md:ml-3 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 60"
                className="h-8"
              >
                <circle cx="30" cy="30" r="30" fill="#FF5F00" />
                <circle cx="70" cy="30" r="30" fill="#FFCC00" />
              </svg>
            </div>
          </div>

          <label
            className="sm:text-xl font-semibold text-[#5B5B5B]"
            htmlFor="Name"
          >
            Name on Card
          </label>

          <input
            className="font-normal border-gray-300 border-2 rounded-[10px] w-full h-[60px] ps-[21px] mt-[10px] mb-[30px]  sm:text-xl "
            type="text"
            name=""
            id=""
            placeholder="Enter name on Card"
          />

          <label
            className="sm:text-xl font-semibold text-[#5B5B5B] "
            htmlFor="cardNumber"
          >
            Card Number
          </label>

          <input
            className="font-normal border-2 border-gray-300 rounded-[10px] w-full h-[60px] ps-[21px] mt-[10px] mb-[30px] sm:text-xl "
            type="number"
            name=""
            id=""
            placeholder="Enter Card Number"
          />

          <div className="flex lg:flex-row flex-col justify-between mx-auto w-full gap-5 ">
            <div className="w-full">
              <label
                className="sm:text-xl font-semibold text-[#5B5B5B] "
                htmlFor="expiryDate"
              >
                Enter Expiration Date (MM/YY)
              </label>

              <input
                className="font-normal border-2 w-full  border-gray-300 rounded-2xl  h-[60px] ps-[21px] mt-[10px] sm:text-xl "
                placeholder="Enter Expiration Date"
                type="text"
                name=""
                id=""
              />
            </div>

            <div className="w-full">
              <label
                className="sm:text-xl font-semibold w-full  text-[#5B5B5B] "
                htmlFor="expiryDate"
              >
                CVC
              </label>

              <input
                className="font-normal border-2 w-full border-gray-300 rounded-2xl h-[60px] ps-[21px] mt-[10px] sm:text-xl "
                type="number"
                name=""
                id=""
                placeholder="Enter CVC"
              />
            </div>
          </div>

          <div className="text-[#5B5B5B] mt-[10px] text-base mb-[50px]">
            <input type="checkbox" name="" id="" className="mx-1" />
            Save my information for faster checkout
          </div>

          <button className="rounded-xl md:text-[26px] text-white w-full bg-[#49BBBD] py-4 ">
            Confirm Payment
          </button>
        </div>
        <div className="bg-[#9DCCFF] bg-opacity-20 p-[30px] 2xl:w-[662px] 2xl:h-[636px] mt-10 2xl:mt-0  rounded-2xl">
          <h1 className="text-2xl">Summary</h1>

          <div className="flex flex-col md:flex-row mt-[50px] mb-5 gap-5 ">
            <Image src={main} alt='maintain' />
            <div className="text-lg">
              <p className="mb-[2px] leading-[180%] tracking-[0.36px]">
                adipising elit, sed do eiusmod tempor
              </p>
              <p className="text-[#5B5B5B] leading-[180%] tracking-[0.36px]">
                Lorem ipsum dollar...
              </p>
              <p className="text-2xl leading-[180%] tracking-[0.48px]">
                $24.69
              </p>
            </div>
          </div>

          <hr className=" bg-[#5B5B5B] h-[0.5px]" />

          <div className="flex flex-col md:flex-row  my-5 gap-5 ">
            <Image src={main} alt='maintain' />
            <div className="text-lg">
              <p className="mb-[2px] leading-[180%] tracking-[0.36px]">
                adipising elit, sed do eiusmod tempor
              </p>
              <p className="text-[#5B5B5B] leading-[180%] tracking-[0.36px]">
                Lorem ipsum dollar...
              </p>
              <p className="text-2xl leading-[180%] tracking-[0.48px]">
                $24.69
              </p>
            </div>
          </div>

          <hr className=" bg-[#5B5B5B] h-[0.5px] my-[11px] font-poppins" />

          <div className="flex justify-between mt-3 text-[#5B5B5B] font-semibold text-xl tracking-[0.4] leading-[180%] ">
            <p className='text-[#5B5B5B] text-xl font-semibold'>Subtotal</p>
            <p>$51.38</p>
          </div>

          <hr className="bg-[#5B5B5B] h-[0.5px] my-[11px]" />

          <div className="flex justify-between mt-3 text-[#5B5B5B] font-semibold text-xl tracking-[0.4] leading-[180%]">
            <p>Coupon Discount</p>
            <p>0 %</p>
          </div>

          <hr className="bg-[#5B5B5B] h-[0.5px] my-[11px]" />

          <div className="flex justify-between mt-3 text-[#5B5B5B] font-semibold text-xl tracking-[0.4] leading-[180%]">
            <p>TAX</p>
            <p>5</p>
          </div>

          <hr className="bg-[#5B5B5B] h-[0.5px] my-[11px]" />

          <div className="flex justify-between mt-3 font-semibold text-black leading-[180%] tracking-[0.4px] text-xl">
            <p>Total</p>
            <p>$51.38</p>
          </div>
        </div>
      </div>


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