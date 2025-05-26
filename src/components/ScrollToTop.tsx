'use client'
import React, { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300 z-50 animate-fade-in"
          aria-label="Scroll to top"
        >
          <FiArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop; 