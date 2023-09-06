import React from 'react'
import Image from 'next/image'
import main from '../../../public/images/FeaturesMain.svg'
import featureIcon1 from '../../../public/images/FeatureIcon1.svg'
import featureIcon2 from '../../../public/images/FeatureIcon2.svg'
import featureIcon3 from '../../../public/images/FeatureIcon3.svg'
import featurePic1 from '../../../public/images/FeaturePic1.svg'
import featurePic2 from '../../../public/images/FeaturePic2.svg'
import featurePic3 from '../../../public/images/FeaturePic3.svg'
import featurePic4 from '../../../public/images/FeaturePic4.svg'

function OurFeatures() {
    return (
        <>
            <div className='mt-[11.31rem]'>
                <h2 className='text-[2.25rem] font-bold leading-[4.05rem] text-[#2F327D] text-center'>Our <span className='text-[#00CBB8]'> Features</span></h2>
                <p className='text-[1.5rem] text-[#696984] text-center font-normal leading-[2.7rem] mt-[1.25rem]'>This very extraordinary feature, can make learning activities more efficient</p>
                <div className='ml-[10.5rem] mt-[11rem] '>
                    <div className='grid grid-cols-12'>
                        <div className='relative col-span-7'>
                            <div className='absolute w-[8.75rem] h-[8.75rem] rounded-full bg-[#33EFA0] -top-20 left-16'></div>
                            <div className='absolute w-[1.875rem] h-[1.875rem] rounded-full bg-[#33D9EF] -top-28 left-48'></div>
                            <div className='absolute w-[4.75rem] h-[4.75rem] rounded-full bg-[#33EFA0] -top-10 left-20 blur-2xl z-10'></div>
                            <Image src={main} alt="Main Image" className='absolute' />
                        </div>
                        <div className='col-span-5'>
                            <h2 className='text-[2.5rem] font-semibold leading-[4rem] text-[#2F327D] w-[33.8rem]'>A <span className='text-[#00CBB8]'> vuser interface </span> designed for the classroom</h2>
                            <div className='mt-[3.19rem]'>
                                <div className='flex'>
                                    <div className='w-[3.75rem] h-[3.75rem] bg-[#FBFBFB] featureBoxShadow rounded-full relative'> <Image src={featureIcon1} alt='Icon' className='absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] ' /> </div>
                                    <div className='w-[26.6875rem] ml-[2.62rem]'> <h3 className='text-[#696984] text-[1.375rem] font-normal leading-[2.475rem] tracking-[0.0275rem]'>Teachers don’t get lost in the grid view and have a dedicated Podium space.</h3></div>
                                </div>
                                <div className='flex mt-[2.5rem]'>
                                    <div className='w-[3.75rem] h-[3.75rem] bg-[#FBFBFB] featureBoxShadow rounded-full relative'> <Image src={featureIcon2} alt='Icon' className='absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] ' /> </div>
                                    <div className='w-[25.6875rem] ml-[2.62rem]'> <h3 className='text-[#696984] text-[1.375rem] font-normal leading-[2.475rem] tracking-[0.0275rem]'>TA’s and presenters can be moved to the front of the class.</h3></div>
                                </div>
                                <div className='flex mt-[2.5rem]'>
                                    <div className='w-[3.75rem] h-[3.75rem] bg-[#FBFBFB] featureBoxShadow rounded-full relative'> <Image src={featureIcon3} alt='Icon' className='absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] ' /> </div>
                                    <div className='w-[25.6875rem] ml-[2.62rem]'> <h3 className='text-[#696984] text-[1.375rem] font-normal leading-[2.475rem] tracking-[0.0275rem]'>Teachers can easily see all students and class data at one time.</h3></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  */}

                    <div className='mt-[15rem]'>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-6'>
                                <h2 className='text-[2.5rem] font-semibold leading-[4rem] text-[#2F327D] ml-24 w-[24rem] mt-48'> <span className='text-[#00CBB8]'>Tools</span> For Teachers And Learners</h2>
                                <p className='text-[#696984] text-[1.375rem] leading-[2.475rem] tracking-[0.0275rem] w-[33rem] mt-[1.25rem] ml-24'>Class has a dynamic set of teaching tools built to be deployed and used during class.
                                    Teachers can handout assignments in real-time for students to complete and submit.</p>
                            </div>
                            <div className='col-span-6'> <Image src={featurePic1} alt="Pic of Learning Girl" /> </div>
                        </div>
                        <div className='grid grid-cols-12 mt-[12.75rem] '>
                            <div className='col-span-6'> <Image src={featurePic2} alt="Pic of Learning Girl" /> </div>
                            <div className='col-span-6'>
                                <h2 className='text-[2.5rem] font-semibold leading-[4rem] text-[#2F327D] ml-24 w-[24rem] mt-48'>Assessments,  <span className='text-[#00CBB8]'>Quizzes</span>, Tests </h2>
                                <p className='text-[#696984] text-[1.375rem] leading-[2.475rem] tracking-[0.0275rem] w-[32rem] mt-[1.25rem] ml-24'>Easily launch live assignments, quizzes, and tests.
                                    Student results are automatically entered in the online gradebook.</p>
                            </div>

                        </div>
                        <div className='grid grid-cols-12 mt-[12.75rem] gap-[9rem] '>
                            
                            <div className='col-span-4'>
                                <h2 className='text-[2.5rem] font-semibold leading-[4rem] text-[#2F327D] ml-24 w-[24rem] mt-48'><span className='text-[#00CBB8]'>Class Management </span>Tools for Educators</h2>
                                <p className='text-[#696984] text-[1.375rem] leading-[2.475rem] tracking-[0.0275rem] w-[32rem] mt-[1.25rem] ml-24'>Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.</p>
                            </div>
                            <div className='col-span-8'> <Image src={featurePic3} alt="Pic of Learning Girl" /> </div>

                        </div>
                        <div className='grid grid-cols-12 mt-[12.75rem] '>
                            <div className='col-span-6'> <Image src={featurePic4} alt="Pic of Learning Girl" /> </div>
                            <div className='col-span-6'>
                                <h2 className='text-[2.5rem] font-semibold leading-[4rem] text-[#2F327D] ml-24 w-[24rem] mt-48'> One-on-One <span className='text-[#00CBB8]'>Discussions</span></h2>
                                <p className='text-[#696984] text-[1.375rem] leading-[2.475rem] tracking-[0.0275rem] w-[32rem] mt-[1.25rem] ml-24'>Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.</p>
                            </div>

                        </div>

                        <button className='text-[#49BBBD] text-[1.5rem] font-normal leading-[2.7rem] tracking-[0.03rem] w-[17.5rem] h-[5rem] rounded-[5rem] border border-[#49BBBD] block mx-auto text-center mt-[9.3rem]'>See more features</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default OurFeatures