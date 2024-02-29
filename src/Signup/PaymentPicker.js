import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function PaymentPicker() {
  return (
    <div className='paymentpicker'>
      <FontAwesomeIcon icon={faLock} />
      <span>STEP <b>3</b> OF <b>3</b></span>
      <h1>Choose how to pay</h1>
      <span>Your payment is encrypted and you can change your</span>
      <span>payment method at anytime.</span>
      <div className='dark'>Secure for peace of mind.</div>
      <div className='dark'>Cancel easily online.</div>
      <Link to={'../../home'}><button>
        <div>Credit or Debit Card</div>
        <FontAwesomeIcon icon={faAngleRight} />
      </button></Link>
      <Link to={'../../home'}><button>
        <div>UPI Autopay</div>
        <FontAwesomeIcon icon={faAngleRight} />
      </button></Link>
      
    </div>
  )
}

export default PaymentPicker