// import React from 'react'
import './Header.css'
import img from "../../assets/header_img.png"
const Header = () => {
  return (
    <div className='main-header'>
      {/* <div className="header-contents"> */}
        <img className='header-img' src={img} alt="" />
      {/* </div> */}
    </div>
  )
}

export default Header
