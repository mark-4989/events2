import React from "react";
// import './App.css';
import pic2 from '../images/pexels-asadphoto-169198.jpg'

function Services (){
//     handleThunb = () =>{
// // thumbnails
// main = document.getElementById("galla");
// //first thumb
// gallery1 = document.getElementById("gallery1");
// gallery1Src = document.getElementById("gallery1").src;
// //sec thumb
// gallery2 = document.getElementById("gallery2");
// gallery2Src = document.getElementById("gallery2").src;
// //third
// gallery3 = document.getElementById("gallery3");
// gallery3Src = document.getElementById("gallery3").src;
// //fourth
// gallery4 = document.getElementById("gallery4");
// gallery4Src = document.getElementById("gallery4").src;
//click
// gallery1.addEventListener("click", function() {
//     main.src = gallery1Src;
// });
// gallery2.addEventListener("click", function() {
//     main.src = gallery2Src;
// });
// gallery3.addEventListener("click", function() {
//     main.src = gallery3Src;
// });
// gallery4.addEventListener("click", function() {
//     main.src = gallery4Src;
// });
    // }
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
        <img src={pic2} alt="please wait"  id="galla" ></img>
        
        <div class="thumbnails">
                <ul>
                    <li>
                        <img src={pic2} alt="" id="gallery1" />
                    </li>
                    <li>
                        <img src={pic2} alt="" id="gallery2" />
                    </li>
                    <li>
                        <img src={pic2} alt="" id="gallery3" />
                    </li>
                    <li>
                        <img src={pic2} alt="" id="gallery4" />
                    </li>
                </ul>
            </div>
    </div>
</div>
<div className="coprate">
    <div className="cop">
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
    <div className="cop1">
        <img src={pic2} alt="please wait" ></img>
    </div>
    <div className="cop2">
<ul>
    <li>one</li>
    <li>one</li>
    <li>one</li>
    <li>one</li>
    <li>one</li>
    <li>one</li>
</ul>
    </div>
</div>
<div className="social">
    <div className="soc">
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
    <div className="soc1">
        <img src={pic2} alt="please wait"  ></img>
    </div>
</div>
    </div>    
    )
}
export default Services;