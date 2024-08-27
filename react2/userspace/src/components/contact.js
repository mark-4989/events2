import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Link from 'react-router-dom'
import Table from './table';

function Contact() {
  
  return (
    <div className='once'>
    <Form className='forms'>
      <h2>Enter Your Details Here</h2>
     <label>First Name : </label>
     <input type='text' name='firstname'  placeholder='enter first name' required />
     <label>Last Name : </label>
     <input type='text' name='lastname'  placeholder='enter last name' required /><br></br>
     <label>Email : </label>
     <input type='email' name='email'  placeholder='enter email' required/>
     <label>Phone Number : </label>
     <input type='number' name='phone'  placeholder='enter phone number' required max={10}/><br></br>
     <label>Event Type : </label>
     <input type='text' name='eventtype'  placeholder='enter type of event' required />
     <label>Date : </label>
     <input type='date' name='siku'  placeholder='enter event date' required /><br></br>
     <label>Guest Count : </label>
     <input type='number' name='guestcount'  placeholder='enter number of guest' required /><br></br>
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