import React, { useState } from 'react';
import './onBoarding.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {

    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConformNewPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const { token } = useParams();

    const send = async ()=>{
        if(newPassword != confirmNewPassword) {
            toast.error("passwords does not match")
        }else{
            const url = `https://nato-vacation.onrender.com//resetPassword/${token}`
            const body = {newPassword, confirmNewPassword}
            try{
                setLoading(true)
                const response = await axios.post(url, body)
                setLoading(false)
                console.log(response)
            }catch(error){
                setLoading(false)
                console.log(error)
            }
        }
    }

  return (
    <>
        <div className='forgot_password_body'>
            <h1>Reset your Password</h1>
            <p>reset your password to a secure one</p>
            <div className='forgot_password_input_container'>
                <label>new password</label>
                <input
                    type='password'
                    value={newPassword}
                    onChange={(e)=>setNewPassword(e.target.value)}
                />
            </div>
            <div className='forgot_password_input_container'>
                <label>confirm new password</label>
                <input
                    type='password'
                    value={confirmNewPassword}
                    onChange={(e)=>setConformNewPassword(e.target.value)}
                />
            </div>
            <button className='forgot_password_btn' onClick={send}>{loading == true ? "loading..." : "Send"}</button>
        </div>
    </>
  )
}

export default ResetPassword
