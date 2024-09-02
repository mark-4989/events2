import pic2 from '../picture/pexels-asadphoto-169198.jpg'

 function About() {
    
    return(
    
        <div className="about">
            <div className='us'>
            <h2>About Us</h2>
            </div>
<div className="service">
   
    <div className="wed1">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla vitae elit libero, a pharetra augue mollis interdum.<br></br> Praesent commodo cursus magna, vel scelerisque nisl consectetur.Lorem ipsum dolor sit amet, <br></br>consectetur adipiscing elit.Nulla vitae elit libero, a pharetra augue mollis interdum.<br></br> Praesent commodo cursus magna, vel scelerisque nisl consectetur.<br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>Nulla vitae elit libero, a pharetra augue mollis interdum.<br></br> Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
    </div>
    <div className="wed2">
        <img src={pic2} alt='comp' ></img>
    </div>
</div>
<div className='us'>
    <h2>OUR HISTORY</h2> 
    </div> 
<div>
<div className='early'>
        <p>it was started in early 200s</p>
        <div className='found'>
    <img src={pic2} alt='ceo' ></img>
    <p>C.E.O</p>
    </div>
    </div>
    
<div className='glass'>
    <h4>a little about us:</h4>
    <p>     Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla vitae elit libero, a pharetra augue mollis interdum.<br></br> Praesent commodo cursus magna, vel scelerisque nisl consectetur.Lorem ipsum dolor sit amet, <br></br>consectetur adipiscing elit.Nulla vitae elit libero, a pharetra augue mollis interdum.<br></br> Praesent commodo cursus magna, vel scelerisque nisl consectetur.<br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>Nulla vitae elit libero, a pharetra augue mollis interdum.<br></br> Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
</div>
  
    
</div>
        </div>
    )
}
export default About;