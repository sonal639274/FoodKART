// import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img className='footer-logo' src={assets.logo} alt="" />
                <p>Welcome to our Vegan & Gluten-Free Kitchen, where delicious, healthy, and compassionate meals are crafted with care! Our mission is to bring you mouthwatering dishes that are not only good for you but good for the planet too. Whether you are following a vegan lifestyle, have gluten sensitivities, or just enjoy wholesome food, our menu offers a variety of flavorful options to satisfy every craving.</p>
                <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+91 466868673</li>
                    <li>gkhnjif@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2025 @ FoodKART.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
