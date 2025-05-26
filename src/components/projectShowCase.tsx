'use client'
import Image, { StaticImageData } from "next/image";
import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6"; // or any arrow icon

type ProjectImage = {
  src: StaticImageData | string;
  alt: string;
  className?: string;
};

type ProjectShowcaseProps = {
  title: string;
  techStack: string[];
  description: string;
  details: string;
  link: string;
  images: ProjectImage[];
};

export default function ProjectShowcase({
  title,
  techStack,
  description,
  details,
  link,
  images,
}: ProjectShowcaseProps) {
  return (
    
      <div className="flex flex-col md:flex-row gap-12 md:gap-24 w-full max-w-6xl mt-10 mb-10">
        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-center">
          <h3 className="text-white text-2xl font-semibold mb-4">{title}</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-1 rounded-full border border-[#444] text-white text-sm font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="text-gray-300 italic mb-2 mr-1" dangerouslySetInnerHTML={{ __html: description }} />
          <p className="text-gray-400 mb-6" dangerouslySetInnerHTML={{ __html: details }} />
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black rounded-full p-3 w-12 h-12 justify-center hover:bg-gray-200 transition"
          >
            <FaArrowUpRightFromSquare />
          </a>
        </div>
        {/* Right Side */}
        <div className="flex-1 flex flex-wrap gap-4 justify-center items-center relative mt-8 md:mt-0">
          {images.map((img, idx) => (
            <Image key={idx} src={img.src} className={img.className} alt={img.alt}/>
          ))}
          {/* Overlay circle (optional for effect) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-gray-700 opacity-30 z-0"></div>
        </div>
      </div>
  );
}
