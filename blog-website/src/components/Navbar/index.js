import React from 'react'
import './style.css'

function Navbar() {
    return (
        <div className="navbar">
          <ul className="navbar-menu">
            <li>
            <a href="#">Home</a>
            </li>
            <li>
            <a href="#">Posts</a></li>
            <li>
            <a href="#">Contact Us</a></li>
            <li>            
            <a href="#">About Us</a></li>
          </ul>
          <div className="search">
          <input type="text" placeholder="Search"/>
          <img src={require('../../assets/res/icons/search.png')} alt="Search"/>
          </div>
        </div>
    )
}

export default Navbar
