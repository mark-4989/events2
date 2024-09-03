import axios from "axios";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

function Signup  () {
    const [reg,setReg] = useState({
        username:'',
        password:''
    })
    const handleSignup = (e)=>{
e.preventDefault()
axios.post('http://localhost:3001/login/',reg)
.then(res=>console.log(res))
.catch(err =>console.log(err))
    }
    return(
        <div>
<div>
    <form onSubmit={handleSignup}>
    <label> User Name : </label>
     <input type='string' name='username'  placeholder='enter user name' required  onChange={e =>setReg({...reg,username:e.target.value})}/>
     <label> Password : </label>
     <input type='password' name='password'  placeholder='enter password' required onChange={e =>setReg({...reg,username:e.target.value})}/><br></br>
     <label>Email : </label>
     <Button variant="primary" type="submit">
        Submit
      </Button>
    </form>
    <p>already have an account <a>Login</a></p>
</div>
        </div>
    )
    
}
export default Signup;