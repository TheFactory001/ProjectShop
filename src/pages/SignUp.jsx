import React, { useState } from 'react'
import NavBar from '../components/NavBar/NavBar'
import SignInBody from '../components/SignInBody/SignInBody'
import SignInBody2 from '../components/SignInBody/SignInBody2'

const SignUp = () => {
    const authState = useState(false)
  return (
    <>
    <NavBar searchPlaceholder="Search" isAuth={authState}/>
    <SignInBody2/>
    </>
  )
}

export default SignUp