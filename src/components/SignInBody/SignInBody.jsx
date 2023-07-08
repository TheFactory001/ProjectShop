import React, { useEffect, useRef, useState } from 'react'
import './SignInBody.css'

const SignInBody = (props) => {
  const emailRef =useRef(null);
  const [code, setCode]= useState(0);
  const [isAgreed, setIsAgreed]=useState(false)
  const generateCode = ()=>{
    setCode(Math.floor(Math.random()*1000000))};
  const [userEmail, setUserEmail] = useState("")
  const validateEmail =()=>{
    return(/\S+@\S+\.\S+/.test(userEmail))
  }
  const handleChange =(event)=>{
    setIsAgreed(event.target.checked)
  }
  useEffect(generateCode,[])
  return (
    <div className="wrapper">
        <div >
            
            <h4 className="main-text">
                Enter your Email to start shopping with us
            </h4>
            <input className='input' type='email' ref={emailRef} onChange={(event) =>setUserEmail(event.target.value)}/>
            <div className="policy-text">
                <p>I agree to <b>Th3F4ctory's</b>  <span className='inline-link'>Privacy Policy</span>  and  <span className='inline-link'>Terms of Use</span></p>
            
                <input className='policy-input' onChange={handleChange} type="checkbox" />
            
            </div>
           <div className="btn-wrapper">
           <button className='action-btn' disabled= {!isAgreed} onClick={()=>{
            if (validateEmail()){
              generateCode()
              console.log(code)
              
            }
            else{
              alert("fail")
            }
            // console.log(emailRef.current.value)

            props.onSendCodeBtn(userEmail)}}>Send Code</button>
          
           </div>
            
            
        </div>
    </div>
  )
}

export default SignInBody