import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Image from 'next/image'
import headerImg from '../../public/images/blogMain.svg'
import read1 from '../../public/images/readblog1.svg'
import read2 from '../../public/images/readblog2.svg'
import read3 from '../../public/images/readblog3.svg'
import read4 from '../../public/images/readblog4.svg'
import Articles from '../components/marketingArticles/Articles'
import ReleatedArticle from '../components/relatedArticle/ReleatedArticle'


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
            <div className='bg-[#9DCCFF]/[0.2] flex flex-wrap xl:flex-nowrap justify-center xl:justify-normal '>
                <div className='2xl:ml-[7.13rem] xl:ml-[3rem] pt-[4.81rem] pb-[6.31rem]'>
                    <h2 className='text-2xl font-bold text-[#000] xs:w-[90%]'>By Themadbrains in <span className='text-[#49BBBD]'>inspiration</span></h2>
                    <h1 className='text-[#2F327D] text-[2.75rem] font-semibold sm:w-[41.875rem] mt-[1.5rem] xs:w-[95%]'>Why Swift UI Should Be on the Radar of Every Mobile Developer</h1>
                    <p className='text-[1.5rem] text-[#696984] mt-[0.88rem] font-normal leading-[2.7rem] tracking-[0.03rem] sm:w-[43rem] xs:w-[905]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    <button className='text-[#fff] text-[1rem] font-bold w-[14.75rem] h-[3.9375rem] rounded-[0.75rem] bg-[#49BBBD] mt-[1.56rem]'>Start learning now</button>
                </div>
                <div className='2xl:ml-[11rem] mt-[4.37rem]'>
                    <Image src={headerImg} alt='laptop' />
                </div>
            </div>
            {/* Reading blog List */}
            <div className='mt-[5rem] sm:ml-[6.87rem]'>
                <h2 className='text-[1.875rem] font-bold text-[rgba(0, 0, 0, 0.80)] '>Reading blog list</h2>
                <div className='mb-[5rem] mt-[1.62rem] flex flex-wrap justify-center lg:justify-normal gap-5 2xl:gap-0'>
                    {blog.map((info) => (<div className='relative sm:mr-[4.75rem]'>
                        {info.img}
                        <div className='w-[14.75rem] absolute h-[3.9375rem] rounded-[0.75rem] flex justify-center items-center bg-[#fff]/[0.70] top-[70%] left-[18%] z-50 text-[1.5rem] text-center font-bold text-[#000]'>{info.title}</div>
                    </div>
                    ))}
                </div>
            </div>
            {/* Related Blog */}

            <ReleatedArticle/>
            
            {/* Marketing Article */}

            <Articles/>

            {/* Footer */}

            <Footer />
        </>
    )
}

export default page