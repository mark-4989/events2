import Carousel from 'react-bootstrap/Carousel';
import pic1 from '../images/pexels-joshsorenson-976866.jpg';
import pic2 from '../images/pexels-asadphoto-169198.jpg'
import pic3 from '../images/pexels-asadphoto-1024968.jpg'

function Home() {
  return (
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
  );
}

export default Home;