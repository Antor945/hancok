import React from 'react'

const Services = () => {
    return (
        <div className='flex-wrap md:flex  items-center'>
            <div className='md:w-1/2 flex md:justify-end justify-center'>
                <div className='md:mr-[149px] ml-0 md:ml-10'>
                    <h2 className='text-[#000] md:text-[64px] text-[45px] font-bold font-pops 
                    text-center md:text-start'>
                        Our Services</h2>
                    <p className='md:w-[405px] w-[337px]  text-[#6C6C6C] font-pops text-base 
                    font-medium   text-center md:text-start md:mb-0 mb-5 md:p-0 p-3'>
                        It is a long established fact that a reader will be distracted by the
                        readable content of a page when looking at its layout.
                    </p>
                </div>
            </div>
            <div className=' md:w-1/2'>
                <div className=' bg-Services1 bg-cover bg-no-repeat bg-center '>
                    <div className='w-full h-full pt-[147px] pb-[137px] bg-bgColor'>
                        <div className=' md:ml-[116px]'>
                            <h2 className='text-white font-pops text-4xl font-bold pb-12
                            text-center md:text-start'>
                                Modern natural oil and gas</h2>
                            <div className='text-center'>
                            <a href="" className='py-[13px] px-[41px] bg-primary text-[#fff] text-base font-semibold
                            '>Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:w-1/2 mt-10 md:mt-0'>
                <div className=' bg-Services2 bg-cover bg-no-repeat bg-center '>
                    <div className='w-full h-full pt-[147px] pb-[137px] bg-bgColor '>
                        <div className='md:ml-[116px] justify-center md:justify-start' >
                            <h2 className='text-white font-pops text-4xl font-bold pb-12
                            text-center md:text-start'>
                                Supply of national industries</h2>
                            <div className='md:text-start text-center'>
                            <a href="" className='py-[13px] px-[41px] bg-primary text-[#fff] font-semibold text-base
                            '>Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:w-1/2 mt-10 md:mt-0'>
                <div className=' bg-Services3 bg-cover bg-no-repeat bg-center '>
                    <div className='w-full h-full pt-[147px] pb-[137px] bg-bgColor'>
                        <div className='md:ml-[116px]'>
                            <h2 className='text-white font-pops text-4xl font-bold pb-12
                            text-center md:text-start'>
                                National fuel distribution and</h2>
                            <div className='text-center'>
                            <a href="" className='py-[13px] px-[41px] bg-primary text-[#fff] text-base font-semibold'>
                                Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services