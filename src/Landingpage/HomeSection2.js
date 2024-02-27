import React from 'react'

function HomeSection2() {
  return (
    <div className='home-section-2'>
        <div className='container'>
            <div className='banner'>
                <div className='line-1'>Enjoy on your TV</div>
                <div className='line-2'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</div>
            </div>
            <div className='tv'>
                <video autoPlay playsInline muted loop>
                    <source src='videos/home-section-2-tv-video.m4v'></source>
                </video>
                <img src='home-section-2-tv.png'></img>
            </div>
        </div>
    </div>
  )
}

export default HomeSection2