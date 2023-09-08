import Image from 'next/image'
import React from 'react'

function Articles() {
    return (
        <>
            <div>
                <div className='flex justify-between ml-[7.5rem]  pt-[5.81rem] mr-[5.56rem]'>
                    <h2 className='text-[#000000] text-[1.875rem] font-medium tracking-[0.0375rem]'>Marketing Articles</h2>
                    <p className='text-[#49BBBD] text-[1.25rem] font-bold'>See all</p>
                </div>
                <div>
                    <div>
                        <Image/>
                        <div></div>
                        <h2>AWS Certified solutions Architect</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                        <div>
                            <div>

                            </div>
                            <div>
                                <span></span>
                                <h3>$80</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Articles