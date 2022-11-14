import React,{ useState } from 'react'

import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'

import NavImg from '../../assest/logo.png'

import {Nav,Logo,Img,Head,Ul,Li} from './NavBarStyled.js'
import './Nav.css'
const NavBar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
    const styleObj = {
    fontSize: "18px",
    color: "#4375FF",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    border: "1px solid #4375FF",
    borderRadius: "23px",
    padding: "5px 20px",
    width: "200px",
height: "34px",
marginLeft:"-30px",
 
}


  return (
    <Nav>
    <Logo>
    <Img
      src={NavImg}
      alt="#"
    />
    <Head>Talents Valley</Head>
  </Logo>

  
    <button className="hamburger"   onClick={() => {
        setIsNavExpanded(!isNavExpanded)
      }}>
      {/* icon from heroicons.com */}
     <GiHamburgerMenu  />
    </button>
    <div
      className={
        isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
      }
    >
   
      <Ul>
        <Li >
        <Link to="/Home"  style= {{color:"#151617" }}>Home</Link>
        </Li>
        <Li>
        <Link to="/Invoices"style= {{color:"#151617" }}>Invoices</Link>
        </Li>
        <Li>
        </Li>
      </Ul>
    </div>
    <Li><Link to="/Create"style= {styleObj}>Create</Link></Li>
  </Nav>
  )
}

export default NavBar;
