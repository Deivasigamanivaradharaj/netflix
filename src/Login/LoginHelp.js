import React, { useState } from 'react'
import Footer from './Footer'
import './Login.css'
import { Link } from 'react-router-dom'

function LoginHelp() {

const [SendEmail, setSendEmail] = useState(true);

function sendemailtoggle(value) {
    console.log(value);
    if(value === "email"){
        setSendEmail(true);
    }
    else{
        setSendEmail(false);
    }
  }


  return (
    <div className='LoginHelp'>
        <div className='container'>
            <div className='header'>
                <Link to={'../'}><img src="https://live.lepatron.email/images_hebergees_tests/netflix/20181024_email_01/netflix.png" className='header-logo'></img></Link>
                <Link style={{textDecoration:'none'}} to={'../login'}><h3>Sign In</h3></Link>
            </div>
            <div className='box'>
                <h1>Forgot Email/Password</h1>
                <p>How would you like to reset your password?</p>
                <div className='radio-group'>
                    <input type='radio' onClick={(e)=>{
                        sendemailtoggle(e.target.value);
                    }} name='emailorsms' id='email' value="email"></input>
                    <label htmlFor="email">Email</label>
                </div>
                <div className='radio-group'>
                    <input type='radio' onClick={(e)=>{
                        sendemailtoggle(e.target.value);
                    }} name='emailorsms' id='sms' value="sms"></input>
                    <label htmlFor="sms">Text Message (SMS)</label>
                </div>
                {SendEmail && <p>We will send you an email with instructions on how to reset your password.</p>}
                {!SendEmail && <p>We will text you a verification code to reset your password. Message and data rates may apply.</p>}
                {SendEmail && <input type='email' placeholder='name@example.com'></input>}
                {!SendEmail && <input type='text' placeholder='Phone Number'></input>}
                <button>{SendEmail && "Email Me"}{!SendEmail && "Text Me"}</button>
                {/* <a href=''>I can't remember my email address or phone number.</a> */}
            </div>
            <p className='captcha'>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
            <Footer></Footer>
        </div>
    </div>
  )
}

export default LoginHelp