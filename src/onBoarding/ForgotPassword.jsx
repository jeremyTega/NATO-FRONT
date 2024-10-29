import React, { useState } from 'react';
import './onBoarding.css';
import axios from 'axios';

const ForgotPassword = () => {

    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)

    const send = async ()=>{
        try{
            setLoading(true)
            const response = await axios.post("https://nato-vacation.onrender.com/forgotPassword", email)
            setLoading(false)
            console.log(response)
        }catch(error){
            setLoading(false)
            console.log(error)
        }
    }

  return (
    <>
        <div className='forgot_password_body'>
            <h1>Forgot your Password</h1>
            <p>enter your email to receive a password reset link</p>
            <div className='forgot_password_input_container'>
                <label>email</label>
                <input
                    type='email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
            </div>
            <button className='forgot_password_btn' onClick={send}>{loading == true ? "loading..." : "Send"}</button>
        </div>
    </>
  )
}

export default ForgotPassword
