import { useState } from "react";
import { FaBars } from "react-icons/fa6";
function Navbar(){
const[Open,setOpen]=useState(false)
const toggleMenu =()=>{
    setOpen(!Open)
}

    return(
        <nav>
            <div className="logo">
            <h2>LOGO</h2>
            </div>
            <ul className={Open ? "navigation active" :"navigation"}>
             
                <li><a href="/">HOME</a></li>
                <li><a href="about">ABOUT</a></li>
                <li><a href="gallery">GALLERY</a></li>
                <li><a href="contact">CONTACT</a></li>
            </ul>
            <div className="icons" onClick={toggleMenu}>
            <FaBars />
            </div>
        </nav>
    )
}
export default Navbar;