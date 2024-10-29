import React, { useState } from 'react';
import "./header.css";
import header_logo from "../../assets/nato_header_main_logo.png";
import { IoSearch, IoMenuSharp, IoCloseSharp  } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { PiSignOut } from "react-icons/pi";
import axios from 'axios';
import { toast } from 'react-toastify';

const Header = () => {

  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("natoUser")) || '')
  const [logoutLoading, setLogoutLoading] = useState(false);
  const [searchNum, setSearchNum] = useState(''); 

  const logout = async ()=>{
    localStorage.removeItem("natoUser")
    navigate("/login")
    toast.success("logged out successfully")
    // try{
    //   setLogoutLoading(true)
    //   const response = await axios.post()
    //   setLogoutLoading(false)
    //   console.log(response)
    // }catch(error){
    //   setLogoutLoading(false)
    //   console.log(error)
    // }
  }

  const searchMilitary = async ()=>{
    try{
      const response = await axios.get(`https://nato-vacation.onrender.com/api/search?militaryNumber=${searchNum}`)
      console.log(response)
    }catch(error){
      console.log(error)
    }
  }

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
                {
                  user == '' ?
                  <button onClick={()=>navigate('/login')}>Sign In</button>
                  : null
                }
                <Link className='header_account_select_link'>
                  <FaRegUser/>
                  <p>My Account</p>
                </Link>
                {
                  user == '' ? null : 
                  <div className='header_account_select_link' onClick={logout}>
                    <PiSignOut/>
                    <p>{logoutLoading == true ? "logging out..." : "Logout"}</p>
                  </div>
                }
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
            <div className='header_search_icon' onClick={searchMilitary}>
              <IoSearch/>
            </div>
            <input
              type='search'
              value={searchNum}
              onChange={(e)=>setSearchNum(e.target.value)}
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
