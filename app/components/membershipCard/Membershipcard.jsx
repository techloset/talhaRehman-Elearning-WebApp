import React from 'react'
import Image from 'next/image'
import laptop from '../../../public/images/membershipLaptop.svg'
 

function Membershipcard() {
  return (
   <>
  <div className="grid xl:grid-cols-2 mx-6 md:mx-16 2xl:mx-[7.5rem] pb-[14.5rem] gap-12">
      <div className="card rounded-xl shadow-xl px-8 py-14 max-w-[786px] 2xl:h-[762px] mx-auto">
        <Image src={laptop} alt="Laptop" />
        <div className="card-body">
          <h2 className="card-title font-bold text-[26px] my-4 mt-2">
            Become a Teacher
          </h2>
          <p className="text-[#696984] leading-[180%] text-xl">
            Class, launched less than a year ago by Blackboard co-founder
            Michael Chasen, integrates exclusively...
          </p>
          <div className="card-actions justify-end mt-12">
            <button className="btn btn-primary float-right bg-[#49BBBD] rounded-xl  text-white  w-[245px] h-[63px] ">
              Apply as a Teacher
            </button>
          </div>
        </div>
      </div>

      <div className="card rounded-xl shadow-xl px-8 py-14 max-w-[786px] 2xl:h-[762px] mx-auto">
      <Image src={laptop} alt="Laptop" />
        <div className="card-body">
          <h2 className="card-title font-bold text-[26px] my-4 mt-2">
            Become a Coursector
          </h2>
          <p className="text-[#696984] leading-[180%] text-xl">
            Class, launched less than a year ago by Blackboard co-founder
            Michael Chasen, integrates exclusively...
          </p>
          <div className="card-actions justify-end mt-12">
            <button className="btn btn-primary float-right bg-[#49BBBD] rounded-xl  text-white  w-[245px] h-[63px] ">
              Apply as a Coursector
            </button>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default Membershipcard