import React from 'react'
import NavBar from '../components/navBar'
import Header from '../components/header'
import About from '@/components/about'
import Work from '@/components/work'
import Project from '@/components/projects'

export default function Home() {
  return (
  <>
   <NavBar/>
   <Header/>
   <About/>
   <Work/>
   <Project/>
  </>
  )
}