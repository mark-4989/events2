import React  from "react";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useState } from 'react';
import {useNavigate, Link} from 'react-router-dom'
function Login  () {
    const [logg,setLogg] = useState({
        userName:'',
        password:''
    })
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    const handleLogg = (e)=>{
e.preventDefault()
axios.post('http://localhost:3001/login/a/',logg)
.then(res=>{console.log(res)
    // window.location.reload()
navigate('/table')
})
.catch(err =>console.log(err))
    }
    return(
        <div>
<div className="login-form">
    <h2>Login</h2>
    <form onSubmit={handleLogg}>
        <div className="form-group"> 
    <label className="label"> User Name : </label>
     <input className="input-field" type='string' name='username'  placeholder='enter user name' required onChange={e =>setLogg({...logg,userName:e.target.value})} />
     </div>
     <div className="form-group">  
     <label className="label"> Password : </label>
     <input className="input-field" type='password' name='password'  placeholder='enter password' required onChange={e =>setLogg({...logg,password:e.target.value})} /><br></br>
     {/* <label>Email : </label> */}
     </div>
     <Button variant="primary" type="submit" className="buton-container">
        Submit
      </Button>
      <>dont have an account <Link to='/signup' className="signup-link" >signup</Link> </>
    </form>
</div>
        </div>
    )
    
}
export default Login;