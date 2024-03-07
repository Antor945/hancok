import React from 'react'
import NavBar from '../navBar/NavBar'
import { FaLinkedinIn, FaFacebookF, FaTwitter, } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Banner = () => {
    return (
        <section className='  bg-bannerImg bg-no-repeat bg-cover'>
            <NavBar />
            <div className='container pt-[100px]'>
                <div className=' w-6/12'>
                    <div className=' pb-[150px]'>
                        <h2 className=' text-[#fff] font-Oswald text-[27px] font-normal'>
                            LIFE TIME
                        </h2>
                        <div className=' flex gap-5'>
                            <h3 className=' text-[60px] text-[#fff] font-Oswald font-semibold'>
                                GAMING EXPERINECE
                            </h3>
                            <div className='border-b-2 w-20 border-[#fff]'></div>
                        </div>
                        <p className=' text-base text-[#fff] font-normal font-Oswald mt-4 pb-20'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae quo quos omnis perspiciatis explicabo quasi voluptatibus voluptas,
                            rem animi praesentium ex dolorem amet enim numquam. Alias rem delectus soluta vel.
                        </p>
                        <button className=' flex items-center gap-2 outline-none px-6 py-2 bg-white font-semibold font-Oswald'>
                            VIEW MORE <p className=' text-[25px] text-blacks'>{">>"}</p>
                        </button>
                    </div>
                    <div className=' flex gap-10 pb-20'>
                        <div className=' p-3 bg-white rounded-full'>
                            <FaFacebookF className=' text-[18px]' />
                        </div>
                        <div className=' p-3 bg-white rounded-full'>
                            <FaLinkedinIn className=' text-[18px]' />
                        </div>
                        <div className=' p-3 bg-white rounded-full'>
                            <FaTwitter className=' text-[18px]' />
                        </div>
                        <div className=' p-3 bg-white rounded-full'>
                            <FaInstagram  className=' text-[18px]'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner