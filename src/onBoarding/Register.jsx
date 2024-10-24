import React from 'react'
import "./onBoarding.css";
import onBoarding_logo from "../assets/nato_header_main_logo.png";
import { RiArrowRightSLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();

  return (
    <>
        <div className='onBoarding_body'>
            <div className='onBoarding_left'>
                <div className="onBoarding_logo">
                    <img src={onBoarding_logo} alt="company logo" />
                </div>
                <div className='onBoarding_left_text_container'>
                    <p>Already have an account?</p>
                    <div onClick={()=>navigate("/login")} className='onBoarding_text_link_container'>
                        <RiArrowRightSLine/>
                        <h2>Sign In</h2>
                    </div>
                </div>
            </div>
            <div className='onBoarding_right'>
                <div className='onBoarding_right_top_container'>
                    <h1>Create an account</h1>
                    <p>All fields required. Once you submit the form, please check your email to verify your account.</p>
                    <div className='onBoarding_input_container'>
                        <div className='input_part'>
                          <label>First name</label>
                          <input
                            type='text'
                          />
                        </div>
                        <div className='input_part'>
                          <label>Last name</label>
                          <input
                            type='text'
                          />
                        </div>
                        <div className='input_part'>
                          <label>Middle name</label>
                          <input
                            type='email'
                          />
                        </div>
                        <div className='input_part'>
                          <label>Email address</label>
                          <input
                            type='number'
                          />
                        </div>
                        <div className='input_part'>
                          <label>Military number</label>
                          <input
                            type='text'
                          />
                        </div>
                        <div className='input_part'>
                          <label>Password</label>
                          <input
                            type='text'
                          />
                        </div>
                        <div className='input_part'>
                          <label>Confirm password</label>
                          <input
                            type='text'
                          />
                        </div>
                    </div>
                    <div className='onBoarding_btn_container'>
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

export default Register