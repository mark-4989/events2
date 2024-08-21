import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact() {
  return (
    <div className='once'>
    <Form className='forms'>
     <label>First Name : </label>
     <input type='string' name='firstname'  placeholder='enter first name' required />
     <label>Last Name : </label>
     <input type='string' name='lastname'  placeholder='enter last name' required /><br></br>
     <label>Email : </label>
     <input type='email' name='email'  placeholder='enter email' required/>
     <label>Phone Number : </label>
     <input type='number' name='phone'  placeholder='enter phone number' required max={10}/><br></br>
     <label>Event Type : </label>
     <input type='string' name='eventtype'  placeholder='enter type of event' required />
     <label>Date : </label>
     <input type='date' name='siku'  placeholder='enter event date' required /><br></br>
     <label>Guest Count : </label>
     <input type='number' name='guestcount'  placeholder='enter number of guest' required /><br></br>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default Contact;