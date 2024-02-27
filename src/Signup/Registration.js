import React from 'react'
import { Link } from 'react-router-dom'

function Registration() {
  return (
    <div className='registration'>
      <img src='../registration.png'></img>
      <span>STEP <b>1</b> OF <b>3</b></span>
      <h1>Finish setting up your account</h1>
      <div className='textcontent'>
        <span>Netflix is personalised for you.</span>
        <span>Create a password to watch on any</span>
        <span>device at any time.</span>
      </div>
      <Link to={'../regform'}><button>Next</button></Link>
    </div>
  )
}

export default Registration