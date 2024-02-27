import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function RegForm() {

    const navigate = useNavigate();

    function next(){
        var validRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(document.getElementById("email").value !="" && document.getElementById("email").value.match(validRegex) && document.getElementById("password").value !=""){
          navigate("/signup/chooseplan");
        }
      }

  return (
    <div className='regform'>
      <span>STEP <b>1</b> OF <b>3</b></span>
      <h1>Create a password to start your membership</h1>
      <div className='textcontent'>
        <span>Just a few more steps and you're done!</span>
        <span>We hate paperwork, too.</span>
      </div>
      <form>
        <div className='input-group'>
            <input type="email" id='email' name='email' onInput={()=>{
                document.getElementById("emailvalidation").style.display = "none"
                document.getElementById("invalidemail").style.display = "none";
                                var validRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                if(document.getElementById("email").value != "" && !document.getElementById("email").value.match(validRegex)){
                                  document.getElementById("invalidemail").style.display = "block"
                                    document.getElementById("email").style.border = "1px solid red"
                                }
                                else{
                                  document.getElementById("email").style.border = "1px solid green"
                                }
            }} autoComplete="email" onBlur={()=>{
                if(document.getElementById("email").value === ""){
                    document.getElementById("emailvalidation").style.display = "block"
                    document.getElementById("email").style.border = "1px solid red"
                }
            }} placeholder="email"/>
            <label id='emaillabel' htmlFor="email">Email</label>
            <span className='emailvalidation validationmsg' id='emailvalidation'>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="e1vkmu651 default-ltr-cache-2zeu8w e1svuwfo1" data-name="CircleX" aria-labelledby=":r6:" role="img" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z" fill="currentColor"></path></svg>
                    Email is required.</span>
            <span className='invalidemail validationmsg' id='invalidemail'>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="e1vkmu651 default-ltr-cache-2zeu8w e1svuwfo1" data-name="CircleX" aria-labelledby=":r6:" role="img" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z" fill="currentColor"></path></svg>
                    Please enter a valid email address or phone number.</span>
    </div>
    <div className='input-group'>
            <input type="password" id='password' name='password' onInput={()=>{
                document.getElementById("passwordvalidation").style.display = "none"
                document.getElementById("password").style.border = "1px solid rgb(133, 133, 133)"
            }} autoComplete="password" onBlur={()=>{
                if(document.getElementById("password").value === ""){
                    document.getElementById("passwordvalidation").style.display = "block"
                    document.getElementById("password").style.border = "1px solid red"
                }
            }} placeholder="password"/>
            <label id='passwordlabel' htmlFor="password">Add a Password</label>
            <span className='passwordvalidation validationmsg' id='passwordvalidation'>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="e1vkmu651 default-ltr-cache-2zeu8w e1svuwfo1" data-name="CircleX" aria-labelledby=":r6:" role="img" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z" fill="currentColor"></path></svg>
                    Password is required.</span>
        </div>
      </form>

      <Link to={'../chooseplan'} onClick={(e)=>{
              e.preventDefault();
              next();
            }}><button>Next</button></Link>
    </div>
  )
}

export default RegForm