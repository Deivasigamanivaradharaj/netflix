import React from 'react'

function Footer() {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='telephone'>
                Questions? Call <a href="tel:000-800-919-1694">000-800-919-1694</a>
            </div>
            <div className='links'>
                <div className='link-container'>
                    <a href=''>FAQ</a>
                    <a href=''>Investor Relations</a>
                    <a href=''>Privacy</a>
                    <a href=''>Speed Test</a>
                </div>
                <div className='link-container'>
                    <a href=''>Help Center</a>
                    <a href=''>Jobs</a>
                    <a href=''>Cookie Preference</a>
                    <a href=''>Legal Notice</a>
                </div>
                <div className='link-container'>
                    <a href=''>Account</a>
                    <a href=''>Ways to Watch</a>
                    <a href=''>Corporate Information</a>
                    <a href=''>Only on Netflix</a>
                </div>
                <div className='link-container'>
                    <a href=''>Media Care</a>
                    <a href=''>Terms of use</a>
                    <a href=''>Contact Us</a>
                </div>
            </div>
            <select>
                <option>English</option>
                <option>Hindi</option>
            </select>
            <p>Netflix India</p>
        </div>
    </div>
  )
}

export default Footer