import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

function PlanForm() {

    const [Selected, SetSelected] = useState("3");

  return (
    <div className='planform'>
        <br></br>
        <br></br>
      <span>STEP <b>2</b> OF <b>3</b></span>
      <h1>Choose the plan that’s right for you</h1>
      <br></br>
      <div className='packages'>
        <div className={Selected == '1' ? 'package-container active' : 'package-container'} onClick={(e)=>{
            e.preventDefault();
            SetSelected("1");
        }}>
            <div className='package-name'>
                <span>Premium</span>
                <span>4K + HDR</span>

                {Selected==1 && <div className='selected'>
                <FontAwesomeIcon icon={faCircleCheck} style={{color: "#ffffff",}} />
                </div>}
            </div>
            <div className='package-details'>
                <div className='detail-group'>
                    <span className='label'>Monthly price</span>
                    <span className='value'>₹649</span>
                </div>
                <div className='detail-group'>
                    <span className='label'>Video and sound quality</span>
                    <span className='value'>Best</span>
                </div>
                <div className='detail-group'>
                    <span className='label'>Resolution</span>
                    <span className='value'>4K (Ultra HD) + HDR</span>
                </div>
                <div className='detail-group'>
                    <span className='label'>Spatial audio (immersive sound)</span>
                    <span className='value'>Included</span>
                </div>
                <div className='detail-group'>
                    <span className='label'>Supported devices</span>
                    <span className='value'>TV, computer, phone, tablet</span>
                </div>
                <div className='detail-group'>
                    <span className='label'>Devices your household can watch at the same time</span>
                    <span className='value'>4</span>
                </div>
                <div className='detail-group last'>
                    <span className='label'>Download devices</span>
                    <span className='value'>6</span>
                </div>
            </div>
        </div>
        <div className={Selected == '2' ? 'package-container active' : 'package-container'} onClick={(e)=>{
            e.preventDefault();
            SetSelected("2");
        }}>
            <div className='package-name' style={{background: "radial-gradient(140.76% 131.96% at 100% 100%, rgb(176, 56, 220) 0%, rgba(74, 42, 150, 0.5) 73.57%, rgba(74, 42, 150, 0) 100%), rgb(29, 82, 157)"}}>
                <span>Standard</span>
                <span>1080p</span>
                {Selected==2 && <div className='selected'>
                <FontAwesomeIcon icon={faCircleCheck} style={{color: "#ffffff",}} />
                </div>}
            </div>
            <div className='package-details'>
                <div className='detail-group'>
                    <span className='label'>Monthly price</span>
                    <span className='value'>₹499</span>
                </div>
                <div className='detail-group'>
                    <span className='label'>Video and sound quality</span>
                    <span className='value'>Great</span>
                </div>
                <div className='detail-group'>
                    <span className='label'>Resolution</span>
                    <span className='value'>1080p (Full HD)</span>
                </div>
                <div className='detail-group'>
                    <span className='label'>Supported devices</span>
                    <span className='value'>TV, computer, phone, tablet</span>
                </div>
                <div className='detail-group'>
                    <span className='label'>Devices your household can watch at the same time</span>
                    <span className='value'>2</span>
                </div>
                <div className='detail-group last'>
                    <span className='label'>Download devices</span>
                    <span className='value'>2</span>
                </div>
            </div>
        </div>
        <div className={Selected == '3' ? 'package-container active' : 'package-container'} onClick={(e)=>{
            e.preventDefault();
            SetSelected("3");
        }}>
            <div className='package-name' style={{background: "radial-gradient(140.76% 131.96% at 100% 100%, rgb(109, 59, 227) 0%, rgba(74, 42, 150, 0.5) 73.57%, rgba(74, 42, 150, 0) 100%), rgb(29, 82, 157)"}}>
                <span>Basic</span>
                <span>720p</span>
                {Selected==3 && <div className='selected'>
                <FontAwesomeIcon icon={faCircleCheck} style={{color: "#ffffff",}} />
                </div>}
            </div>
            <div className='package-details'>
                <div className='detail-group'>
                    <span className='label'>Monthly price</span>
                    <span className='value'>₹199</span>
                </div>
                <div className='detail-group'>
                    <span className='label'>Video and sound quality</span>
                    <span className='value'>Good</span>
                </div>
                <div className='detail-group'>
                    <span className='label'>Resolution</span>
                    <span className='value'>720p (HD)</span>
                </div>
                <div className='detail-group'>
                    <span className='label'>Supported devices</span>
                    <span className='value'>TV, computer, phone, tablet</span>
                </div>
                <div className='detail-group'>
                    <span className='label'>Devices your household can watch at the same time</span>
                    <span className='value'>1</span>
                </div>
                <div className='detail-group last'>
                    <span className='label'>Download devices</span>
                    <span className='value'>1</span>
                </div>
            </div>
        </div>
        <div className={Selected == '4' ? 'package-container active' : 'package-container'} onClick={(e)=>{
            e.preventDefault();
            SetSelected("4");
        }}> 
            <div className='package-name' style={{background: "radial-gradient(140.76% 131.96% at 100% 100%, rgb(33, 114, 227) 0%, rgba(74, 42, 150, 0.5) 73.57%, rgba(74, 42, 150, 0) 100%), rgb(29, 82, 157)"}}>
                <span>Mobile</span>
                <span>480p</span>
                {Selected==4 && <div className='selected'>
                <FontAwesomeIcon icon={faCircleCheck} style={{color: "#ffffff",}} />
                </div>}
            </div>
            <div className='package-details'>
                <div className='detail-group'>
                    <span className='label'>Monthly price</span>
                    <span className='value'>₹149</span>
                </div>
                <div className='detail-group'>
                    <span className='label'>Video and sound quality</span>
                    <span className='value'>Fair</span>
                </div>
                <div className='detail-group'>
                    <span className='label'>Resolution</span>
                    <span className='value'>480p</span>
                </div>
                <div className='detail-group'>
                    <span className='label'>Supported devices</span>
                    <span className='value'>Mobile phone, tablet</span>
                </div>
                <div className='detail-group'>
                    <span className='label'>Devices your household can watch at the same time</span>
                    <span className='value'>1</span>
                </div>
                <div className='detail-group last'>
                    <span className='label'>Download devices</span>
                    <span className='value'>1</span>
                </div>
            </div>
        </div>
      </div>
      <p>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our Terms of Use for more details.
Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.</p>
      <Link to={'../paymentPicker'}><button>Next</button></Link>
      <br></br>
    </div>
  )
}

export default PlanForm