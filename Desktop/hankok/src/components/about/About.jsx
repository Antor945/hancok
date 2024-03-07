import React from 'react'
import about from '../../assets/about.png'
import { FaAngleRight } from "react-icons/fa";

const About = () => {

    const aboutData = [
        {
            text: "World Bigghest Community & Gaming Server",
            icon: <FaAngleRight />,
        },
        {
            text: "Friendly Clan & Mates",
            icon: <FaAngleRight />,
        },
        {
            text: "Largest Online Gaming Community & Shop",
            icon: <FaAngleRight />,
        },
        {
            text: "Hancok reaches more than 150 million monthly users",
            icon: <FaAngleRight />,
        },
        {
            text: "We are leading global media brand for games",
            icon: <FaAngleRight />,
        },
        {
            text: "Largest Online Gaming Community & Shop",
            icon: <FaAngleRight />,
        },
    ]
    const review = [
        {
            count: "122k",
            taitle: "Community Earning"
        },
        {
            count: "12m",
            taitle: "Total Member"
        },
        {
            count: "100k",
            taitle: "Streams Complete"
        },
        {
            count: "844",
            taitle: "Total Sponsers"
        }
    ]

    return (
        <section className=' bg-blacks pb-10'>
            <div className=' container'>
                <div className=' w-6/12'>
                    <div className=' flex gap-4'>
                        <h2 className=' text-[38px] font-semibold font-Oswald text-white pt-7 pb-10 uppercase'>
                            About the biggest hancok
                            <span className=' flex gap-4'>
                                community
                                <div className='border-b-[4px] w-[120px] border-primary'></div>
                            </span>

                        </h2>

                    </div>
                </div>
                <div className=' flex gap-5'>
                    <div className=' w-6/12'>
                        <picture>
                            <img className=' w-full' src={about} alt="" />
                        </picture>
                    </div>
                    <div className=' w-6/12'>
                        <div>
                            <h2 className=' font-Oswald font-semibold text-[27px] text-white uppercase mb-1'>
                                MOST POPULAR GAMING PLATFORM.
                            </h2>
                            {
                                aboutData.map((item) => (
                                    <div className=' flex items-center gap-4 mb-1'>
                                        <div className=' text-primary'>{item.icon}</div>
                                        <p className='text-base font-Oswald font-normal text-white'>{item.text}</p>
                                    </div>
                                ))
                            }
                            <p className='text-[20px] font-Oswald font-normal text-white'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Odio itaque error odit accusantium voluptatibus soluta blanditiis
                                dignissimos earum qui reiciendis provident necessitatibus nobis ratione
                                magni quidem, ipsam in iure consequuntur?
                            </p>
                            <div>
                                <button className=' flex items-center gap-2 outline-none px-6 py-2 bg-secondary mt-3 
                            text-white font-Oswald'>
                                    VIEW MORE <p className=' text-[25px] '>{">>"}</p>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className=' flex gap-8 mt-14'>
                    {
                        review.map((item) => (
                            <div className='w-[30%] bg-secondary rounded-tr-[70px] rounded-bl-[70px] 
                                 py-8 flex flex-col gap-4 items-center'>
                                <h2 className=' font-Oswald text-[60px] font-semibold text-white'>{item.count}</h2>
                                <p className=' text-[18px] font-Oswald text-white'>{item.taitle}</p>
                            </div>
                        ))
                    }

                </div>

            </div>
        </section>
    )
}

export default About