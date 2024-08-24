import React from "react";

const images=[
    {id:'1',imageName:'corporate1.jpeg',tag:'corporate'},
    {id:'2',imageName:'social1.jpeg',tag:'corporate'},
    {id:'3',imageName:'wedd1.jpg',tag:'corporate'},
    {id:'4',imageName:'corporate2.jpg',tag:'corporate'},
    {id:'5',imageName:'social2.jpeg',tag:'corporate'},
    {id:'6',imageName:'wedd2.jpg',tag:'corporate'},
    {id:'7',imageName:'corporate3.jpg',tag:'corporate'},
    {id:'8',imageName:'social3.jpg',tag:'corporate'},
    {id:'9',imageName:'wedd3.jpeg',tag:'corporate'},
    {id:'10',imageName:'corporate4.jpg',tag:'corporate'},
    {id:'11',imageName:'spocial4.jpg',tag:'corporate'},
    {id:'12',imageName:'wedd4.jpeg',tag:'corporate'},
    {id:'13',imageName:'corporate5.jpeg',tag:'corporate'},
    {id:'14',imageName:'spocial5.jpg',tag:'corporate'},
    {id:'15',imageName:'wedd5.jpeg',tag:'corporate'},
    {id:'16',imageName:'corporate6.jpeg',tag:'corporate'},
    {id:'17',imageName:'social6.jpeg',tag:'corporate'},
    {id:'18',imageName:'wedd6.jpeg',tag:'corporate'},
    {id:'19',imageName:'corporate7.jpeg',tag:'corporate'},
    {id:'20',imageName:'social7.jpeg',tag:'corporate'},
    {id:'21',imageName:'wedd7.jpeg',tag:'corporate'},
    {id:'22',imageName:'corporate8.jpeg',tag:'corporate'},
    {id:'23',imageName:'social8.jpeg',tag:'corporate'},
    {id:'24',imageName:'wedd8.jpeg',tag:'corporate'},
    {id:'25',imageName:'corporate9.jpeg',tag:'corporate'},
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