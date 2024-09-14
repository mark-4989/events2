import axios from "axios";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function Signup  () {
    const [reg,setReg] = useState({
        userName:'',
        password:''
    })
    const [confirm,setconfirm]= useState()
    const handleSignup = (e)=>{
e.preventDefault()
if(!reg.password === confirm){
    console.log('confirm password')
}else{
    axios.post('http://localhost:3001/login/',reg)
    .then(res=>{console.log(res)
        window.location.reload()
        
    })
    .catch(err =>console.log(err))
}

    }
    return(
        <div>
<div className="login-form" >
    <h2>Sign-up</h2>
    <form onSubmit={handleSignup}>
        <div className="form-group"> 
    <label className="label" > User Name : </label>
     <input className="input-field" type='string' name='userName'  placeholder='enter user name' required  onChange={e =>setReg({...reg,userName:e.target.value})}/>
     </div>
     <div className="form-group"> 
     <label className="label"> Password : </label>
     <input className="input-field" type='password' name='password'  placeholder='enter password' required onChange={e =>setReg({...reg,password:e.target.value})}/><br></br>
    </div>
    <div className="form-group"> 
     <label className="label"> Confirm Password : </label>
     <input className="input-field" type='password' name='confirm'  placeholder='enter password' required onChange={e =>setconfirm(e.target.value)}/><br></br>
    </div>
     <Button variant="primary" type="submit" className="button-container">
        Submit
      </Button>
      <p>already have an account <Link className="signup" to='/login'>Login</Link></p>
    </form>
    
</div>
        </div>
    )
    
}
export default Signup;