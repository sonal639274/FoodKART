import React from 'react'
import './Navbar.css'
import logo from "../../assets/logo.webp"
import profile from "../../assets/IMG_20250308_173948_491.webp"

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={logo} alt="" />
      <img className='profile' src={profile} alt="" />
    </div>
  )
}

export default Navbar
