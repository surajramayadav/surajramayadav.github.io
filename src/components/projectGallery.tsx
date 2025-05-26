'use client'
import React,{ useState } from 'react';
import Image from 'next/image';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { assets } from '../../public/assets';

const projectData = [
  {
    id: 1,
    title: "Dating App with React Native and Node.js",
    description: "A feature-rich dating application built with a full stack architecture. It includes real-time chat, profile matching, and user verification features. Mobile front-end built with React Native and a scalable backend with Node.js.",
    image: assets.dating
  },
  {
    id: 2,
    title: "Full Stack E-commerce Platform with React Native, Next.js and Node.js",
    description: "An end-to-end e-commerce platform featuring product listings, cart, secure payments, and admin dashboards. Developed using ReactJS and Next.js for web, and React Native for the mobile app, with Node.js handling the server-side logic.",
    image: assets.ecommerce
  },
  {
    id: 3,
    title: "Medical App React Native and ReactJS",
    description: "A medical appointment booking and health management app. Features include doctor search, online consultation, and electronic medical records. Built with React Native for mobile and React/Next.js on the web, backed by a Node.js API.",
    image: assets.medical
  },
  {
    id: 4,
    title: "Music listening App with React Native, Node.jsa and Go",
    description: "A responsive music streaming service with playlist management, real-time playback, and offline support. Powered by React Native for mobile, Next.js for SSR, and Node.js for backend services.",
    image: assets.music
  },
  {
    id: 5,
    title: "VPN Service App with React Native and Node.js",
    description: "A VPN client and management system providing secure and fast internet access. Built with a mobile-first approach using React Native, with admin tools in React/Next.js and Node.js handling authentication and server management.",
    image: assets.vpn
  },
  
];

const ProjectGallery = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const dataLength = projectData.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + dataLength) % dataLength);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % dataLength);
  };

  // Get visible items: previous, current, next
  const getWrappedIndex = (index:number) => {
    return (index + dataLength) % dataLength;
  };

  const visibleItems = [
    projectData[getWrappedIndex(currentIndex - 1)],
    projectData[getWrappedIndex(currentIndex)],
    projectData[getWrappedIndex(currentIndex + 1)],
  ];

  return (
    <div className='relative mt-8 md:mt-15 flex justify-center items-center overflow-hidden px-4 md:px-8'>
      {/* Carousel Items */}
      <div className='flex gap-2 md:gap-6 transition-all duration-500 ease-in-out'>
        {visibleItems.map((project, index) => {
          const isCenter = index === 1;
          return (
            <div
              key={project.id}
              className={`relative w-[280px] h-[200px] md:w-[400px] md:h-[300px] lg:w-[500px] lg:h-[400px] rounded-lg transition-all duration-500 ${
                isCenter
                  ? 'scale-110 z-10'
                  : 'scale-90 blur-sm opacity-60'
              }`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className='object-cover rounded-lg'
              />
            {isCenter&&<>
              <div className="absolute top-0 right-0 h-full w-[70%] md:w-[60%] bg-black/50 backdrop-blur-sm rounded-r-lg" />
              <div className="absolute top-0 right-0 h-full w-[70%] md:w-[60%] z-20 p-3 md:p-6 flex flex-col justify-center items-end text-white text-left">
                <h2 className="text-base md:text-lg lg:text-xl font-bold mb-1 md:mb-2">{project.title}</h2>
                <p className="text-xs md:text-sm lg:text-base line-clamp-2 md:line-clamp-3">{project.description}</p>
                <div className='flex flex-row gap-2 mt-4 md:mt-10'>
                  <div className='bg-white text-black rounded-full px-3 py-1 md:px-4 md:py-2'>
                    <h3 className="text-xs md:text-sm">Read more</h3>
                  </div>
                  <div className='bg-white rounded-full px-1 py-1 md:px-2 md:py-2'>
                    <FiArrowRight size={20} className='text-black md:w-6 md:h-6' />
                  </div>
                </div>
              </div>
            </>}
            </div>
          );
        })}
      </div>

      {/* Left Button */}
      <button
        onClick={handlePrev}
        className='absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 md:p-3 shadow-lg z-10'
      >
        <FiArrowLeft size={20} className='text-black md:w-6 md:h-6' />
      </button>

      {/* Right Button */}
      <button
        onClick={handleNext}
        className='absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 md:p-3 shadow-lg z-10'
      >
        <FiArrowRight size={20} className='text-black md:w-6 md:h-6' />
      </button>
    </div>
  );
};

export default ProjectGallery;
