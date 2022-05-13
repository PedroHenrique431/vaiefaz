import React from 'react'
import { Button } from '../../../Button'
import './Form.css'
import { useState } from "react";
import InputMask from 'react-input-mask';


function Form() {

    const [data, setData] = useState({
      
      Nome: "",
      Telefone: "",
      Email: "",
      Problema: "",
    });
  
    const {
      
      Nome,
      Telefone,
      Email,
      Problema,
    } = data;
  
    const handleCHange = (e) => {
      setData({ ..."", data, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        
        const response = await fetch(
          "https://v1.nocodeapi.com/vaiefaz/google_sheets/VPQWXlDIhOrTxhdE?tabId=Chamados",
          {
            method: "POST",
            
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify([
              [
                "",
                new Date().toLocaleString(),
                Nome,
                Telefone,
                Email,
                Problema,
              ],
            ]),
          }
        );
        await response.json();
        setData({
          ..."",
          data,
                Nome,
                Telefone,
                Email,
                Problema,
        });
        document.location.href="https://vaiefaz.vercel.app/confirmado";
      } catch (err) {
        console.log(err);
      }
    };
  




  return (
    <div className='form-content-right'>

      <form className='form' onSubmit={handleSubmit}>

        <h1>Conta pra gente sobre o que precisa resolver na sua máquina. <br/><br/> <p>Em breve enviaremos um e-mail para continuar a conversa :D </p></h1>

          <div className='form-inputs'>
            <label htmlFor='Nome' className='form-label'>Nome:</label>
            <input id='Nome' value={Nome} type='text' name='Nome' className='form-input' placeholder='Digite seu nome' onChange={handleCHange} required/>
          </div>

          <div className='form-inputs'>
            <label htmlFor='Email' className='form-label'>E-mail:</label>
            <input id='Email' value={Email} type='email' name='Email' className='form-input' placeholder='Digite seu e-mail' onChange={handleCHange} required/>
          </div>

          <div className='form-inputs'>
            <label htmlFor='Telefone' className='form-label'>Telefone (Whatsapp):</label>
            <InputMask id='Telefone' value={Telefone} name='Telefone' className='form-input' mask="(99) 9999-9999" onChange={handleCHange}></InputMask>
          </div>

          <div className='form-inputs'>
            <label htmlFor='Problema' className='form-label'>Descreva o problema que gostaria de corrigir:</label>
            <textarea id='Problema' value={Problema} type='text' rows='50' name='Problema' className='form-input' placeholder='...'  onChange={handleCHange} required/>
          </div>

          <div className='form-inputs'>
            <Button type='submit' buttonStyle='btn--outline' buttonColor='red'>Enviar</Button>
          </div>


      </form>

      
    </div>
  )
}

export default Form