import React from 'react'

const Banner = () => {
  return (
    <div className='bg-banner bg-cover bg-no-repeat'>
      <div className='h-full w-full bg-bgColor md:pt-[250px] pt-[40px] md:pb-[250px] pb-[200px]'>
      <div className=' max-w-container mx-auto list-none '>
          <h1 className='font-pops md:text-[64px] text-[37px]
          md:ml-0 ml-10 font-bold text-[#fff] md:w-[842px] '>
          We exist since 1975 on the oil and gas industry.
          </h1>
          <div className='md:ml-0 ml-10 mt-[31px]'>
            <a href="" className='py-[13px] px-[41px] bg-primary text-[#fff] 
             '>LEARN MORE</a>
          </div>
      </div>
      </div>

    </div>
  )
}

export default Banner