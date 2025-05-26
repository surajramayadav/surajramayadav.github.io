import React from 'react'
import { CiFacebook, CiLinkedin } from 'react-icons/ci'
import { FaGithub, FaInstagram, FaTelegramPlane } from 'react-icons/fa'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import Image from 'next/image'
import ProjectGallery from './projectGallery'

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className='text-center flex flex-col justify-center min-h-screen px-2 sm:px-6 md:px-8 lg:px-[8%] py-8 animate-fade-in'>
      <div className='mt-10'>
       {/* title line 1 */}
       <div className='flex flex-col md:flex-row justify-between items-center w-full md:gap-0'>
          <div className='flex flex-col md:flex-row items-start md:items-center'>
            <h1 className='text-4xl sm:text-6xl md:text-8xl lg:text-[7rem] font-bold'>Full-Stack</h1>
            <h1 className='text-4xl sm:text-6xl md:text-8xl lg:text-[7rem] font-bold md:hidden'>Developer</h1>
          </div>
          <div className='flex flex-row space-x-4 mt-4 md:mt-0'>
            <div className='rounded-full bg-white px-4 py-2 md:px-20 md:py-2 m-auto mr-4'>
              <h1 className='text-black text-center text-sm sm:text-base md:text-lg' onClick={() => scrollToSection('projects')}>Projects</h1>
            </div>
            <div className='rounded-full bg-white px-4 py-2 md:px-2 md:py-2 m-auto mr-4 m-auto' onClick={() => scrollToSection('projects')}>
              <FiArrowRight size={24} className="text-black" />
            </div>
          </div>
        </div>

        {/* title line 2 */}
        <div className='flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0'>
          <h3 className='text-[#A6A6A6] text-lg sm:text-xl md:text-2xl text-left mt-2'>
            My goal is to <span className='text-white'>write maintainable, clean</span> <br/>
            and <span className='text-white'>understandable code </span> <br/>
            to process developing was enjoyable.
          </h3>
          <h1 className='text-4xl sm:text-6xl md:text-8xl lg:text-[7rem] font-bold hidden md:block'>Developer</h1>
        </div>

        {/* social links */}
        <div className='flex flex-wrap justify-center items-center gap-3 md:gap-4 mt-5 animate-scale-in'>
          <a href="https://github.com/surajramayadav" target="_blank" rel="noopener noreferrer" className='flex flex-row items-center space-x-2 rounded-full border px-3 py-2 border-[#A6A6A6] hover:border-white hover:scale-110 hover:bg-white/10 transition-all duration-300'>
            <FaGithub size={20} className="text-white" />
            <h4 className='text-sm md:text-base'>Github</h4>
          </a>
          <a href="https://www.linkedin.com/in/surajramayadav/" target="_blank" rel="noopener noreferrer" className='flex flex-row items-center space-x-2 rounded-full border px-3 py-2 border-[#A6A6A6] hover:border-white hover:scale-110 hover:bg-white/10 transition-all duration-300'>
            <CiLinkedin size={20} className="text-white" />
            <h4 className='text-sm md:text-base'>Linkedin</h4>
          </a>
          <a href="https://t.me/surajramayadav" target="_blank" rel="noopener noreferrer" className='flex flex-row items-center space-x-2 rounded-full border px-3 py-2 border-[#A6A6A6] hover:border-white hover:scale-110 hover:bg-white/10 transition-all duration-300'>
            <FaTelegramPlane size={20} className="text-white" />
            <h4 className='text-sm md:text-base'>Telegram</h4>
          </a>
          <a href="https://www.facebook.com/surajramayadav" target="_blank" rel="noopener noreferrer" className='flex flex-row items-center space-x-2 rounded-full border px-3 py-2 border-[#A6A6A6] hover:border-white hover:scale-110 hover:bg-white/10 transition-all duration-300'>
            <CiFacebook size={20} className="text-white" />
            <h4 className='text-sm md:text-base'>Facebook</h4>
          </a>
          <a href="https://www.instagram.com/suraj.yadav.25/" target="_blank" rel="noopener noreferrer" className='flex flex-row items-center space-x-2 rounded-full border px-3 py-2 border-[#A6A6A6] hover:border-white hover:scale-110 hover:bg-white/10 transition-all duration-300'>
            <FaInstagram size={20} className="text-white" />
            <h4 className='text-sm md:text-base'>Instagram</h4>
          </a>
        </div>

        {/* description projects */}
        <div className='animate-bounce-in mt-8'>
          <ProjectGallery/>
        </div>
      </div>
    </div>
  )
}