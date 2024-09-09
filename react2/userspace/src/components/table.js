import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Table(){
    const[Client,setClient]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3001/api/')
        .then(res =>setClient(res.data))
        .catch(err =>console.log(err))
    },[] )
    const handleDelete = (id) =>{
        axios.delete('http://localhost:3001/api/'+id) 
        .then(res =>{
            window.location.reload()
        })
        .catch(err =>console.log(err))
    }
    return(
        <div>
<div>
    <table className="tables">
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
                  <td>
                    <Link to={`/update/${Client._id}`}>edit</Link >
                    <button onClick={(e) => handleDelete(Client._id)} >delete</button>
                  </td> 
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