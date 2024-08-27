import React, { useEffect, useState } from "react";
import axios from "axios";

function Table(){
    const[Client,setClient]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3001/api')
        .then(res =>setClient(res.data))
        .catch(err =>console.log(err))
    },[] )
    return(
        <div>
<div>
    <table>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Event Type</th>
                <th>Date</th>
                <th>Guest Count</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            { Client.map((Client,index)=>{
                return  <tr key={index}>
                  <td>{Client.firstname}</td>
                  <td>{Client.lastname}</td>
                  <td>{Client.email}</td>
                  <td>{Client.phone}</td>
                  <td>{Client.eventtype}</td>
                  <td>{Client.siku}</td>
                  <td>{Client.guestcount}</td>
              </tr>
            })
      
}
        </tbody>
    </table>
</div>
        </div>
    )
}
export default Table;