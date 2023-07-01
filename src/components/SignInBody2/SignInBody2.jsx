import React from 'react'
import './SignInBody2.css'

const SignInBody2 = () => {
  return (
    <div className='wrapper'>
        <div className="market-container">

        <p>Complete Sign Up to join this market space</p>
       
        <form action="">
            <p>We have sent a code to your_email, put that code below. </p>
            <input className='input' type="text" placeholder='code'/>
            <input className='input' type="text" placeholder='First Name' />
            <input className='input' type="text" placeholder='Last Name'/>
            <input className='input' type="password" placeholder='Password' />
            <input type="checkbox" name="email-subscription" id="" />

            <div className="btn-wrapper">

           <button className="action-btn">Create Account</button>
            </div>
        </form>
        </div>

    </div>
  )
}

export default SignInBody2