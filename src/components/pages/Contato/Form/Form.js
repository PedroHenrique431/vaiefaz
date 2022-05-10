import React from 'react'
import { Button } from '../../../Button'
import './Form.css'
import InputMask from 'react-input-mask';


function Form() {

    

  return (
    <div className='form-content-right'>

      <form className='form' action="https://formsubmit.co/vaiefazassistencia@gmail.com" method="POST">
        <input type="hidden" name="_captcha" value="false"/>
        <h1>Conta pra gente sobre o que precisa resolver na sua máquina. <br/><br/> <p>Em breve enviaremos um e-mail para continuar a conversa :D </p></h1>
        <input type="hidden" name="_template" value="table"/>
        <input type="hidden" name="_next" value="https://vaiefaz.vercel.app/confirmado"/>


          <div className='form-inputs'>
            <label htmlFor='Nome' className='form-label'>Nome:</label>
            <input id='Nome'  type='text' name='Nome' className='form-input' placeholder='Digite seu nome'  required/>
          </div>

          <div className='form-inputs'>
            <label htmlFor='Email' className='form-label'>E-mail:</label>
            <input id='Email'  type='email' name='Email' className='form-input' placeholder='Digite seu e-mail'  required/>
          </div>

          <div className='form-inputs'>
            <label htmlFor='Telefone' className='form-label'>Telefone (Whatsapp):</label>
            <InputMask id='Telefone'  name='Telefone' className='form-input' mask="(99) 9999-9999" ></InputMask>
          </div>

          <div className='form-inputs'>
            <label htmlFor='Problema' className='form-label'>Descreva o problema que gostaria de corrigir:</label>
            <textarea id='Problema'  type='text' rows='50' name='Problema' className='form-input' placeholder='...'   required/>
          </div>

          <div className='form-inputs'>
            <Button type='submit' buttonStyle='btn--outline' buttonColor='red'>Enviar</Button>
          </div>


      </form>

      
    </div>
  )
}

export default Form