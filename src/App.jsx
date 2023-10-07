import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Profile from './Profile.jsx'
import Header from './Header'
import NewProject from './NewProject.jsx'
import HeroSection from './HeroSection.jsx'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Profile />
      <NewProject />
    </>
  )
}

export default App
