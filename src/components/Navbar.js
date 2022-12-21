import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <>
        <ul>
        <li><Link to="/homePage">home page</Link></li> 
        <li><Link to="/Zoo">our animals</Link></li>
        <li><Link to="/ContactUs">Contact us</Link></li>
        <li><Link to="/About">About</Link></li>
        </ul>
    </>
  )
}


export default Navbar;