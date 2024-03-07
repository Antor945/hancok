import React from 'react'

const About = () => {
  return (
    <div className='bg-[#F0F0F0]'>
      <div className='max-w-container mx-auto p-0 m-0 md:py-[136px] py-14'>
       <div className='md:flex flex-wrap '>
        <div className='md:w-2/5 bg-primary  '>
        <div className='md:py-[100px] md:px-[75px] py-[50px] px-[25px]'>
        <h2 className='md:w-[262px] text-white font-pops text-4xl font-bold text-center '>
            Learn more about our company</h2>
        </div>
        </div>
        <div className='md:w-3/5'>
          <div className='bg-AboutImg bg-cover bg-no-repeat bg-center w-full h-full '>
            <div className=' md:pt-[148px] pb-[110px] md:pb-[130px] 
            md:px-[230px] bg-bgColor h-full md:pt-0 pt-[90px] text-center md:text-start'>
               <a href="" className='py-[13px] px-[41px] bg-[#fff] text-primary 
               border-[1px] border-primary font-semibold text-base '>
                Learn More</a>
            </div>
          </div>
        </div>
       </div>
       <div>
        
       </div>
    </div>
    </div>
  )
}

export default About