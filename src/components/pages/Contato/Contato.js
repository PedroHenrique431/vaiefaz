import React from 'react'
import Form from '../Contato/Form/Form'
import '../Contato/Form/Form.css'

const SignupPage = () => {
  return (

    
    <div className='form-container'>
      <div className='form-content-left'>
        <img src='./images/svg-4.svg' alt='contato' className='form-img'/>
      </div>
        <Form/>
    </div>
  )
}

export default SignupPage