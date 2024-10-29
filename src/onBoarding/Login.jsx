import React, { useState } from 'react';
import "./onBoarding.css";
import onBoarding_logo from "../assets/nato_header_main_logo.png";
import { RiArrowRightSLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {

    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const [loading, setLoading] = useState(false)

    const handleChange = (e)=>{
        const {name, value} = e.target
        setValues({...values, [name]: value})
    }

    const login = async ()=>{
        const url = "https://nato-vacation.onrender.com/api/login"
        try{
            setLoading(true)
            const response = await axios.post(url, values)
            setLoading(false)
            console.log(response)
            toast.success(response.data.message)
            localStorage.setItem("natoUser", JSON.stringify(response.data.user));
            navigate("/")
        }catch(error){
            setLoading(false)
            console.log(error)
            toast.error(error.response.data.message)
        }
    }

    // console.log(JSON.parse(localStorage.getItem("natoUser")))

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
                    <div onClick={()=>navigate("/forgot-password")} className='onBoarding_text_link_container forgotPassword'>
                        <RiArrowRightSLine/>
                        <h2>Forgot password?</h2>
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
                                name='email'
                                value={values.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='input_part'>
                            <label>Password</label>
                            <input
                                type='text'
                                name='password'
                                value={values.password}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className='onBoarding_btn_container'>
                        <button className='onBoarding_button' onClick={login}>{loading == true ? "loading..." : "Submit"}</button>
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
