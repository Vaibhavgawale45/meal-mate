import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/'><p className='logo'>Meal<span className='logo-2'>Mate</span></p></Link>
      <img className='profile' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar
