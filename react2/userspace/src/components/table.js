import React, { useState } from "react";

function Table(){
    const[Client,setClient]=useState([])
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
        <tr>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Email</td>
                <td>Phone Number</td>
                <td>Event Type</td>
                <td>Date</td>
                <td>Guest Count</td>
            </tr> 
        </tbody>
    </table>
</div>
        </div>
    )
}
export default Table;