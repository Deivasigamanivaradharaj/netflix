import React from 'react'
import GetStarted from './GetStarted';
import { Link } from 'react-router-dom';

function HomeHeader() {
  return (
    <div className='hero-1'>
        <div className='hero-1-container'>
            <div className='header'>
                <img src="https://live.lepatron.email/images_hebergees_tests/netflix/20181024_email_01/netflix.png" className='header-logo'></img>
                <div className='rightmenu'>
                  <select>
                    <option>English</option>
                    <option>Hindi</option>
                  </select>
                  <Link to={'./login'}><button className='signinbtn'>Sign in</button></Link>
                </div>
            </div>
            <div className='hero-1-banner'>
              <div className='line-1'>Unlimited movies, TV shows and more</div>
              <div className='line-2'>Watch anywhere. Cancel anytime.</div>
              <GetStarted></GetStarted>
            </div>
        </div>
    </div>
  )
}

export default HomeHeader