import React, { useState } from 'react'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import SignInBody from '../components/SignInBody/SignInBody'
import SignInBody2 from '../components/SignInBody/SignInBody2'

const SignIn = () => {
  const [isEmailReceived , setIsEmailReceived]= useState(false)
  const sendValdationCode=(email)=>{
    
    console.log('send code')
    console.log(email)

  }
  return (
    <div>
        <NavBar/>
        <div>

        {isEmailReceived ?<SignInBody2/>: <SignInBody onSendCodeBtn={(email)=>{sendValdationCode(email)}}/>}
        </div>
        
       
    </div>
  )
}

export default SignIn