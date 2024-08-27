import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Link from 'react-router-dom'
import Table from './table';
import { useState } from 'react';

function Contact() {
  const[data,setData]=useState({ 
    firstname:'',
    lastname:'',
  email:'',
  phone:'',
  eventtype:'',
  siku:'',
  guestcount:''
})
  return (
    <div className='once'>
    <Form className='forms'>
      <h2>Enter Your Details Here</h2>
     <label>First Name : </label>
     <input type='text' name='firstname'  placeholder='enter first name' required  onChange={e=> setData({...data,firstname:e.target.value})}/>
     <label>Last Name : </label>
     <input type='text' name='lastname'  placeholder='enter last name' required onChange={e=> setData({...data,lastname:e.target.value})}/><br></br>
     <label>Email : </label>
     <input type='email' name='email'  placeholder='enter email' required onChange={e=> setData({...data,email:e.target.value})}/>
     <label>Phone Number : </label>
     <input type='number' name='phone'  placeholder='enter phone number' required max={10} onChange={e=> setData({...data,phone:e.target.value})}/><br></br>
     <label>Event Type : </label>
     <input type='text' name='eventtype'  placeholder='enter type of event' required onChange={e=> setData({...data,eventtype:e.target.value})} />
     <label>Date : </label>
     <input type='date' name='siku'  placeholder='enter event date' required onChange={e=> setData({...data,siku:e.target.value})} /><br></br>
     <label>Guest Count : </label>
     <input type='number' name='guestcount'  placeholder='enter number of guest' required onChange={e=> setData({...data,guestcount:e.target.value})}/><br></br>
      <Button variant="primary" type="submit">
        Submit
      </Button>
     
    </Form>
    <Button variant="primary" type="" href='Table'>
        table
      </Button>
    </div>
  );
}

export default Contact;