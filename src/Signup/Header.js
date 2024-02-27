import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
                <Link to={'../'}><img src="https://live.lepatron.email/images_hebergees_tests/netflix/20181024_email_01/netflix.png" className='header-logo'></img></Link>
                <Link style={{textDecoration:'none'}} to={'../login'}><h3>Sign In</h3></Link>
            </div>
  )
}

export default Header