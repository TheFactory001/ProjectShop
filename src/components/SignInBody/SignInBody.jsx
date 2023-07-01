import React from 'react'
import './SignInBody.css'

const SignInBody = () => {
  return (
    <div className="wrapper">
        <div >
            
            <h4 className="main-text">
                Enter your Email to start shopping with us
            </h4>
            <input className='input' type="text" />
            <div className="policy-text">
                <p>I agree to <b>Th3F4ctory's</b>  <u>Privacy Policy</u>  and  <u>Terms of Use</u></p>
            
            <input className='policy-input' type="checkbox" />
            
            </div>
           <div className="btn-wrapper">
           <button className='action-btn'>Send Code</button>
          
           </div>
            
            
        </div>
    </div>
  )
}

export default SignInBody