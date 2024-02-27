import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faAngleRight } from '@fortawesome/free-solid-svg-icons'

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
      <button>
        <div>Credit or Debit Card</div>
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
      <button>
        <div>UPI Autopay</div>
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  )
}

export default PaymentPicker