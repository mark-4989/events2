import { all } from "axios";
import React, { useEffect, useState } from "react";

const images=[
    {id:'1',imageName:'corporate1.jpeg',tag:'corporate'},
    {id:'2',imageName:'social1.jpeg',tag:'social'},
    {id:'3',imageName:'wedd1.jpg',tag:'wedding'},
    {id:'4',imageName:'corporate2.jpg',tag:'corporate'},
    {id:'5',imageName:'social2.jpeg',tag:'social'},
    {id:'6',imageName:'wedd2.jpg',tag:'wedding'},
    {id:'7',imageName:'corporate3.jpg',tag:'corporate'},
    {id:'8',imageName:'social3.jpg',tag:'social'},
    {id:'9',imageName:'wedd3.jpeg',tag:'wedding'},
    {id:'10',imageName:'corporate4.jpg',tag:'corporate'},
    {id:'11',imageName:'social4.jpg',tag:'social'},
    {id:'12',imageName:'wedd4.jpeg',tag:'wedding'},
    {id:'13',imageName:'corporate5.jpeg',tag:'corporate'},
    {id:'14',imageName:'social5.jpg',tag:'social'},
    {id:'15',imageName:'wedd5.jpeg',tag:'wedding'},
    {id:'16',imageName:'corporate6.jpeg',tag:'corporate'},
    {id:'17',imageName:'social6.jpeg',tag:'social'},
    {id:'18',imageName:'wedd6.jpeg',tag:'wedding'},
    {id:'19',imageName:'corporate7.jpeg',tag:'corporate'},
    {id:'20',imageName:'social7.jpeg',tag:'social'},
    {id:'21',imageName:'wedd7.jpeg',tag:'wedding'},
    {id:'22',imageName:'corporate8.jpeg',tag:'corporate'},
    {id:'23',imageName:'social8.jpeg',tag:'social'},
    {id:'24',imageName:'wedd8.jpeg',tag:'wedding'},
    {id:'25',imageName:'corporate9.jpeg',tag:'corporate'},
]
function Gallery (){
    // used react hooks
   const[tag,setTag]= useState('all')
   //storing filted tags
   const [filterd,setFilterd] =useState([])
   //monituring tag if it changes it shows filterd tag
   useEffect(() => {
tag === 'all' ? setFilterd(images) : setFilterd(images.filter(image => image.tag === tag))
   },[tag])

return(
    <div className='gallery'>
        <div className="tags">
        <TagButton name="all" handleTag={setTag} tagActive={tag === 'all' ? true : false}/>
            <TagButton name="wedding" handleTag={setTag} tagActive={tag === 'wedding' ? true : false}/>
            <TagButton name="corporate" handleTag={setTag} tagActive={tag === 'corporate' ? true : false}/>
            <TagButton name="social" handleTag={setTag} tagActive={tag === 'social' ? true : false}/>
        </div>
        <div className="con">
            
            {/* looping through all images */}
{filterd.map(image => 
<div key={image.id} className="con1">
<img src={`/images/${image.imageName}`} alt="" />
    {/* {image.imageName} */}
</div>)}
        </div>

    </div>
)
}
//button that i will reuse muliple times
// parse prop where name rep tag from array
const TagButton = ({name ,handleTag ,tagActive})=>{
    // name is made to uppercase
return <button className={`taged ${tagActive ? 'actived': null}`} onClick={()=>handleTag(name)}>{name.toUpperCase()}</button>
}
export default Gallery;