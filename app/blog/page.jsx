import React from 'react'
import Header from '../components/header.jsx/Header'
import Footer from '../components/footer/Footer'
import Image from 'next/image'
import headerImg from '../../public/images/blogMain.svg'
import read1 from '../../public/images/readblog1.svg'
import read2 from '../../public/images/readblog2.svg'
import read3 from '../../public/images/readblog3.svg'
import read4 from '../../public/images/readblog4.svg'
import blogMain from "../../public/images/BlogArticle.svg"
import profileLogo from '../../public/images/profile.svg'
import eye from '../../public/images/blogeye.svg'
import Articles from '../components/marketingArticles/Articles'


function page() {
    const blog = [
        {
            id: 1,
            img: <Image src={read1} alt='blog' className='w-[22.25rem] h-[20.4375rem]' />,
            title: "UX/UI"
        },
        {
            id: 2,
            img: <Image src={read2} alt='blog' className='w-[22.25rem] h-[20.4375rem]' />,
            title: "React"
        },
        {
            id: 3,
            img: <Image src={read3} alt='blog' className='w-[22.25rem] h-[20.4375rem]' />,
            title: "PHP"
        },
        {
            id: 4,
            img: <Image src={read4} alt='blog' className='w-[22.25rem] h-[20.4375rem]' />,
            title: "JavaScript"
        }
    ]
    return (
        <>
            {/* Header */}
            <Header />
            {/* main Section */}
            <div className='bg-[#9DCCFF]/[0.2] flex '>
                <div className='ml-[7.13rem] pt-[4.81rem] pb-[6.31rem]'>
                    <h2 className='text-2xl font-bold text-[#000]'>By Themadbrains in <span className='text-[#49BBBD]'>inspiration</span></h2>
                    <h1 className='text-[#2F327D] text-[2.75rem] font-semibold w-[41.875rem] mt-[1.5rem]'>Why Swift UI Should Be on the Radar of Every Mobile Developer</h1>
                    <p className='text-[1.5rem] text-[#696984] mt-[0.88rem] font-normal leading-[2.7rem] tracking-[0.03rem] w-[43rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    <button className='text-[#fff] text-[1rem] font-bold w-[14.75rem] h-[3.9375rem] rounded-[0.75rem] bg-[#49BBBD] mt-[1.56rem]'>Start learning now</button>
                </div>
                <div className='ml-[11rem] mt-[4.37rem]'>
                    <Image src={headerImg} alt='laptop' />
                </div>
            </div>
            {/* Reading blog List */}
            <div className='mt-[5rem] ml-[6.87rem]'>
                <h2 className='text-[1.875rem] font-bold text-[rgba(0, 0, 0, 0.80)]'>Reading blog list</h2>
                <div className='mb-[5rem] mt-[1.62rem] flex'>
                    {blog.map((info) => (<div className='relative mr-[4.75rem]'>
                        {info.img}
                        <div className='w-[14.75rem] absolute h-[3.9375rem] rounded-[0.75rem] flex justify-center items-center bg-[#fff]/[0.70] top-[70%] left-[18%] z-50 text-[1.5rem] text-center font-bold text-[#000]'>{info.title}</div>
                    </div>
                    ))}
                </div>
            </div>
            {/* Related Blog */}
            <div className='bg-[#9DCCFF]/[0.2] pb-[11.8rem]'>
                <div className='flex justify-between ml-[7.5rem]  pt-[5.81rem] mr-[9.31rem]'>
                    <h2 className='text-[#000000] text-[1.875rem] font-medium tracking-[0.0375rem]'>Related Blog </h2>
                    <p className='text-[#49BBBD] text-[1.25rem] font-bold'>See all</p>
                </div>
                <div className='mt-[2.56rem] ml-[7.25rem] gap-[6.19rem] flex'>
                    <div className='bg-[#FFFFFF] rounded-[1.25rem] shadow-[0px 18.83px 47.08px 0px rgb(47, 50, 125)] pt-[3.75rem] pb-[4.01rem] px-[2.1rem] w-[49.125rem] flex flex-col'>
                        <Image src={blogMain} alt='Teacher' />
                        <h3 className='text-[#252641] text-[1.625rem] font-medium leading-[2.925rem] w-[38rem] mt-[0.77rem]'>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h3>
                        <div className='flex items-center mt-[0.98rem]'> <div className='w-[4.4275rem] h-[4.4275rem] rounded-full bg-[#D9D9D9] flex items-end'><Image src={profileLogo} alt='Profile Pic' /></div>
                            <p className='text-[#000] text-[1.125rem] font-medium leading-[0.0225rem]  ml-[1.05rem]'>Lina</p></div>
                        <p className='mt-[1.48rem] text-[#696984] text-[1.25rem] leading-[2.25rem] w-[39rem]'>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                        <div className='flex justify-between mt-[2.81rem]'><button className='text-[#696984] text-[1.25rem] leading-[2.25rem] underline tracking-[0.025rem]'>Read more</button> <div className='flex items-center gap-6'> <Image  src={eye} alt='eyes' /> 251,232</div></div>
                    </div>

                    <div className='bg-[#FFFFFF] rounded-[1.25rem] shadow-[0px 18.83px 47.08px 0px rgb(47, 50, 125)] pt-[3.75rem] pb-[4.01rem] px-[2.1rem] w-[49.125rem] flex flex-col'>
                        <Image src={blogMain} alt='Teacher' />
                        <h3 className='text-[#252641] text-[1.625rem] font-medium leading-[2.925rem] w-[38rem] mt-[0.77rem]'>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h3>
                        <div className='flex items-center mt-[0.98rem]'> <div className='w-[4.4275rem] h-[4.4275rem] rounded-full bg-[#D9D9D9] flex items-end'><Image src={profileLogo} alt='Profile Pic' /></div>
                            <p className='text-[#000] text-[1.125rem] font-medium leading-[0.0225rem]  ml-[1.05rem]'>Lina</p></div>
                        <p className='mt-[1.48rem] text-[#696984] text-[1.25rem] leading-[2.25rem] w-[39rem]'>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                        <div className='flex justify-between mt-[2.81rem]'><button className='text-[#696984] text-[1.25rem] leading-[2.25rem] underline tracking-[0.025rem]'>Read more</button> <div className='flex items-center gap-6'> <Image  src={eye} alt='eyes' /> 251,232</div></div>
                    </div>
                </div>
            </div>
            {/* Marketing Article */}
            <Articles/>

            {/* Footer */}
            <Footer />
        </>
    )
}

export default page