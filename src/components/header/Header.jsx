import React from 'react';
import "./header.css";
import header_logo from "../../assets/nato_header_logo.png";
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const Header = () => {
  return (
    <>
      <div className='header_body'>
        <div className='header_logo_container'>
          <img src={header_logo} alt='logo'/>
        </div>
        <div className='header_middle_container'>
          <div className='header_nav_container'>
            <Link to='/' className='header_link'>Home</Link>
            <Link to='/' className='header_link'>About Us</Link>
            <Link to='/vacation' className='header_link'>Vacation</Link>
            <Link to='/' className='header_link'>News</Link>
          </div>
          <div className='header_search_container'>
            <div className='header_search_icon'>
              <IoSearch/>
            </div>
            <input
              type='search'
            />
          </div>
        </div>
        <div className='header_account_container'>
          <FaRegUser className='header_account_icon'/>
          <p>Account</p>
          <MdOutlineKeyboardArrowUp/>
        </div>
      </div>
    </>
  )
}

export default Header
