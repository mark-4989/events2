import pic2 from '../picture/pexels-asadphoto-169198.jpg'

 function About() {
    
    return(
    
        <div className="about">
            <div>
            <h2>About Us</h2>
            </div>
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
<div>
    <div>
        
    </div>
</div>
        </div>
    )
}
export default About;