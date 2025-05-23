import React from 'react'
import { CiFacebook, CiLinkedin } from 'react-icons/ci'
import { FaGithub, FaInstagram, FaTelegramPlane } from 'react-icons/fa'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import Image from 'next/image'
import ProjectGallery from './projectGallery'



export default function Header() {
  
  return (
    <div className='text-center flex flex-col justify-center min-h-screen px-4 sm:px-6 md:px-8 lg:px-[8%] py-8'>
      <div className='mt-10'>
        {/* title line 1 */}
        <div className='flex flex-col md:flex-row justify-between items-center w-full gap-4 md:gap-0'>
          <h1 className='text-4xl sm:text-6xl md:text-8xl lg:text-[7rem] font-bold'>Full-Stack</h1>
          <div className='flex flex-row space-x-4'>
            <div className='rounded-full bg-white px-4 py-2 md:px-20 md:py-2 m-auto mr-4'>
              <h1 className='text-black text-center text-sm sm:text-base md:text-lg'>Projects</h1>
            </div>
            <div className='rounded-full bg-white px-4 py-2 md:px-2 md:py-2 m-auto mr-4 m-auto'>
              <FiArrowRight size={24} className="text-black" />
            </div>
          </div>
        </div>

        {/* title line 2 */}
        <div className='flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0'>
          <h3 className='text-[#A6A6A6] text-lg sm:text-xl md:text-2xl text-left'>
            My goal is to <span className='text-white'>write maintainable, clean</span> <br/>
            and <span className='text-white'>understandable code </span> <br/>
            to process developing was enjoyable.
          </h3>
          <h1 className='text-4xl sm:text-6xl md:text-8xl lg:text-[7rem] font-bold'>Developer</h1>
        </div>

        {/* social links */}
        <div className='flex flex-wrap justify-center items-center gap-3 md:gap-4 mt-15'>
          <a href="#" className='flex flex-row items-center space-x-2 rounded-full border px-3 py-2 border-[#A6A6A6] hover:border-white transition-colors'>
            <FaGithub size={20} className="text-white" />
            <h4 className='text-sm md:text-base'>Github</h4>
          </a>
          <a href="#" className='flex flex-row items-center space-x-2 rounded-full border px-3 py-2 border-[#A6A6A6] hover:border-white transition-colors'>
            <CiLinkedin size={20} className="text-white" />
            <h4 className='text-sm md:text-base'>Linkedin</h4>
          </a>
          <a href="#" className='flex flex-row items-center space-x-2 rounded-full border px-3 py-2 border-[#A6A6A6] hover:border-white transition-colors'>
            <FaTelegramPlane size={20} className="text-white" />
            <h4 className='text-sm md:text-base'>Telegram</h4>
          </a>
          <a href="#" className='flex flex-row items-center space-x-2 rounded-full border px-3 py-2 border-[#A6A6A6] hover:border-white transition-colors'>
            <CiFacebook size={20} className="text-white" />
            <h4 className='text-sm md:text-base'>Facebook</h4>
          </a>
          <a href="#" className='flex flex-row items-center space-x-2 rounded-full border px-3 py-2 border-[#A6A6A6] hover:border-white transition-colors'>
            <FaInstagram size={20} className="text-white" />
            <h4 className='text-sm md:text-base'>Instagram</h4>
          </a>
        </div>


        {/* description projects */}
       
       <ProjectGallery/>
        
      </div>
    </div>
  )
}