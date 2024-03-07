import React from 'react'
import sliderImg1 from '../../assets/sliderImg1.png'
import sliderImg2 from '../../assets/sliderImg2.png'
import sliderImg3 from '../../assets/sliderImg3.png'
import sliderImg4 from '../../assets/sliderImg4.png'
const Slider = () => {
    return (
        <div className='mb-10 mx-auto'>
          <div className='flex gap-x-5'>
            <picture>
                <img src={sliderImg1} alt="" />
            </picture>
            <picture>
                <img src={sliderImg2} alt="" />
            </picture>
            <picture>
                <img src={sliderImg3} alt="" />
            </picture>
            <picture>
                <img src={sliderImg4} alt="" />
            </picture>
          </div>
        </div>
    )
}

export default Slider