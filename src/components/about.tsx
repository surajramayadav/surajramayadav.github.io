'use client'
import Image from 'next/image'
import React, { use } from 'react'
import { assets } from '../../public/assets'

export default function About() {
    return (
        <div className='min-h-screen px-4 sm:px-6 md:px-8 lg:px-[8%] py-8'>
            {/* 1st row */}
            <div className='flex flex-row justify-between items-center mt-20'>
                <h1 className='text-3xl'> .../About me...</h1>
                <div className='text-[#A6A6A6] text-lg sm:text-xl md:text-2xl text-left'>
                    <h1 className='text-3xl'> Hello! I'm Suraj, I'm a <span className='text-white'>full-stack developer</span>. <br />More than <span className='text-white'>3 years</span> experience</h1>
                </div>
            </div>

            {/* 2nd row */}
            <div className='flex flex-row justify-between items-start'>
                <div className='flex flex-col gap-3 mt-10'>
                    {/* Front-end */}
                    <div className='flex flex-col bg-white rounded-2xl shadow-lg p-6 text-black w-fit'>
                        <h1 className='text-3xl'>Front-end</h1>
                        <h3 className='mt-2'>
                            TypeScript / ReactJs / React Native / Redux Toolkit / NextJs / <br />
                            Angular / Rxjs / Jest / GraphQL / Enzyme / Tailwind CSS
                        </h3>
                    </div>

                    {/* Styles */}
                    <div className='flex flex-col border rounded-2xl shadow-lg p-6  w-fit'>
                        <h1 className='text-3xl'>Styles</h1>
                        <h3 className='mt-2'>
                            SCSS / SASS / Material UI / <br />
                            Bootstrap / Tailwind CSS
                        </h3>
                    </div>

                    {/* Back-end */}
                    <div className='flex flex-col border rounded-2xl shadow-lg p-6  w-fit'>
                        <h1 className='text-3xl'>Back-end</h1>
                        <h3 className='mt-2'>
                            Go / Gin / NodeJs / Java / Spring Boot /MongoDB / MySQL / <br />
                            PostgreSQL / Firebase / AWS / Redis  / Microservices
                        </h3>
                    </div>



                </div>
                <div className='w-full lg:w-1/2 flex justify-center mt-10'>
                    <Image
                        src={assets.men}
                        alt='loading...'
                        className='w-[50%] h-auto object-contain rounded-2xl'
                    />
                </div>

            </div>



            {/* devOps */}

            <div className='flex flex-row justify-between items-center w-6/12 mt-4' >
                <div className='text-[#A6A6A6] text-lg sm:text-xl md:text-1xl text-left'>
                    <h2>Some of my <span className='text-white'>favorite technologies, <br />topics, or tools </span>that i worked with.</h2>
                </div>
                <div className='flex flex-col border rounded-2xl shadow-lg p-6  w-fit'>
                    <h1 className='text-3xl'>DevOps</h1>
                    <h3 className='mt-2'>
                        Nginx / Docker / Jenkins /<br />
                        CI/CD / Bash
                    </h3>
                </div>
            </div>
        </div>
    )
}