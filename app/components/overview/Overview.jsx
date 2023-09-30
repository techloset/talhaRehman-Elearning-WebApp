import React from 'react'
import Image from 'next/image'
import profile from '../../../public/images/courseDetailBlog.svg'
import small from '../../../public/images/courseDetailSmall.svg'
import Link from 'next/link'

function Overview() {
  return (
    <>
     <div className="md:mx-28 mx-6 flex xl:flex-row flex-col gap-8 pb-[100px] justify-between font-poppins">
        <div className="xl:w-[55%] ">
          <div className="flex md:flex-row flex-col justify-between gap-4 mt-[59px] mb-[83px] text-xl">
            <button className=" bg-[#0000001A] mt-3 rounded-xl w-[200px] h-[63px] mx-auto">
              Overview
            </button>
            <button className=" bg-[#0000001A] mt-3 rounded-xl w-[200px] h-[63px] mx-auto">
              Overview
            </button>
            <button className=" bg-[#0000001A] mt-3 rounded-xl w-[200px] h-[63px] mx-auto">
              Overview
            </button>
            <button className=" bg-[#49BBBD] text-white mt-3 rounded-xl w-[200px] h-[63px] mx-auto">
              Overview
            </button>
          </div>

          <div className="bg-[#9DCCFF4D] rounded-[20px] p-[50px] 2xl:max-w-[950px] 2xl:h-[764px]">
            <div className="flex flex-col md:flex-row">
              <div className="flex">
                <div className="bg-white rounded-[20px] shadow-md flex flex-col gap-7 justify-center items-center w-[257px] mx-auto h-[199px]">
                  <div className="font-semibold text-lg xl:text-3xl opacity-50">
                    4 out of 5
                  </div>

                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="130"
                      height="22"
                      viewBox="0 0 130 22"
                      fill="none"
                    >
                      <path
                        d="M9.51575 0.40484C9.7113 -0.134947 10.3774 -0.134947 10.5729 0.40484L12.9384 6.93459C13.0208 7.16216 13.2072 7.31765 13.4212 7.33734L19.5611 7.90248C20.0687 7.9492 20.2745 8.67646 19.8878 9.05679L15.2098 13.6576C15.0468 13.8179 14.9756 14.0695 15.0254 14.3091L16.4545 21.1882C16.5727 21.7568 16.0339 22.2064 15.5993 21.9016L10.3427 18.2153C10.1595 18.0869 9.92911 18.0869 9.74591 18.2153L4.48928 21.9016C4.05473 22.2064 3.5159 21.7568 3.63406 21.1882L5.06326 14.3091C5.11306 14.0695 5.04186 13.8179 4.87884 13.6576L0.20085 9.05679C-0.185866 8.67646 0.0199544 7.9492 0.527516 7.90248L6.66745 7.33734C6.88143 7.31765 7.06782 7.16216 7.15027 6.93459L9.51575 0.40484Z"
                        fill="#FDB022"
                      />
                      <path
                        d="M36.9936 0.40484C37.1891 -0.134947 37.8552 -0.134947 38.0508 0.40484L40.4163 6.93459C40.4987 7.16216 40.6851 7.31765 40.8991 7.33734L47.039 7.90248C47.5465 7.9492 47.7524 8.67646 47.3656 9.05679L42.6877 13.6576C42.5246 13.8179 42.4534 14.0695 42.5032 14.3091L43.9324 21.1882C44.0506 21.7568 43.5118 22.2064 43.0772 21.9016L37.8205 18.2153C37.6373 18.0869 37.407 18.0869 37.2238 18.2153L31.9672 21.9016C31.5326 22.2064 30.9938 21.7568 31.1119 21.1882L32.5411 14.3091C32.5909 14.0695 32.5197 13.8179 32.3567 13.6576L27.6787 9.05679C27.2919 8.67646 27.4978 7.9492 28.0053 7.90248L34.1453 7.33734C34.3592 7.31765 34.5456 7.16216 34.6281 6.93459L36.9936 0.40484Z"
                        fill="#FDB022"
                      />
                      <path
                        d="M64.4714 0.40484C64.6669 -0.134947 65.333 -0.134947 65.5286 0.40484L67.8941 6.93459C67.9765 7.16216 68.1629 7.31765 68.3769 7.33734L74.5168 7.90248C75.0244 7.9492 75.2302 8.67646 74.8435 9.05679L70.1655 13.6576C70.0024 13.8179 69.9312 14.0695 69.981 14.3091L71.4102 21.1882C71.5284 21.7568 70.9896 22.2064 70.555 21.9016L65.2984 18.2153C65.1152 18.0869 64.8848 18.0869 64.7016 18.2153L59.445 21.9016C59.0104 22.2064 58.4716 21.7568 58.5898 21.1882L60.0189 14.3091C60.0688 14.0695 59.9975 13.8179 59.8345 13.6576L55.1565 9.05679C54.7698 8.67646 54.9756 7.9492 55.4832 7.90248L61.6231 7.33734C61.8371 7.31765 62.0235 7.16216 62.1059 6.93459L64.4714 0.40484Z"
                        fill="#FDB022"
                      />
                      <path
                        d="M91.9492 0.40484C92.1448 -0.134947 92.8109 -0.134947 93.0064 0.40484L95.3719 6.93459C95.4544 7.16216 95.6408 7.31765 95.8547 7.33734L101.995 7.90248C102.502 7.9492 102.708 8.67646 102.321 9.05679L97.6433 13.6576C97.4803 13.8179 97.4091 14.0695 97.4589 14.3091L98.8881 21.1882C99.0062 21.7568 98.4674 22.2064 98.0328 21.9016L92.7762 18.2153C92.593 18.0869 92.3626 18.0869 92.1795 18.2153L86.9228 21.9016C86.4882 22.2064 85.9494 21.7568 86.0676 21.1882L87.4968 14.3091C87.5466 14.0695 87.4754 13.8179 87.3123 13.6576L82.6343 9.05679C82.2476 8.67646 82.4535 7.9492 82.961 7.90248L89.1009 7.33734C89.3149 7.31765 89.5013 7.16216 89.5837 6.93459L91.9492 0.40484Z"
                        fill="#FDB022"
                      />
                      <path
                        d="M119.427 0.40484C119.622 -0.134947 120.289 -0.134947 120.485 0.40484L122.85 6.93459C122.932 7.16216 123.119 7.31765 123.332 7.33734L129.472 7.90248C129.98 7.9492 130.185 8.67646 129.8 9.05679L125.121 13.6576C124.958 13.8179 124.887 14.0695 124.937 14.3091L126.366 21.1882C126.484 21.7568 125.945 22.2064 125.511 21.9016L120.254 18.2153C120.071 18.0869 119.84 18.0869 119.657 18.2153L114.401 21.9016C113.967 22.2064 113.427 21.7568 113.545 21.1882L114.974 14.3091C115.025 14.0695 114.954 13.8179 114.79 13.6576L110.112 9.05679C109.725 8.67646 109.931 7.9492 110.439 7.90248L116.579 7.33734C116.792 7.31765 116.979 7.16216 117.061 6.93459L119.427 0.40484Z"
                        fill="#FDB022"
                      />
                    </svg>
                  </div>

                  <div className="text-gray-600 text-xl opacity-50">
                    Top Rating
                  </div>
                </div>
                <div className="opacity-50 mx-10 hidden md:block">
                  <p className="mt-[10px]">5Stars</p>
                  <p className="mt-[13px]">4Stars</p>
                  <p className="mt-[13px]">3Stars</p>
                  <p className="mt-[13px]">2Stars</p>
                  <p className="mt-[13px]">1Stars</p>
                </div>
              </div>
              <div className="w-[100%]  flex flex-col">
                <div className="w-[100%] ">
                  <div class="w-[100%] mt-[13px] bg-gray-200 rounded-sm h-2.5 mb-4 ">
                    <div class="bg-[#49BBBD] h-2.5 rounded-sm   w-[75%] "></div>
                  </div>
                </div>
                <div className="w-[100%] ">
                  <div class="w-[100%] mt-[13px] bg-gray-200 rounded-sm h-2.5 mb-4 ">
                    <div class="bg-[#49BBBD] h-2.5 rounded-sm   w-[75%] "></div>
                  </div>
                </div>

                <div className="w-[100%] ">
                  <div class="w-[100%] mt-[13px] bg-gray-200 rounded-sm h-2.5 mb-4 ">
                    <div class="bg-[#49BBBD] h-2.5 rounded-sm   w-[75%] "></div>
                  </div>
                </div>

                <div className="w-[100%] ">
                  <div class="w-[100%] mt-[13px] bg-gray-200 rounded-sm h-2.5 mb-4 ">
                    <div class="bg-[#49BBBD] h-2.5 rounded-sm   w-[75%] "></div>
                  </div>
                </div>

                <div className="w-[100%] ">
                  <div class="w-[100%] mt-[13px] bg-gray-200 rounded-sm h-2.5 mb-4 ">
                    <div class="bg-[#49BBBD] h-2.5 rounded-sm   w-[75%] "></div>
                  </div>
                </div>
              </div>
            </div>


            <div className="mt-[81px]">
              <div className="flex md:flex-row flex-col justify-between">
                <div className="flex items-center">
                  <Image src={profile} alt="profile"/>
                  <div className="ms-3">
                    <p className="text-lg">Lina</p>
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="130"
                        height="22"
                        viewBox="0 0 130 22"
                        fill="none"
                      >
                        <path
                          d="M9.51575 0.40484C9.7113 -0.134947 10.3774 -0.134947 10.5729 0.40484L12.9384 6.93459C13.0208 7.16216 13.2072 7.31765 13.4212 7.33734L19.5611 7.90248C20.0687 7.9492 20.2745 8.67646 19.8878 9.05679L15.2098 13.6576C15.0468 13.8179 14.9756 14.0695 15.0254 14.3091L16.4545 21.1882C16.5727 21.7568 16.0339 22.2064 15.5993 21.9016L10.3427 18.2153C10.1595 18.0869 9.92911 18.0869 9.74591 18.2153L4.48928 21.9016C4.05473 22.2064 3.5159 21.7568 3.63406 21.1882L5.06326 14.3091C5.11306 14.0695 5.04186 13.8179 4.87884 13.6576L0.20085 9.05679C-0.185866 8.67646 0.0199544 7.9492 0.527516 7.90248L6.66745 7.33734C6.88143 7.31765 7.06782 7.16216 7.15027 6.93459L9.51575 0.40484Z"
                          fill="#FDB022"
                        />
                        <path
                          d="M36.9936 0.40484C37.1891 -0.134947 37.8552 -0.134947 38.0508 0.40484L40.4163 6.93459C40.4987 7.16216 40.6851 7.31765 40.8991 7.33734L47.039 7.90248C47.5465 7.9492 47.7524 8.67646 47.3656 9.05679L42.6877 13.6576C42.5246 13.8179 42.4534 14.0695 42.5032 14.3091L43.9324 21.1882C44.0506 21.7568 43.5118 22.2064 43.0772 21.9016L37.8205 18.2153C37.6373 18.0869 37.407 18.0869 37.2238 18.2153L31.9672 21.9016C31.5326 22.2064 30.9938 21.7568 31.1119 21.1882L32.5411 14.3091C32.5909 14.0695 32.5197 13.8179 32.3567 13.6576L27.6787 9.05679C27.2919 8.67646 27.4978 7.9492 28.0053 7.90248L34.1453 7.33734C34.3592 7.31765 34.5456 7.16216 34.6281 6.93459L36.9936 0.40484Z"
                          fill="#FDB022"
                        />
                        <path
                          d="M64.4714 0.40484C64.6669 -0.134947 65.333 -0.134947 65.5286 0.40484L67.8941 6.93459C67.9765 7.16216 68.1629 7.31765 68.3769 7.33734L74.5168 7.90248C75.0244 7.9492 75.2302 8.67646 74.8435 9.05679L70.1655 13.6576C70.0024 13.8179 69.9312 14.0695 69.981 14.3091L71.4102 21.1882C71.5284 21.7568 70.9896 22.2064 70.555 21.9016L65.2984 18.2153C65.1152 18.0869 64.8848 18.0869 64.7016 18.2153L59.445 21.9016C59.0104 22.2064 58.4716 21.7568 58.5898 21.1882L60.0189 14.3091C60.0688 14.0695 59.9975 13.8179 59.8345 13.6576L55.1565 9.05679C54.7698 8.67646 54.9756 7.9492 55.4832 7.90248L61.6231 7.33734C61.8371 7.31765 62.0235 7.16216 62.1059 6.93459L64.4714 0.40484Z"
                          fill="#FDB022"
                        />
                        <path
                          d="M91.9492 0.40484C92.1448 -0.134947 92.8109 -0.134947 93.0064 0.40484L95.3719 6.93459C95.4544 7.16216 95.6408 7.31765 95.8547 7.33734L101.995 7.90248C102.502 7.9492 102.708 8.67646 102.321 9.05679L97.6433 13.6576C97.4803 13.8179 97.4091 14.0695 97.4589 14.3091L98.8881 21.1882C99.0062 21.7568 98.4674 22.2064 98.0328 21.9016L92.7762 18.2153C92.593 18.0869 92.3626 18.0869 92.1795 18.2153L86.9228 21.9016C86.4882 22.2064 85.9494 21.7568 86.0676 21.1882L87.4968 14.3091C87.5466 14.0695 87.4754 13.8179 87.3123 13.6576L82.6343 9.05679C82.2476 8.67646 82.4535 7.9492 82.961 7.90248L89.1009 7.33734C89.3149 7.31765 89.5013 7.16216 89.5837 6.93459L91.9492 0.40484Z"
                          fill="#FDB022"
                        />
                        <path
                          d="M119.427 0.40484C119.622 -0.134947 120.289 -0.134947 120.485 0.40484L122.85 6.93459C122.932 7.16216 123.119 7.31765 123.332 7.33734L129.472 7.90248C129.98 7.9492 130.185 8.67646 129.8 9.05679L125.121 13.6576C124.958 13.8179 124.887 14.0695 124.937 14.3091L126.366 21.1882C126.484 21.7568 125.945 22.2064 125.511 21.9016L120.254 18.2153C120.071 18.0869 119.84 18.0869 119.657 18.2153L114.401 21.9016C113.967 22.2064 113.427 21.7568 113.545 21.1882L114.974 14.3091C115.025 14.0695 114.954 13.8179 114.79 13.6576L110.112 9.05679C109.725 8.67646 109.931 7.9492 110.439 7.90248L116.579 7.33734C116.792 7.31765 116.979 7.16216 117.061 6.93459L119.427 0.40484Z"
                          fill="#FDB022"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center mt-3 text-[#696984] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-[#D9D9D9]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-sm">3 Month</p>
                </div>
              </div>

              <p className="text-[#5B5B5B] text-xl leading-[180%] mt-5 pb-[22px]">
                Class, launched less than a year ago by Blackboard co-founder
                Michael Chasen, integrates exclusively...
              </p>

              <hr className="bg-gray-400 h-[2px]" />
            </div>
            <div className="mt-[24px]">
              <div className="flex md:flex-row flex-col justify-between">
                <div className="flex items-center">
                <Image src={profile} alt="profile"/>
                  <div className="ms-3">
                    <p className="text-lg">Lina</p>
                  </div>
                </div>
                <div className="flex gap-2 items-center mt-3 text-[#696984] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-[#D9D9D9]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-sm">3 Month</p>
                </div>
              </div>

              <p className="text-[#5B5B5B] text-xl leading-[180%] mt-5 ">
                Class, launched less than a year ago by Blackboard co-founder
                Michael Chasen, integrates exclusively...
              </p>
            </div>
          </div>
        </div>

        <div className="p-[30px] rounded-2xl bg-white xl:-mt-[310px] xl:w-[35%] 2xl:max-w-[501px] 2xl:h-[1275px] shadow-2xl xl:shadow-none">
          <Image src={small} alt='small' />
          <div className="flex justify-between mt-[18px]">
            <p className="font-semibold text-2xl md:text-[45px] ">$49.65</p>
            <del className="font-semibold text-xl  md:text-[28px]  opacity-50 ">
              S99.99
            </del>
            <p className="font-semibold text-xl md:text-[28px] opacity-50  ">
              50% Off
            </p>
          </div>

          <p className="text-center  text-[#49BBBD] text-xl font-semibold mt-[30px] tracking-[0.4px] mb-[5px]">
            {" "}
            11 hour left at this price
          </p>

     <Link href="./checkout">     <button className="bg-[#49BBBD] w-full text-white text-center py-3 my-[30px]  text-[20px]  font-semibold rounded-2xl">
            Buy Now
          </button> </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="442"
            height="1"
            viewBox="0 0 442 1"
            fill="none"
          >
            <path d="M0 0.5H442" stroke="#696984" />
          </svg>

          <p className="text-xl md:text-3xl font-semibold mt-[30px]">
            This Course included
          </p>

          <div className="flex mt-[34px] text-sm font-semibold items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-[20px] text-[#49BBBD] "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

            <p className="font-semibold opacity-50">Money Bank Guarantee</p>
          </div>

          <div className="flex mt-3 text-sm font-semibold items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-[20px] text-[#49BBBD] "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
              />
            </svg>

            <p className="font-semibold opacity-50">Access on All devices</p>
          </div>

          <div className="flex mt-3 text-sm font-semibold items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-[20px] text-[#49BBBD] "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>

            <p className="font-semibold opacity-50">
              Certificate of completion
            </p>
          </div>

          <div className="flex mt-3 text-sm font-semibold items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-[20px] text-[#49BBBD] "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
              />
            </svg>

            <p className="font-semibold opacity-50">32 Modules</p>
          </div>
          <hr className="h-[1px] w-[442px] mx-auto bg-gray-600 mt-[32px]" />

          <p className="text-xl md:text-3xl font-semibold mb-[30px] mt-[34px]">
            Training 5 or more people
          </p>

          <p className="text-[#696984] leading-[180%] text-sm">
            Class, launched less than a year ago by Blackboard co-founder
            Michael Chasen, integrates exclusively...
          </p>

          <hr className="h-[1px] w-[442px] mx-auto bg-gray-600 my-[39px]" />

          <p className="text-xl md:text-3xl font-semibold mb-[53px]">
            Share this course
          </p>

          <div className="flex gap-[25px]">
            <button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              className="mb-2 inline-block rounded-full  p-3 text-xs font-medium uppercase leading-normal text-white bg-[#696984] shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </button>

            <button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              className="mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white bg-[#696984] shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </button>

            <button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              className="mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white bg-red-600 shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </button>

            <button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              className="mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white bg-[#696984] shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </button>

            <button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              className="mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white bg-[#696984] shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            >
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewbox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="telegram-1"
                  d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"
                />
              </svg>
            </button>

            <button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              className="mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white bg-[#696984] shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Overview