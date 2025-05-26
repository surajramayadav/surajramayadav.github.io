'use client'
import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Remove existing animation classes first
            entry.target.classList.remove('animate-fade-in');
            // Force a reflow
            void (entry.target as HTMLElement).offsetWidth;
            // Add the animation class back
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        // Adjust rootMargin for better mobile detection
        rootMargin: '0px 0px -10% 0px'
      }
    );

    // Add a small delay before observing to ensure proper initialization
    const timeoutId = setTimeout(() => {
      if (elementRef.current) {
        observer.observe(elementRef.current);
      }
    }, 100);

    const currentRef = elementRef.current;

    return () => {
      clearTimeout(timeoutId);
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return elementRef;
}; 