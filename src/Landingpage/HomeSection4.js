import React from 'react'

function HomeSection4() {
  return (
    <div className='home-section-4'>
        <div className='container'>
            <div className='banner'>
                <div className='line-1'>Watch everywhere</div>
                <div className='line-2'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</div>
            </div>
            <div className='pc'>
                <video autoPlay playsInline muted loop>
                    <source src='videos/home-section-4-pc-video.m4v'></source>
                </video>
                <img src='home-section-4-pc.png'></img>
            </div>
        </div>
    </div>
  )
}

export default HomeSection4