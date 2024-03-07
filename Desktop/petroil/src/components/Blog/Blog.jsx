import React from 'react'

const Blog = () => {
  return (
    <div className='bg-[#F0F0F0]'>
      <div className='max-w-container mx-auto  md:py-[110px] py-[50px]'>
        <div className=' md:flex flex-wrap justify-between'>
          <div className='md:w-[339px] bg-BlogImg bg-no-repeat bg-center bg-cover h-full '>
            <div className='pt-[75px] px-[45px] pb-[55px] bg-bgColor text-center md:text-start'>
              <p className='text-white font-bold text-2xl mb-[80px] font-pops '>
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
              </p>
              <a href="" className='text-white font-pops font-semibold px-[22px]
                py-[10px] bg-[#ffffff67]'>
                Read more</a>
            </div>
          </div>
          <div className='md:w-[339px] bg-BlogImg bg-no-repeat bg-center bg-cover h-full mt-[15px] md:mt-0
          mb-[15px] md:mb-0'>
            <div className='pt-[75px] px-[45px] pb-[55px] bg-bgColor text-center md:text-start'>
              <p className='text-white font-bold text-2xl mb-[80px] font-pops '>
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
              </p>
              <a href="" className='text-white font-pops font-semibold px-[22px]
                py-[10px] bg-[#ffffff67]'>
                Read more</a>
            </div>
          </div>
          <div className='md:w-[339px] bg-BlogImg bg-no-repeat bg-center bg-cover h-full '>
            <div className='pt-[75px] px-[45px] pb-[55px] bg-bgColor text-center md:text-start'>
              <p className='text-white font-bold text-2xl mb-[80px] font-pops '>
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
              </p>
              <a href="" className='text-[#ffff] font-pops font-semibold px-[22px]
                py-[10px] bg-[#ffffff67]'>
                Read more</a>
            </div>
          </div>
        </div>
        <div className='flex md:justify-end justify-center mt-[29px]'>
          <div>
          <h2 className='font-pops font-bold text-base text-[#000]'>MORE FROM THE BLLOG</h2>
          </div>
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
            <path d="M17.2021 13.3301L10.5615 19.9707C10.1025 20.4297 9.36035 20.4297 8.90625 19.9707L7.80273 18.8672C7.34375 18.4082 7.34375 17.666 7.80273 17.2119L12.5098 12.5049L7.80273 7.79785C7.34375 7.33887 7.34375 6.59668 7.80273 6.14258L8.90137 5.0293C9.36035 4.57031 10.1025 4.57031 10.5566 5.0293L17.1973 11.6699C17.6611 12.1289 17.6611 12.8711 17.2021 13.3301Z" fill="black" />
          </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog