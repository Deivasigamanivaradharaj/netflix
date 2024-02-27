import React from 'react'

function HomeSection3() {
  return (
    <div className='home-section-3'>
        <div className='container'>
        <div className='phone'>
                <img id="pngimage" src='home-section-3-phone.png'></img>
                <div className='downloading'>
                    <img src='home-section-3-phone-image.png'></img>
                    <div className='std'>
                      <div className='st'>Stranger Things</div>
                      <div className='d'>Downloading...</div>
                    </div>
                    <img className='downloadgif' src='download-icon.gif'></img>
                </div>
            </div>
            <div className='banner'>
                <div className='line-1'>Download your shows to watch offline</div>
                <div className='line-2'>Save your favourites easily and always have something to watch.</div>
            </div>
        </div>
    </div>
  )
}

export default HomeSection3