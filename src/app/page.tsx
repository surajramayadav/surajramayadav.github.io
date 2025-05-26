'use client'
import React from 'react'
import NavBar from '../components/navBar'
import Header from '../components/header'
import About from '@/components/about'
import Work from '@/components/work'
import Project from '@/components/projects'
import Footer from '@/components/footer'
import { useScrollAnimation } from '@/components/useScrollAnimation'

export default function Home() {
  const headerRef = useScrollAnimation();
  const aboutRef = useScrollAnimation();
  const workRef = useScrollAnimation();
  const projectsRef = useScrollAnimation();
  const contactRef = useScrollAnimation();

  return (
  <>
   <NavBar/>
   <section ref={headerRef} id="header" className="animate-fade-in-left">
     <Header/>
   </section>
   <section ref={aboutRef} id="about" className="animate-fade-in-right animate-delay-200">
     <About/>
   </section>
   <section ref={workRef} id="work" className="animate-fade-in-left animate-delay-400">
     <Work/>
   </section>
   <section ref={projectsRef} id="projects" className="animate-fade-in-right animate-delay-600">
     <Project/>
   </section>
   <section ref={contactRef} id="contact" className="animate-fade-in-left animate-delay-600">
     <Footer/>
   </section>
  </>
  )
}