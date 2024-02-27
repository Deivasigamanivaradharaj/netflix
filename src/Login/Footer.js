import React from 'react'

function Footer() {
  return (
    <footer>
            <div className='container'>
            <div className='telephone'>
                Questions? Call <a href="tel:000-800-919-1694">000-800-919-1694</a>
            </div>
            <div className='links'>
                <div className='link-container'>
                    <a href=''>FAQ</a>
                    <a href=''>Cookie Preference</a>
                </div>
                <div className='link-container'>
                    <a href=''>Help Center</a>
                    <a href=''>Corporate Information</a>
                </div>
                <div className='link-container'>
                <a href=''>Terms of use</a>
                </div>
                <div className='link-container'>
                    <a href=''>Privacy</a>
                </div>
            </div>
            <select>
                <option>English</option>
                <option>Hindi</option>
            </select>
        </div>
            </footer>
  )
}

export default Footer