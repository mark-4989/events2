import React from "react";
import Button from 'react-bootstrap/Button';

function Login  () {
    return(
        <div>
<div>
    <form>
    <label> User Name : </label>
     <input type='string' name='username'  placeholder='enter user name' required />
     <label> Password : </label>
     <input type='password' name='password'  placeholder='enter password' required /><br></br>
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