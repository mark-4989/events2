import React, { useState } from "react";
import {useNavigate, useParams} from 'react-router-dom'

function update (){
  const {id}=useParams()
  const{firstname,setFirst}=useState()
  const{lastname,setLast}=useState()
  const{email,setEmail}=useState()
  const{phone,setPhone}=useState()
  const{eventtype,setEvent}=useState()
  const{siku,setSiku}=useState()
  const{guestcount,setGuest}=useState()
  const navigate = useNavigate(

  )

  useEffect(()=>{
    axios.get('http://localhost:3001/api/'+id)
    .then(res =>console.log(res))
    .catch(err =>console.log(err))
},[] )
    return(
        <div className='once'>
        <Form className='forms' onSubmit={handleSubmit} autoFill='off'>
          <h2>Enter Your Details Here</h2>
         <label>First Name : </label>
         <input type='' name='firstname'  placeholder='enter first name' required  onChange={e=> setData({...data,firstname:e.target.value})}/>
         <label>Last Name : </label>
         <input type='' name='lastname'  placeholder='enter last name' required onChange={e=> setData({...data,lastname:e.target.value})}/><br></br>
         <label>Email : </label>
         <input type='' name='email'  placeholder='enter email' required onChange={e=> setData({...data,email:e.target.value})}/>
         <label>Phone Number : </label>
         <input type='Number' name='phone'  placeholder='enter phone number' required  onChange={e=> setData({...data,phone:e.target.value})}/><br></br>
         <label>Event Type : </label>
         <input type='' name='eventtype'  placeholder='enter type of event' required onChange={e=> setData({...data,eventtype:e.target.value})} />
         <label>Date : </label>
         <input type='Date' name='siku'  placeholder='enter event date' required onChange={e=> setData({...data,siku:e.target.value})} /><br></br>
         <label>Guest Count : </label>
         <input type='Number' name='guestcount'  placeholder='enter number of guest' required onChange={e=> setData({...data,guestcount:e.target.value})}/><br></br>
          <Button variant="primary" type="submit" onSubmit={handleSubmit}>
            Submit
          </Button>
          </Form>
          </div>
    )
}
export default update;