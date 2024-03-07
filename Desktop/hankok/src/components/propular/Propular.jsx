import React from 'react'
import popular from '../../assets/popular.png'
import popular2 from '../../assets/popular2.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Propular = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <div>Antor</div>,
    };
    return (
        <section className=' bg-secondary pt-16 pb-16'>
            <div className=' container'>
                <div>
                    <h2 className=' font-Barlow uppercase text-[38px] font-semibold text-white text-end'>
                        POPULAR GAMES AROUND THE
                        <h2>WORLD</h2>
                    </h2>
                </div>
                <div className=' flex gap-10'>
                </div>
                <Slider {...settings}>
                    <div >
                        <picture>
                            <img className='' src={popular} alt="" />
                        </picture>
                    </div>
                    <div >
                        <picture>
                            <img className='' src={popular} alt="" />
                        </picture>
                    </div>
                </Slider>
            </div>
        </section>
    )
}

export default Propular