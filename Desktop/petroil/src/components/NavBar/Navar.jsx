import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { AiOutlineBars } from 'react-icons/ai'
import { GiCrossedSabres } from 'react-icons/gi'

const Navar = () => {
  const [show, setShow] = useState(false)
  const handleclick = () => {
    setShow(!show);
  }
  return (
    <div className=' bg-[#F40404] py-[27px]'>
      <div className=' max-w-container mx-auto list-none'>
        <div className='flex flex-wrap items-center justify-between relative'>
          <div className='1/5'>
            <img className='md:ml-0 ml-10' src={logo} alt="" />
          </div>
          <div onClick={handleclick} className='md:hidden absolute top-0 right-10 text-2xl'>
            {
              show == true ? <GiCrossedSabres /> : <AiOutlineBars />
            }
          </div>
          <div className='4/5'>
            <ul className={`md:gap-[47px] flex md:flex-row overflow-hidden md:overflow-visible 
            flex-col gap-6 md:static absolute top-0 md:right-10 
            md:bg-transparent bg-[#020202ec] transition-[1s] md:mt-[-11px] mt-[72px] w-full h-[300px] md:h-0
            md:text-start text-center  ${show ? 'right-0' : 'right-[-1000px]'}`}>
              <li><a href="" className='text-[#fff] font-pops font-semibold'>
                Home</a></li>
              <li><a href="" className='text-[#fff] font-pops font-semibold'>
                About</a></li>
              <li><a href="" className='text-[#fff] font-pops font-semibold'>
                Services</a></li>
              <li><a href="" className='text-[#fff] font-pops font-semibold'>
                Gallery</a></li>
              <li><a href="" className='text-[#fff] font-pops font-semibold'>
                Blog</a></li>
              <li><a href="" className='px-8 py-[13px] border-[2px] font-semibold border-[#fff] 
             text-[#fff] font-pops '>
                CONTACT</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navar