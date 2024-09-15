import axios from "axios";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import convertToBase64 from "./converter";

function Signup  () {
    const [reg,setReg] = useState({
        userName:'',
        password:''
    })
    const [confirm,setconfirm]= useState()
    // const [file,setFile] = useState()
    const handleSignup = async (e)=>{
e.preventDefault()
//  await Object.assign({profile : file || ''})
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
    // const onUpload = async e =>{
    //     const base64 = await convertToBase64(e.target.file[0]);
    //     setFile(base64)
    // }
    return(
        <div>
<div className="login-form" >
    <h2>Sign-up</h2>
    <form onSubmit={handleSignup}>
    {/* <div className="form-group">
        <label> </label><img src='' alt="profile" > </img>  
     <input className="input-field" type='file' name='profile'  placeholder='enter user name' required  onChange={onUpload}/>
     </div> */}
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