import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Login() {

const [SignInCode, setSignInCode] = useState(false);

function signincodetoggle() {
    if(SignInCode){
        setSignInCode(false);
    }
    else{
        setSignInCode(true);
    }
  }
    

  return (
    <div className='login'>
        <div className='container'>
            <div className='header'>
                <Link to={'../'}>
                <img src="https://live.lepatron.email/images_hebergees_tests/netflix/20181024_email_01/netflix.png" className='header-logo'></img>
                </Link>
            </div>
            <div className='loginbox'>
                <div className='box'>
                    <header><h1>Sign In</h1></header>
                    <form>
                        <div className='input-group'>
                            <input type="email" id='email' name='email' onInput={()=>{
                                document.getElementById("emailvalidation").style.display = "none"
                            }} autoComplete="email" onBlur={()=>{
                                if(document.getElementById("email").value === ""){
                                    document.getElementById("emailvalidation").style.display = "block"
                                }
                            }}/>
                            <label id='emaillabel' htmlFor="email">Email or Phone number</label>
                            <span className='emailvalidation validationmsg' id='emailvalidation'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="e1vkmu651 default-ltr-cache-2zeu8w e1svuwfo1" data-name="CircleX" aria-labelledby=":r6:" role="img" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z" fill="currentColor"></path></svg>
                                 Please enter a valid email address or phone number.</span>
                        </div>
                        {!SignInCode && <><div className='input-group'>
                            <input type="password" id='password' name='password' onInput={()=>{
                                document.getElementById("passwordvalidation").style.display = "none"
                            }} autoComplete="password" onBlur={()=>{
                                if(document.getElementById("password").value === ""){
                                    document.getElementById("passwordvalidation").style.display = "block"
                                }
                            }}/>
                            <label id='passwordlabel' htmlFor="password">Password</label>
                            <span className='passwordvalidation validationmsg' id='passwordvalidation'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="e1vkmu651 default-ltr-cache-2zeu8w e1svuwfo1" data-name="CircleX" aria-labelledby=":r6:" role="img" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z" fill="currentColor"></path></svg>
                            Your password must contain between 4 and 60 characters.</span>
                        </div>
                        <div className='input-group'>
                            <button className='signinbtn'>Sign In</button>
                        </div></>}
                        {SignInCode && <div className='input-group'>
                            <button className='sendsignincodebtn'>Send sign-in code</button>
                        </div>}

                        <p>OR</p>
                            <div className='input-group'>
                            <button onClick={(e)=>{
                                e.preventDefault();
                                signincodetoggle()
                            }} className='signincode'> {!SignInCode &&"Use a sign-in code"}{SignInCode &&"Use Password"}</button>
                        </div>
                        <Link to={'../LoginHelp'}><a href=''>Forgot Password?</a></Link>
                        <div>
                            <div className='checkbox-group'>
                            <input type='checkbox'></input><p>Remember me</p>
                        </div>
                        <div className='link-group'>
                            <p>New to Netflix? <Link to={'../'}><a>Sign Up Now.</a></Link></p>
                        </div>
                        <p className='captcha'>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    </div>
  )
}

export default Login