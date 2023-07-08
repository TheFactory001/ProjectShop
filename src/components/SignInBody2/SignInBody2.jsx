import React, { useRef } from 'react'
import './SignInBody2.css'

const SignInBody2 = () => {
   const password_ref= useRef(null)
  return (
    <div className='wrapper'>
        <div className="market-container">

        <p>Complete Sign Up to join this market space</p>
       
        <form action="">
            <p>We have sent a code to your_email, put that code below. </p>
            <input className='input' type="text" placeholder='code'/>
            <input className='input' type="text" placeholder='First Name' />
            <input className='input' type="text" placeholder='Last Name'/>
            <input className='input' type="password" ref={password_ref} placeholder='Password'/>
            {/* {
                if (condition) {
                    
                }
            } */}
            <div className="newsletter">
                <input className='policy-input' type="checkbox" name="email-subscription" id="" />
                <p>Get update on new products and favourite shops</p>
            </div>

            <div className="btn-wrapper">

           <button className="action-btn">Create Account</button>
            </div>
        </form>
        </div>

    </div>
  )
}

export default SignInBody2