import React from 'react'
import { useNavigate } from 'react-router-dom';

function GetStarted() {

  const navigate = useNavigate();

  function login(){
    var validRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(document.getElementById("email").value !="" && document.getElementById("email").value.match(validRegex)){
      console.log(document.getElementById("email").value)
      navigate("/signup/registration");
    }
  }

  return (
    <div className='getstartedcontainer'>
        <div className='readyques'>Ready to watch? Enter your email to create or restart your membership.</div>
        <div className='getstarted'>
            <input type='email' id='email'  onInput={()=>{
                                document.getElementById("emailempty").style.display = "none";
                                document.getElementById("invalidemail").style.display = "none";
                                var validRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                if(!document.getElementById("email").value.match(validRegex)){
                                  document.getElementById("invalidemail").style.display = "block"
                                    document.getElementById("email").style.border = "1px solid red"
                                }
                                else{
                                  document.getElementById("email").style.border = "1px solid green"
                                }
                            }} placeholder='Email address' onBlur={()=>{
                              if(document.getElementById("email").value === ""){
                                  document.getElementById("emailempty").style.display = "block"
                                  document.getElementById("email").style.border = "1px solid red"
                              }
                          }}></input>
            <button onClick={(e)=>{
              e.preventDefault();
              login();
            }}>Get Started <i className="fa fa-angle-right"></i></button>
        </div>
        <span className='emailempty' id='emailempty'>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="e1vkmu651 default-ltr-cache-2zeu8w e1svuwfo1" data-name="CircleX" aria-labelledby=":r6:" role="img" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z" fill="currentColor"></path></svg>
          Email is required.
        </span>
        <span className='invalidemail' id='invalidemail'>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="e1vkmu651 default-ltr-cache-2zeu8w e1svuwfo1" data-name="CircleX" aria-labelledby=":r6:" role="img" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z" fill="currentColor"></path></svg>
          Please enter a valid email address.
        </span>
    </div>
  )
}

export default GetStarted