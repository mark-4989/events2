import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom'
import Table from './table';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const[data,setData]=useState({ 
    firstname:'',
    lastname:'',
  email:'',
  phone:'',
  eventtype:'',
  siku:'' ,
  guestcount:''
})
const navigate = useNavigate()
const handleSubmit = (e)=>{
e.preventDefault();
axios.post('http://localhost:3001/api/',data)
.then(res=>{console.log(res) 
navigate('/login')})
.catch(err=>console.log(err))
}
  return (
    <section className="contact-section">
    <div className="container">
      <h2>Book an Event</h2>
      <Form className="contact-form" onSubmit={handleSubmit}>
        {/* Form inputs */}
        <Form.Group controlId="firstname">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstname"
            placeholder="Enter First Name"
            required
            onChange={(e) => setData({ ...data, firstname: e.target.value })}
          />
        </Form.Group>

        <Form.Group controlId="lastname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastname"
            placeholder="Enter Last Name"
            required
            onChange={(e) => setData({ ...data, lastname: e.target.value })}
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter Email"
            required
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </Form.Group>

        <Form.Group controlId="phone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            name="phone"
            placeholder="Enter Phone Number"
            required
            onChange={(e) => setData({ ...data, phone: e.target.value })}
          />
        </Form.Group>

        <Form.Group controlId="eventtype">
          <Form.Label>Event Type</Form.Label>
          <Form.Control
            type="text"
            name="eventtype"
            placeholder="Enter Event Type"
            required
            onChange={(e) => setData({ ...data, eventtype: e.target.value })}
          />
        </Form.Group>

        <Form.Group controlId="date">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            name="siku"
            placeholder="Enter Event Date"
            required
            onChange={(e) => setData({ ...data, siku: e.target.value })}
          />
        </Form.Group>

        <Form.Group controlId="guestcount">
          <Form.Label>Guest Count</Form.Label>
          <Form.Control
            type="number"
            name="guestcount"
            placeholder="Enter Number of Guests"
            required
            onChange={(e) => setData({ ...data, guestcount: e.target.value })}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <div className="form-buttons">
        {/* <Link to="/Table" className="btn btn-primary">View Table</Link> */}
        <Link to="/signup" className="btn btn-secondary">Sign Up</Link>
      </div>
    </div>
  </section>
    
  );
}

export default Contact;