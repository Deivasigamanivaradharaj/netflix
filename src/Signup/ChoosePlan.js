import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

function ChoosePlan() {
  return (
    <div className='chooseplan'>
      <FontAwesomeIcon icon={faCircleCheck} style={{color: "#ff0000",}} />
      <span>STEP <b>2</b> OF <b>3</b></span>
      <h1>Choose your plan.</h1>
      <div className='checklist'>
        <FontAwesomeIcon icon={faCheck} />
        <span>No commitments, cancel anytime.</span>
      </div>
      <div className='checklist'>
        <FontAwesomeIcon icon={faCheck} />
        <span>Everything on Netflix for one low price.</span>
      </div>
      <div className='checklist'>
        <FontAwesomeIcon icon={faCheck} />
        <span>No ads and no extra fees. Ever.</span>
      </div>
      <Link to={'../planform'}><button>Next</button></Link>
    </div>
  )
}

export default ChoosePlan