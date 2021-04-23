import React, { useState } from 'react';
import './Emailer.css';
import axios from 'axios';

export default function Emailer (props){
  
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [title, setTitle] = useState ('')
const [message, setMessage] = useState('')
const [image, setImage] = useState('')

  const handleSend = () => {
    const body = { name, email, message, title, image } 
    axios.post('/api/email', body )
    .then(res => {
        setName(''); 
        setEmail(''); 
        setTitle(''); 
        setMessage('');
        setImage('');
        console.log(res.data);
        alert('Your message has been sent!')
    })
    .catch(err => console.log(err))
  }
    
  
  return (
      <div className='body'>
        <div className='form'>
          <h1 className='header'>Email</h1>
          <input placeholder='title' name='title' value={title} onChange={e => setTitle(e.target.value)} />
          <input placeholder='name' name='name' value={name} onChange={e => setName(e.target.value)} />
          <input  placeholder='email' name='email' value={email} onChange={e => setEmail(e.target.value)} />
          <textarea className='textareaE' placeholder='message' name='message' value={message}onChange={e => setMessage(e.target.value)} />
          <input  placeholder='image' name='image' value={image} onChange={e => setImage(e.target.value)} />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    )
  }
