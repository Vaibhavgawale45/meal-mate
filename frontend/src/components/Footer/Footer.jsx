import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
             <Link to='/'><p className='logo'>Meal<span className='logo-2'>Mate</span></p></Link>
            <p>MealMate is your friendly companion for quick and reliable food delivery. Whether you're craving a late-night snack or a hearty meal, MealMate connects you with your favorite local restaurants and delivers fresh, delicious food right to your doorstep.</p>
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
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-9552769804</li>
                <li>contact@mealmate.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © MealMate.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
