import React  from "react";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useState } from 'react';
function Login  () {
    const [logg,setLogg] = useState({
        userName:'',
        password:''
    })
    const handleLogg = (e)=>{
e.preventDefault()
axios.post('http://localhost:3001/login/',logg)
.then(res=>{console.log(res)
    window.location.reload()
})
.catch(err =>console.log(err))
    }
    return(
        <div>
<div>
    <form onSubmit={handleLogg}>
    <label> User Name : </label>
     <input type='string' name='username'  placeholder='enter user name' required onChange={e =>setLogg({...logg,userName:e.target.value})} />
     <label> Password : </label>
     <input type='password' name='password'  placeholder='enter password' required onChange={e =>setLogg({...logg,password:e.target.value})} /><br></br>
     <label>Email : </label>
     <Button variant="primary" type="submit">
        Submit
      </Button>
    </form>
</div>
        </div>
    )
    
}
export default Login;