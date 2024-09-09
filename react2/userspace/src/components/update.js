import React from "react";
import {useNavigate, useParams} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import axios from "axios";
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { useEffect } from "react";


function Update(){
  const {id}= useParams()
  const [firstname,setFirst]= useState({})
  const [lastname,setLast]= useState({})
  const [email,setEmail]= useState({})
  const [phone,setPhone]= useState({})
  const [eventtype,setEvent]= useState({})
  const [siku,setSiku]= useState({})
  const [guestcount,setGuest]= useState({})
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get('http://localhost:3001/api/'+id)
    .then(res =>console.log(res))
    .catch(err =>console.log(err))
},[] )
    return(
        <div className='once'>
        <Form className='forms' >
          <h2>Enter Your Details Here</h2>
         <label>First Name : </label>
         <input type='' name='firstname'  placeholder='enter first name' required />
         <label>Last Name : </label>
         <input type='' name='lastname'  placeholder='enter last name' required /><br></br>
         <label>Email : </label>
         <input type='' name='email'  placeholder='enter email' required/>
         <label>Phone Number : </label>
         <input type='Number' name='phone'  placeholder='enter phone number' required /><br></br>
         <label>Event Type : </label>
         <input type='' name='eventtype'  placeholder='enter type of event' required />
         <label>Date : </label>
         <input type='Date' name='siku'  placeholder='enter event date' require /><br></br>
         <label>Guest Count : </label>
         <input type='Number' name='guestcount'  placeholder='enter number of guest' required/><br></br>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          </Form>
          </div>
    )
}
export default Update;