import { useState } from 'react';
import React from "react";
import {Link} from 'react-router-dom'
import Gallery from './gallery';

// import './App.css';
import pic2 from '../picture/pexels-asadphoto-169198.jpg'

function Services (){
    // import required modules
    const [currentImage, setCurrentImage] = useState('galla');
    const[corporate,setCorporate]=useState('corp')
    const[socials,setSocials]=useState('soci')

    const galleryImages = [
      { id: 'gallery2', src: '/images/wedd6.jpeg' },
      { id: 'gallery3', src: '/images/wedd7.jpeg' },
      { id: 'gallery4', src: '/images/wedd8.jpeg' }
    ];
    const corpImages = [
        { id: 'gallery2', src: '/images/corporate6.jpeg' },
        { id: 'gallery3', src: '/images/corporate7.jpeg' },
        { id: 'gallery4', src: '/images/corporate8.jpeg' }
      ];

      const sociImages = [
        { id: 'gallery2', src: '/images/social6.jpeg' },
        { id: 'gallery3', src: '/images/social7.jpeg' },
        { id: 'gallery4', src: '/images/social8.jpeg' }
      ];
  
    const handleImageChange = (newSrc) => {
      setCurrentImage(newSrc);
      
    };
    const handleCorpChange = (newSrc) => {
        setCorporate(newSrc)
    }
    const handleSocChange=(newSrc)=>{
        setSocials(newSrc)
    }
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
        <img src={currentImage} alt="please wait"  id="galla" ></img>
        {/* <img src= alt="Main Image" /> */}
        <div class="thumbnails" id='thumb'>
                    
      <div className="gallery">
        {galleryImages.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={`Gallery ${image.id}`}
            onClick={() => handleImageChange(image.src)}
          />
        ))}
        <Link to="/gallery" className='see'>see more</Link>
      </div>     
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
        {/* <img src={pic2} alt="please wait" ></img> */}
        <img src={corporate} alt="please wait"  id="corp" ></img>
        <div class="thumbnails" id='thumb'>
        <div className="gallery">
        {corpImages.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={`Gallery ${image.id}`}
            onClick={() => handleCorpChange(image.src)}
          />
        ))}
        <Link to="/gallery" className='see'>see more</Link>
      </div> 
        </div>
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
        {/* <img src={pic2} alt="please wait"  ></img> */}
        <img src={socials} alt="please wait"  id="soci" ></img>
        <div class="thumbnails" id='thumb'>
        <div className="gallery">
        {sociImages.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={`Gallery ${image.id}`}
            onClick={() => handleSocChange(image.src)}
          />
        ))}
        <Link to="/gallery" className='see'>see more</Link>
      </div> 
    </div>
</div>

    </div>  
    </div>  
    )
}
export default Services;