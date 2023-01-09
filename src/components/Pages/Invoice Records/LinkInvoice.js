import React from 'react'
import { Link } from "react-router-dom";
import { LinkInvoiceStyle } from "./InvoiceStyle.js"
const LinkInvoice = () => {
  return (
    <LinkInvoiceStyle>
  
    <ul>
    <li>
    <Link to="/Invoice Records">
    Invoice Records
      </Link>
    </li>
    <li>
    <Link to="/Payout Records"> Payout Records</Link>
    </li>
    <li>
      <Link to="/Add Link"> Add Link</Link>
    </li>
  </ul> 
    </LinkInvoiceStyle>
  )
}

export default LinkInvoice;
