import React, { useState } from 'react'
import "./onBoarding.css";
import onBoarding_logo from "../assets/nato_header_main_logo.png";
import { RiArrowRightSLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Register = () => {

  const navigate = useNavigate();
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    militaryNumber: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false)
  // const [confirmPassword, setConfirmPassword] = useState('')

  const handleChange = (e)=>{
    const {name, value} = e.target
    setValues({...values, [name]: value})
  }

  const submit = async ()=>{
    const url = "https://nato-vacation.onrender.com/api/register"
    try{
        setLoading(true)
        const response = await axios.post(url, values)
        setLoading(false)
        console.log(response)
        toast.success(response.data.message)
        navigate('/login')
    } catch(error){
      setLoading(false)
      console.log(error)
      toast.error(error.response.data.message)
    }
  }

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
                            name='firstName'
                            value={values.firstName}
                            onChange={handleChange}
                          />
                        </div>
                        <div className='input_part'>
                          <label>Last name</label>
                          <input
                            type='text'
                            name='lastName'
                            value={values.lastName}
                            onChange={handleChange}
                          />
                        </div>
                        <div className='input_part'>
                          <label>Middle name</label>
                          <input
                            type='text'
                            name='middleName'
                            value={values.middleName}
                            onChange={handleChange}
                          />
                        </div>
                        <div className='input_part'>
                          <label>Email address</label>
                          <input
                            type='email'
                            name='email'
                            value={values.email}
                            onChange={handleChange}
                          />
                        </div>
                        <div className='input_part'>
                          <label>Military number</label>
                          <input
                            type='text'
                            name='militaryNumber'
                            value={values.militaryNumber}
                            onChange={handleChange}
                          />
                        </div>
                        <div className='input_part'>
                          <label>Password</label>
                          <input
                            type='password'
                            name='password'
                            value={values.password}
                            onChange={handleChange}
                          />
                        </div>
                        {/* <div className='input_part'>
                          <label>Confirm password</label>
                          <input
                            type='text'
                          />
                        </div> */}
                    </div>
                    <div className='onBoarding_btn_container'>
                      <button className='onBoarding_button' onClick={submit}>{loading == true ? "loading..." : "Submit"}</button>
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