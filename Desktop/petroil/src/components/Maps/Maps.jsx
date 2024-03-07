import React from 'react'
import MapsImg from '../../assets/MapsImg.png'

const Maps = () => {
    return (
        <div>
            <div className=''>
                <picture>
                    <img src={MapsImg} alt=""  className='w-full'/>
                </picture>
            </div>
            <div className='bg-primary'>
                <div className='max-w-container mx-auto '>
                   <div className='md:flex flex-wrap py-[46px] items-center justify-between'>
                    <div>
                    <h2 className='text-white text-4xl font-bold text-center md:text-start'>
                        Want to join as member branch in your area?</h2>
                    </div>
                    <div className='md:mt-0 mt-[50px] text-center md:text-start'>
                        <a href="" className='py-[13px] px-[32px] text-white text-base border-white font-pops
                        border-[2px]  '>
                            CONTACT</a>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Maps