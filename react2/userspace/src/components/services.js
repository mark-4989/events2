import React from "react";
// import './App.css';
import pic2 from '../images/pexels-asadphoto-169198.jpg'

function Services (){
    return(
    <div className="servicess">
<div className="service">
    <div className="wed1">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla vitae elit libero, a pharetra augue mollis interdum.<br></br> Praesent commodo cursus magna, vel scelerisque nisl consectetur.Lorem ipsum dolor sit amet, <br></br>consectetur adipiscing elit.Nulla vitae elit libero, a pharetra augue mollis interdum.<br></br> Praesent commodo cursus magna, vel scelerisque nisl consectetur.<br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>Nulla vitae elit libero, a pharetra augue mollis interdum.<br></br> Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
    </div>
    <div className="wed2">
        <img src={pic2} ></img>
    </div>
</div>
<div style={{textAlign:'center',marginTop:'3rem'}}>
    <h2>some of the services we offer</h2>
</div>
<div className="wedding">
    <div className="wedd">
<h3>wedding services</h3>
<ul>
    <li>one</li>
    <li>one</li>
    <li>one</li>
    <li>one</li>
    <li>one</li>
    <li>one</li>
</ul>
    </div>
    <div className="wedd1">
        <img src={pic2} ></img>
    </div>
</div>
<div className="wedding">
    <div className="wedd">
<h3>co-oprate services</h3>
<ul>
    <li>one</li>
    <li>one</li>
    <li>one</li>
    <li>one</li>
    <li>one</li>
    <li>one</li>
</ul>
    </div>
    <div className="wedd1">
        <img src={pic2} ></img>
    </div>
</div>
<div className="wedding">
    <div className="wedd">
<h3>Social Gathering</h3>
<ul>
    <li>one</li>
    <li>one</li>
    <li>one</li>
    <li>one</li>
    <li>one</li>
    <li>one</li>
</ul>
    </div>
    <div className="wedd1">
        <img src={pic2} ></img>
    </div>
</div>
    </div>    
    )
}
export default Services;