import React from "react";

const images=[
    {id:'1',imageName:'corporate1.jpeg',tag:'corporate'},
    {id:'2',imageName:'corporate1.jpeg',tag:'corporate'},
    {id:'3',imageName:'corporate1.jpeg',tag:'corporate'},
    {id:'4',imageName:'corporate1.jpeg',tag:'corporate'},
    {id:'5',imageName:'corporate1.jpeg',tag:'corporate'},
    {id:'6',imageName:'corporate1.jpeg',tag:'corporate'},
    {id:'7',imageName:'corporate1.jpeg',tag:'corporate'},
    {id:'8',imageName:'corporate1.jpeg',tag:'corporate'},
    {id:'9',imageName:'corporate1.jpeg',tag:'corporate'},
    {id:'10',imageName:'corporate1.jpeg',tag:'corporate'},
    {id:'11',imageName:'corporate1.jpeg',tag:'corporate'},
    {id:'12',imageName:'corporate1.jpeg',tag:'corporate'},
    {id:'13',imageName:'corporate1.jpeg',tag:'corporate'},
    {id:'14',imageName:'corporate1.jpeg',tag:'corporate'},
    {id:'15',imageName:'corporate1.jpeg',tag:'corporate'},
    {id:'16',imageName:'corporate1.jpeg',tag:'corporate'},
    {id:'17',imageName:'corporate1.jpeg',tag:'corporate'},
    {id:'18',imageName:'corporate1.jpeg',tag:'corporate'},
    {id:'19',imageName:'corporate1.jpeg',tag:'corporate'},
    {id:'20',imageName:'corporate1.jpeg',tag:'corporate'},
    {id:'21',imageName:'corporate1.jpeg',tag:'corporate'},
    {id:'22',imageName:'corporate1.jpeg',tag:'corporate'},
    {id:'23',imageName:'corporate1.jpeg',tag:'corporate'},
    {id:'24',imageName:'corporate1.jpeg',tag:'corporate'},
    {id:'25',imageName:'corporate1.jpeg',tag:'corporate'},
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