import React, { useState } from 'react';
import "./header.css";
import header_logo from "../../assets/nato_header_main_logo.png";
import { IoSearch, IoMenuSharp, IoCloseSharp  } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const Header = () => {

  const [showMenu, setShowMenu] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [showAccount, setShowAccount] = useState(false);

  return (
    <>
      <div className='header_body'>
        <div className='header_top'>
          <div className='header_logo_container'>
            <img src={header_logo} alt='logo'/>
          </div>
          <div 
            className='header_account_container' 
            style={showAccount == true ? {backgroundColor: "lightgrey"} : {backgroundColor: ""}}
            onClick={()=>setShowAccount(!showAccount)}
            >
            <FaRegUser className='header_account_icon'/>
            <p>Account</p>
            <MdOutlineKeyboardArrowUp/>
            {
              showAccount == true ? 
              <div className='header_account_select_container'>
                <button>Sign In</button>
                <Link className='header_account_select_link'>
                  <FaRegUser/>
                  <p>My Account</p>
                </Link>
              </div> : null
            }
          </div>
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
          <div className='header_menu_icon_container' onClick={()=>setShowMenu(!showMenu)}>
            {
              showMenu == true ? <IoCloseSharp/> : <IoMenuSharp/>
            }
          </div>
          <div className='header_menu_icon_container' onClick={()=>setShowMobileSearch(!showMobileSearch)}>
            <IoSearch/>
          </div>
        </div>

        <div className={`header_mobile_menu_container ${showMenu ? 'open' : 'closed'}`} onClick={()=>setShowMenu(false)}>
          <Link to='/' className={`header_mobile_link ${showMenu ? 'visible' : ''}`}>Home</Link>
          <Link to='/' className={`header_mobile_link ${showMenu ? 'visible' : ''}`}>About Us</Link>
          <Link to='/vacation' className={`header_mobile_link ${showMenu ? 'visible' : ''}`}>Vacation</Link>
          <Link to='/' className={`header_mobile_link ${showMenu ? 'visible' : ''}`}>News</Link>
          <Link to='/' className={`header_mobile_link ${showMenu ? 'visible' : ''}`}>Sign In</Link>
        </div>

        {
          showMobileSearch == true ? 
          <div className='header_mobile_search_container'>
          <div className='header_mobile_search'>
            <div className='header_mobile_search_icon'>
              <IoSearch/>
            </div>
            <input
              type='search'
            />
          </div>
        </div> : null
        }
      </div>
    </>
  )
}

export default Header
