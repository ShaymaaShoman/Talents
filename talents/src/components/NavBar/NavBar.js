import React from 'react'
import NavImg from '../../assest/logo.png'
import './NavBar.css'
const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="logo">
        <img
          src={NavImg}
          alt="#"
        />
        <h2>Talents Valley</h2>
      </div>
      <div className="links">
        <ul>
        <li>Home</li>
        <li>Invoices</li>
        <li className='Create'>Create</li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar;
