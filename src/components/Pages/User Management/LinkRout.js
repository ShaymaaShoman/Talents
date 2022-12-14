import React from 'react'
import { Link } from "react-router-dom";
import { LinkStyle } from "./Style/LinkStyle.js"
const LinksRout = () => {
  return (
    <LinkStyle>
  
    <ul>
    <li>
    <Link to="/home">
      Home
      </Link>
    </li>
    <li>
    <Link to="/Invoices">Invoices</Link>
    </li>
    <li>
      <Link to="/users">Users</Link>
    </li>
  </ul> 
    </LinkStyle>
  )
}

export default LinksRout;
