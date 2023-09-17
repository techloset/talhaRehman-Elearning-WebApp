import React from 'react'
import Image from 'next/image'
import meeting from '@/public/images/meeting.svg'
import setting from '@/public/images/setting_Icon.svg'
import arrowDown from '@/public/images/meetingArrowDown.svg'
import meetingCalander from '@/public/images/meetingCalander.svg'
import meetingTime from '@/public/images/meetingtime.svg'
import meetingLearning from '@/public/images/meetingLearning.svg'
import arrowUp from '@/public/images/meetingArrowUp.svg'
import meetingLock from '@/public/images/meetingLock.svg'
import meetingCalander2 from '@/public/images/meetingCalander2.svg'
import book1 from '@/public/images/meetingbook1.svg'
import book2 from '@/public/images/meetingbook2.svg'

function page() {
    return (
        <>
            <div className='bg-[#9DCCFF]/[0.2] flex  overflow-x-hidden'>

                <div className='ml-[6.06rem] pt-[6.06rem]'>
                    <div className='flex items-center gap-[3.12rem]'>
                        <div className='ml-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                <rect width="50" height="50" fill="#49BBBD" />
                                <line x1="12" y1="24.5" x2="38" y2="24.5" stroke="white" />
                                <line x1="12.1582" y1="24.3011" x2="19.1582" y2="17.3011" stroke="white" />
                                <line x1="12.6097" y1="24.623" x2="20.0744" y2="31.1251" stroke="white" />
                            </svg>
                        </div>
                        <div className='bg-[#fff] rounded-[1.625rem] w-[66.8125rem] h-[9.5625rem] pl-[2.19rem]'>
                            <div className='flex items-center justify-between  mt-[2.19rem] mr-[3.17rem]'>
                                <h2 className='text-[#252641] text-[1.875rem] font-semibold '>UX/UI Design Confrence Meeting</h2>
                                <Image src={setting} alt='setting' />
                            </div>
                            <p className='text-[#252641] text-[1.125rem] tracking-[0.0225rem] mt-3'>9 Lesson <span className='ml-2'>6h 30min</span></p>
                        </div>

                    </div>
                    <div className='mt-[2.44rem]'>
                        <Image src={meeting} alt="Meeting" />
                    </div>

                </div>
                <div className=''>
                    <div className='bg-[#FFFFFF] rounded-[0.9375rem] ml-[2.19rem] mt-[6.06rem] w-[31.125rem] pr-[1.94rem] pl-[1.88rem] pb-4'>
                        <h2 className='text-[#252641] text-[1.875rem] font-semibold pt-[2.5rem] '>Course Contents</h2>
                        <div className='flex justify-between items-center mt-[1.13rem]'>
                            <h3 className='text-[#49BBBD] text-[0.875rem]  font-medium '>2/5 COMPLETED</h3>
                            <Image src={meetingCalander} alt="calander" />
                        </div>
                        <div className='flex gap-1 mt-4'>
                            <div className='w-[5.312rem] h-[0.3125rem] bg-[#49BBBD]'></div>
                            <div className='w-[5.312rem] h-[0.3125rem] bg-[#49BBBD]'></div>
                            <div className='w-[5.312rem] h-[0.3125rem] bg-[#49BBBD]/[0.25]'></div>
                            <div className='w-[5.312rem] h-[0.3125rem] bg-[#49BBBD]/[0.25]'></div>
                            <div className='w-[5.312rem] h-[0.3125rem] bg-[#49BBBD]/[0.25]'></div>
                        </div>
                        <div className='rounded-[1.1875rem] border border-[rgba(73,187,189,0.30)] mt-[1.25rem] px-[1.88rem] pb-2 '>

                            <div className='flex justify-between mt-[0.72rem] '>
                                <p className='text-[#252641] text-[1.125rem] font-medium '>Get Started</p>
                                <Image src={arrowDown} alt='down' />
                            </div>


                            <div className='flex justify-between items-center mt-4'>
                                <div className='flex justify-center gap-2 items-center ml-2'>
                                    <Image src={meetingTime} alt='time' />
                                    <p className='text-[rgba(37,38,65,0.80)] text-[0.875rem] font-medium leading-[1.575rem] tracking-[0.0175rem]'>1 Hour</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <Image src={meetingLearning} alt='time' />
                                    <p className='text-[rgba(37,38,65,0.80)] text-[0.875rem] font-medium leading-[1.575rem] tracking-[0.0175rem]'>5 Lessons</p>
                                </div>
                            </div>
                        </div>
                        {/*  */}

                        <div className="border-2 px-[1.87rem] pb-[12px] pt-[24px] rounded-2xl border-[#49BBBD] mt-3">
                            <div className="flex justify-between ">
                                <p className=" text-[#49BBBD] font-medium text-lg">
                                    Illstarator Structuors
                                </p>
                                <Image src={arrowUp} alt='time' />
                            </div>

                            <div className="flex justify-between items-center text-sm text-[#252641CC] mt-3  ">
                                <div className="flex gap-2 justify-center ml-2">
                                    <Image src={meetingTime} alt='time' />
                                    <p cclassName='text-[rgba(37,38,65,0.80)] text-[0.875rem] font-medium leading-[1.575rem] tracking-[0.0175rem]'>2 Hour</p>
                                </div>

                                <div className="flex gap-2 justify-center">
                                    <Image src={meetingLearning} alt='time' />
                                    <p className='text-[rgba(37,38,65,0.80)] text-[0.875rem] font-medium leading-[1.575rem] tracking-[0.0175rem]'>3 Lessons</p>
                                </div>
                            </div>
                            <hr className="mt-3" />
                            <div className="flex justify-between items-center mt-3 text-[#49BBBD] text-sm mx-2 leading-[1.575rem]">
                                <p>1. lorem ipsumm dolor </p>
                                <p>65:00</p>
                            </div>
                            <hr className="mt-3" />

                            <div className="flex justify-between mt-3 text-[#252641] text-sm mx-2">
                                <p>2. lorem ipsumm dolor </p>
                                <div className="flex gap-2 items-center justify-center">
                                    <p className="text-sm">25:00</p>
                                    <Image src={meetingLock} alt='Lock' />
                                </div>
                            </div>
                            <hr className="mt-3" />

                            <div className="flex justify-between mt-3 text-[#252641] text-sm mx-2">
                                <p>3. lorem ipsumm dolor amet </p>
                                <div className="flex gap-2 items-center justify-center">
                                    <p className="text-sm">30:00</p>
                                    <Image src={meetingLock} alt='Lock' />
                                </div>
                            </div>
                        </div>

                        {/*  */}
                        <div className="border px-[1.88rem] rounded-2xl border-[#49BBBD4D] mt-3 pb-2 ">
                            <div className="flex justify-between items-center ">
                                <p className="font-medium text-xl  text-[#252641] mt-[0.75rem] ">
                                    Using Illstarator
                                </p>
                                <Image src={arrowDown} alt='down' />

                            </div>
                            <div className="flex justify-between  text-[#252641CC] mt-2 ">
                                <div className="flex gap-2 items-center ml-2">
                                    <Image src={meetingTime} alt='time' />
                                    <p className='text-[rgba(37,38,65,0.80)] text-[0.875rem] font-medium leading-[1.575rem] tracking-[0.0175rem]'>1 Hour</p>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <Image src={meetingLearning} alt='time' />
                                    <p className='text-[rgba(37,38,65,0.80)] text-[0.875rem] font-medium leading-[1.575rem] tracking-[0.0175rem]'>4 Lessons</p>
                                </div>
                            </div>
                        </div>
                        <div className="border px-[1.88rem] rounded-2xl border-[#49BBBD4D] mt-3 pb-2 ">
                            <div className="flex justify-between items-center ">
                                <p className="font-medium text-xl  text-[#252641] mt-[0.75rem] ">
                                    What is Pandas?
                                </p>
                                <Image src={arrowDown} alt='down' />

                            </div>
                            <div className="flex justify-between  text-[#252641CC] mt-2 ">
                                <div className="flex gap-2 items-center ml-2">
                                    <Image src={meetingTime} alt='time' />
                                    <p className='text-[rgba(37,38,65,0.80)] text-[0.875rem] font-medium leading-[1.575rem] tracking-[0.0175rem]'>12:54</p>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <Image src={meetingLearning} alt='time' />
                                    <p className='text-[rgba(37,38,65,0.80)] text-[0.875rem] font-medium leading-[1.575rem] tracking-[0.0175rem]'>5 Lessons</p>
                                </div>
                            </div>
                        </div>
                        <div className="border px-[1.88rem] rounded-2xl border-[#49BBBD4D] mt-3 pb-2 ">
                            <div className="flex justify-between items-center ">
                                <p className="font-medium text-xl  text-[#252641] mt-[0.75rem] ">
                                    Work with Numpy
                                </p>
                                <Image src={arrowDown} alt='down' />

                            </div>
                            <div className="flex justify-between  text-[#252641CC] mt-2 ">
                                <div className="flex gap-2 items-center ml-2">
                                    <Image src={meetingTime} alt='time' />
                                    <p className='text-[rgba(37,38,65,0.80)] text-[0.875rem] font-medium leading-[1.575rem] tracking-[0.0175rem]'>59:00</p>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <Image src={meetingLearning} alt='time' />
                                    <p className='text-[rgba(37,38,65,0.80)] text-[0.875rem] font-medium leading-[1.575rem] tracking-[0.0175rem]'>3 Lessons</p>
                                </div>
                            </div>
                        </div>




                    </div>

                    <div className='mt-[1.81rem] ml-[2.19rem] pb-10'>
                        <div className="bg-white rounded-2xl px-[1.88rem] pt-[2.88rem] text-center flex flex-col   ">
                            <div className="flex justify-between items-center">
                                <p className="text-3xl font-semibold mb-[28px]">Book for you</p>
                                <Image src={meetingCalander2} alt='calander' />
                            </div>

                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 pb-[3rem]">
                                <div className="p-4 rounded-xl shadow-2xl max-w-[205px] 2xl:max-h-[309px] mx-auto">
                                    <Image src={book1} alt='book1' />
                                    <p className="text-2xl font-medium mt-[7px] mb-[10px]">
                                        All Benefits of PLUS
                                    </p>
                                    <p className="text-3xl font-semibold text-[#49BBBD]">$24</p>
                                </div>
                                <div className="p-4 rounded-xl shadow-2xl max-w-[205px] 2xl:max-h-[309px] mx-auto">
                                    <Image src={book2} alt='book1' />
                                    <p className="text-2xl font-medium mt-[7px] mb-[10px]">
                                        All Benefits of PLUS
                                    </p>
                                    <p className="text-3xl text-[#49BBBD] font-bold">$24</p>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </>
    )
}

export default page