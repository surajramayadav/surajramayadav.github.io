'use client'
import React, { use } from 'react'
import { CiMenuFries } from 'react-icons/ci'
import { IoMdClose } from 'react-icons/io'
import { MdSunny } from 'react-icons/md'

const NavBar = () => {
  const sideMenuRef = React.useRef<HTMLUListElement>(null);
  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  }

  const closeMenu = () => {
      if (sideMenuRef.current) {
        sideMenuRef.current.style.transform = "translateX(16rem)";
      }
  }
  return (
    <>
    <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 '>
       <div className='flex justify-between items-center'>
        <div>
            <h1 className='text-3xl'>Suraj Yadav</h1>
        </div>
        <div className='hidden md:block'>
            <ul className='flex flex-row space-x-4 rounded-full px-12 py-2 bg-black shadow-sm bg-opacity-50 border-1 '>
                <li className='font-Fira_Code'>About</li>
                <li className='font-Fira_Code'>Projects</li>
                <li className='font-Fira_Code'>Articles</li>
                <li className='font-Fira_Code'>Contact</li>
            </ul>
        </div>
        <div className='flex flex-row space-x-4'>
          {/* <button>
          <MdSunny size={24} className="text-yellow-400" />
          </button> */}
            <h1 className='text-2xl'>English</h1>  
            <button className='block md:hidden ml-3'>
        <CiMenuFries size={24} className="text-white-400" onClick={openMenu} />
        </button>
        </div>
       
       </div>
       <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4  py-20 px-10 fixed -right-64   top-0 bottom-0 w-64 z-50 h-screen bg-[#121212] transition duration-500 '>
        <div className='absolute top-6 right-6' onClick={closeMenu}>
          <IoMdClose size={24} className="text-black-400" />
        </div>
            <li className='font-Fira_Code' onClick={closeMenu}>About</li>
            <li className='font-Fira_Code' onClick={closeMenu}>Projects</li>
            <li className='font-Fira_Code' onClick={closeMenu}>Articles</li>
            <li className='font-Fira_Code' onClick={closeMenu}>Contact</li>
       </ul>
    </nav>
    </>
  )
}

export default NavBar