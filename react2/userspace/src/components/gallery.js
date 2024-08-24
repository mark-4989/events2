import React from "react";

const images=[
    {id:'1',imageName:'corporate1.jpeg',tag:'corporate'}
]
function Gallery (){
   
return(
    <div className='gallery'>
        <div>
{images.map(image => <div>{image.imageName}</div>)}
        </div>

    </div>
)
}
export default Gallery;