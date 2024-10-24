import React from 'react';
import "./onBoarding.css";
import onBoarding_logo from "../assets/nato_header_main_logo.png";
import { RiArrowRightSLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const login = ()=>{
        navigate("/dashboard/overview")
    }

  return (
    <>
        <div className='onBoarding_body'>
            <div className='onBoarding_left'>
                <div className="onBoarding_logo">
                    <img src={onBoarding_logo} alt="company logo" />
                </div>
                <div className='onBoarding_left_text_container'>
                    <p>New to NATO?</p>
                    <div onClick={()=>navigate("/register")} className='onBoarding_text_link_container'>
                        <RiArrowRightSLine/>
                        <h2>Create An Account</h2>
                    </div>
                </div>
            </div>
            <div className='onBoarding_right'>
                <div className='onBoarding_right_top_container'>
                    <h1>Sign In</h1>
                    <div className='onBoarding_input_container'>
                        <div className='input_part'>
                            <label>Email Address</label>
                            <input
                                type='email'
                            />
                        </div>
                        <div className='input_part'>
                            <label>Password</label>
                            <input
                                type='text'
                            />
                        </div>
                    </div>
                    <div className='onBoarding_btn_container' onClick={login}>
                        <button className='onBoarding_button'>Submit</button>
                    </div>
                </div>
                <div className='onBoarding_right_bottom'>
                    <p>© 2024 NATO, Inc. All rights reserved.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login
