import React from 'react'
import Petroimg1 from '../../assets/Petroimg1.png'
import Petroimg2 from '../../assets/Petroimg2.png'
import Petroimg3 from '../../assets/Petroimg3.png'
import Petroimg4 from '../../assets/Petroimg4.png'
const Petromaax = () => {
    return (
        <div className='bg-[#FFFFFF]'>
            <div className='max-w-container mx-auto m-0 p-0 md:py-[124px] py-[50px] '>
                <div className='md:flex flex-wrap justify-between'>
                <div className=' md:w-[250px] flex  items-center justify-center md:justify-start md:mb-0 mb-[15px]'>
                  <picture>
                    <img src={Petroimg1} alt="" />
                  </picture>
                  <h2 className='text-[#858585] font-black text-4xl font-pops ml-5'> 
                  PETROMAX
                  </h2>
                </div>
                <div className='md:w-[250px] flex  items-center justify-center md:justify-start md:mb-0 mb-[15px]'>
                  <picture>
                    <img src={Petroimg2} alt="" />
                  </picture>
                  <h2 className='text-[#858585] font-bold text-4xl font-pops ml-5'> 
                  Thebron
                  </h2>
                </div>
                <div className=' md:w-[250px] flex  items-center justify-center md:justify-start md:mb-0 mb-[15px]'>
                  <picture>
                    <img src={Petroimg3} alt="" />
                  </picture>
                  <h2 className='text-[#858585] font-black text-4xl ml-5'> 
                  BARCOO
                  </h2>
                </div>
                <div className='md:w-[250px] flex  items-center justify-center md:justify-start md:mb-0 mt-[15px]'>
                  <picture>
                    <img src={Petroimg4} alt="" />
                  </picture>
                  <h2 className='text-[#858585] font-bold text-4xl ml-5'> 
                  BioSool
                  </h2>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Petromaax