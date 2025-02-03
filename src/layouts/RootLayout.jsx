import React from 'react'
import Navbar from '../components/NavBar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

const RootLayout = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default RootLayout