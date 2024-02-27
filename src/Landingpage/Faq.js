import React from 'react'
import GetStarted from './GetStarted'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

function Faq() {

    const navigate = useNavigate();

    function login(id){
        var validRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(document.getElementById(id).value !="" && document.getElementById(id).value.match(validRegex)){
          navigate("/signup/registration");
        }
      }

  return (
    <div className='faq'>
        <div className='container'>
            <h2>Frequently Asked Questions</h2>
            <div className='faq-list'>
                <ul>
                    <li>
                        <h3 className='question' id='question1'>
                            <button onClick={(event)=>{
                                event.preventDefault();
                                var content = document.getElementById('answer1');
                                var plus = document.getElementById('plus1');
                                if (content.style.visibility != "visible") {
                                    content.style.visibility = "visible";
                                    content.style.maxHeight = "75rem";
                                    content.style.paddingTop = "1.5rem"
                                    content.style.paddingBottom = "1.5rem"
                                    plus.style.transform = "rotateZ(45deg)";
                                } 
                                else {
                                    content.style.visibility = "collapse";
                                    content.style.maxHeight = "0rem";
                                    content.style.paddingTop = "0rem"
                                    content.style.paddingBottom = "0rem"
                                    plus.style.transform = "rotateZ(0deg)";
                                }
                            }}>
                                <span>What is Netflix?</span>
                                <FontAwesomeIcon id='plus1' icon={faPlus} />
                            </button>
                        </h3>
                        <div className='answer' id='answer1'>
                            <span>
                                Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                                <br></br>
                                <br></br>
                                You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                            </span>
                        </div>
                    </li>
                    <li>
                        <h3 className='question' id='question2'>
                            <button onClick={(event)=>{
                                event.preventDefault();
                                var content = document.getElementById('answer2');
                                var plus = document.getElementById('plus2');
                                if (content.style.visibility != "visible") {
                                    content.style.visibility = "visible";
                                    content.style.maxHeight = "75rem";
                                    content.style.paddingTop = "1.5rem"
                                    content.style.paddingBottom = "1.5rem"
                                    plus.style.transform = "rotateZ(45deg)";
                                } 
                                else {
                                    content.style.visibility = "collapse";
                                    content.style.maxHeight = "0rem";
                                    content.style.paddingTop = "0rem"
                                    content.style.paddingBottom = "0rem"
                                    plus.style.transform = "rotateZ(0deg)";
                                }
                            }}>
                                <span>How much does Netflix cost?</span>
                                <FontAwesomeIcon id='plus2' icon={faPlus} />
                            </button>
                        </h3>
                        <div className='answer' id='answer2'>
                            <span>
                            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹649 to ₹149 a month. No extra costs, no contracts.
                            </span>
                        </div>
                    </li>
                    <li>
                        <h3 className='question' id='question3'>
                            <button onClick={(event)=>{
                                event.preventDefault();
                                var content = document.getElementById('answer3');
                                var plus = document.getElementById('plus3');
                                if (content.style.visibility != "visible") {
                                    content.style.visibility = "visible";
                                    content.style.maxHeight = "75rem";
                                    content.style.paddingTop = "1.5rem"
                                    content.style.paddingBottom = "1.5rem"
                                    plus.style.transform = "rotateZ(45deg)";
                                } 
                                else {
                                    content.style.visibility = "collapse";
                                    content.style.maxHeight = "0rem";
                                    content.style.paddingTop = "0rem"
                                    content.style.paddingBottom = "0rem"
                                    plus.style.transform = "rotateZ(0deg)";
                                }
                            }}>
                                <span>Where can I watch?</span>
                                <FontAwesomeIcon id='plus3' icon={faPlus} />
                            </button>
                        </h3>
                        <div className='answer' id='answer3'>
                            <span>
                            Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                                <br></br>
                                <br></br>
                                You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                            </span>
                        </div>
                    </li>
                    <li>
                        <h3 className='question' id='question4'>
                            <button onClick={(event)=>{
                                event.preventDefault();
                                var content = document.getElementById('answer4');
                                var plus = document.getElementById('plus4');
                                if (content.style.visibility != "visible") {
                                    content.style.visibility = "visible";
                                    content.style.maxHeight = "75rem";
                                    content.style.paddingTop = "1.5rem"
                                    content.style.paddingBottom = "1.5rem"
                                    plus.style.transform = "rotateZ(45deg)";
                                } 
                                else {
                                    content.style.visibility = "collapse";
                                    content.style.maxHeight = "0rem";
                                    content.style.paddingTop = "0rem"
                                    content.style.paddingBottom = "0rem"
                                    plus.style.transform = "rotateZ(0deg)";
                                }
                            }}>
                                <span>How do I cancel?</span>
                                <FontAwesomeIcon id='plus4' icon={faPlus} />
                            </button>
                        </h3>
                        <div className='answer' id='answer4'>
                            <span>
                            Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                            </span>
                        </div>
                    </li>
                    <li>
                        <h3 className='question' id='question5'>
                            <button onClick={(event)=>{
                                event.preventDefault();
                                var content = document.getElementById('answer5');
                                var plus = document.getElementById('plus5');
                                if (content.style.visibility != "visible") {
                                    content.style.visibility = "visible";
                                    content.style.maxHeight = "75rem";
                                    content.style.paddingTop = "1.5rem"
                                    content.style.paddingBottom = "1.5rem"
                                    plus.style.transform = "rotateZ(45deg)";
                                } 
                                else {
                                    content.style.visibility = "collapse";
                                    content.style.maxHeight = "0rem";
                                    content.style.paddingTop = "0rem"
                                    content.style.paddingBottom = "0rem"
                                    plus.style.transform = "rotateZ(0deg)";
                                }
                            }}>
                                <span>What can I watch on Netflix?</span>
                                <FontAwesomeIcon id='plus5' icon={faPlus} />
                            </button>
                        </h3>
                        <div className='answer' id='answer5'>
                            <span>
                            Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                            </span>
                        </div>
                    </li>
                    <li>
                        <h3 className='question' id='question6'>
                            <button onClick={(event)=>{
                                event.preventDefault();
                                var content = document.getElementById('answer6');
                                var plus = document.getElementById('plus6');
                                if (content.style.visibility != "visible") {
                                    content.style.visibility = "visible";
                                    content.style.maxHeight = "75rem";
                                    content.style.paddingTop = "1.5rem"
                                    content.style.paddingBottom = "1.5rem"
                                    plus.style.transform = "rotateZ(45deg)";
                                } 
                                else {
                                    content.style.visibility = "collapse";
                                    content.style.maxHeight = "0rem";
                                    content.style.paddingTop = "0rem"
                                    content.style.paddingBottom = "0rem"
                                    plus.style.transform = "rotateZ(0deg)";
                                }
                            }}>
                                <span>Is Netflix good for kids?</span>
                                <FontAwesomeIcon id='plus6' icon={faPlus} />
                            </button>
                        </h3>
                        <div className='answer' id='answer6'>
                            <span>
                            The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
                                <br></br>
                                <br></br>
                                Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='getstartedcontainer'>
        <div className='readyques'>Ready to watch? Enter your email to create or restart your membership.</div>
        <div className='getstarted'>
            <input type='email' id='email1'  onInput={()=>{
                                document.getElementById("email1empty").style.display = "none";
                                document.getElementById("invalidemail1").style.display = "none";
                                var validRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                if(!document.getElementById("email1").value.match(validRegex)){
                                  document.getElementById("invalidemail1").style.display = "block"
                                    document.getElementById("email1").style.border = "1px solid red"
                                }
                                else{
                                  document.getElementById("email1").style.border = "1px solid green"
                                }
                            }} placeholder='Email address' onBlur={()=>{
                              if(document.getElementById("email1").value === ""){
                                  document.getElementById("email1empty").style.display = "block"
                                  document.getElementById("email1").style.border = "1px solid red"
                              }
                          }}></input>
            <button onClick={(e)=>{
              e.preventDefault();
              login('email1');
            }}>Get Started <i className="fa fa-angle-right"></i></button>
        </div>
        <span className='email1empty' id='email1empty'>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="e1vkmu651 default-ltr-cache-2zeu8w e1svuwfo1" data-name="CircleX" aria-labelledby=":r6:" role="img" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z" fill="currentColor"></path></svg>
          Email is required.
        </span>
        <span className='invalidemail1' id='invalidemail1'>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="e1vkmu651 default-ltr-cache-2zeu8w e1svuwfo1" data-name="CircleX" aria-labelledby=":r6:" role="img" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z" fill="currentColor"></path></svg>
          Please enter a valid email address.
        </span>
    </div>
        </div>
    </div>
  )
}

export default Faq