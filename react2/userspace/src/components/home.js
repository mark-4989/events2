import Carousel from 'react-bootstrap/Carousel';
import pic1 from '../images/pexels-joshsorenson-976866.jpg';
import pic2 from '../images/pexels-asadphoto-169198.jpg'
import pic3 from '../images/pexels-asadphoto-1024968.jpg'
import pic4 from '../images/Savvy Events & Entertainment.jpeg';
import pic5 from '../images/pexels-asadphoto-1024993.jpg';

function Home() {
  return (<div>

 <section>
    <Carousel data-bs-theme="dark" className='carousel'>
      <Carousel.Item>
        <img
        style={{height:'98vh'}}
          className="d-block w-100"
          src={pic1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
  style={{height:'90vh'}}
          className="d-block w-100"
          src={pic2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{height:'90vh'}}
          className="d-block w-100"
          src={pic3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
     
     
    </Carousel>
    <div className='hider'>
      <img src={pic5} alt='image loading'></img>
      </div>
    </section>
    <div className='second'>
<h2>Event Planning & Designing</h2>
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla vitae elit libero, a pharetra augue mollis interdum.<br></br> Praesent commodo cursus magna, vel scelerisque nisl consectetur.Lorem ipsum dolor sit amet, <br></br>consectetur adipiscing elit.Nulla vitae elit libero, a pharetra augue mollis interdum.<br></br> Praesent commodo cursus magna, vel scelerisque nisl consectetur.<br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>Nulla vitae elit libero, a pharetra augue mollis interdum.<br></br> Praesent commodo cursus magna, vel scelerisque nisl consectetur.
</p>
    </div>
    <div className='cards' >
<div className='card1'>
<h3>Wedding</h3>
  <div className='picss'>
  <img src={pic4} alt='image loading'></img>
  </div>
 
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
</div>
<div className='card1'>
<h3>Coprates</h3>
<div className='picss'>
  <img src={pic4} alt='image loading'></img>
  </div>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
</div>
<div className='card1'>
 <h3>Social Gathering</h3>
<div className='picss'>
  <img src={pic4} alt='image loading'></img>
  </div>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
</div>
    </div>
    </div>
  );
}

export default Home;