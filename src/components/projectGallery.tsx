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
    <div className='relative mt-15 flex justify-center items-center overflow-hidden'>
      {/* Carousel Items */}
      <div className='flex gap-6 transition-all duration-500 ease-in-out'>
        {visibleItems.map((project, index) => {
          const isCenter = index === 1;
          return (
            <div
              key={project.id}
              className={`relative w-150 h-80 rounded-lg transition-all duration-500   ${
                isCenter
                  ? 'scale-110 z-10'
                  : 'scale-90 blur-sm opacity-60'
              } ` }
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className='object-cover '
              />
            {isCenter&&<>
              <div className="absolute top-0 right-0 h-full w-[60%] bg-black/50 backdrop-blur-sm" />
              <div className="absolute top-0 right-0 h-full w-[60%] z-20 p-6 flex flex-col justify-center items-end text-white text-left">
  <h2 className="text-lg font-bold mb-2">{project.title}</h2>
  <p className="text-sm line-clamp-3">{project.description}</p>
 <div className='flex flex-row gap-2 mt-10'>
 <div className='bg-white text-black rounded-full px-4 py-2'>
    <h3>Read more</h3>
   
  </div>
  <div className=' bg-white rounded-full px-2 py-2'>
    <FiArrowRight size={24} className='text-black' />
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
        className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg z-10'
      >
        <FiArrowLeft size={24} className='text-black' />
      </button>

      {/* Right Button */}
      <button
        onClick={handleNext}
        className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg z-10'
      >
        <FiArrowRight size={24} className='text-black' />
      </button>
    </div>
  );
};

export default ProjectGallery;
