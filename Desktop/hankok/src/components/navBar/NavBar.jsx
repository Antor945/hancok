import React from 'react'
import logo from '../../assets/logo.png'
import { IoEarth } from "react-icons/io5";
import { FaSignInAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";


const NavBar = () => {
  const ulList = ["Home", "About Us ", "Tornament", "Store", "Team", "FAQ"]

  return (
    <nav className=' container '>
      <div className=' flex items-center'>
        <div className=' w-2/12'>
          <picture>
            <img src={logo} alt="" />
          </picture>
        </div>
        <div className='w-10/12 flex items-center justify-between'>
          <div>
            <ul className=' flex gap-10'>
              {
                ulList.map((item) => (
                  <li>
                    <a className=' text-[#FFF]  font-Oswald text-base' href="">{item}</a>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className='text-[18px]  flex gap-10 text-[#fff] items-center'>
            <IoEarth />
            <div className=' text-[18px] flex gap-3 items-center text-[#ffff] font-Oswald font-normal'>
              <FaSignInAlt />
              <h2>Sign in</h2>
            </div>
            <FaSearch />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar