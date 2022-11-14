import React from 'react'
import Footer from '../../Footer/Footer'
import NavBar from '../../NavBar/NavBar'
import InvoiceCreateRecord from './InvoiceCreateRecord'
import InvoicePreview from './InvoicePreview'
import CorrectSmall from "../../../assest/CorrectSmall.png"
import {HeadingVoice,HeadingPreview,HeadingInvoice,HeadingCreate,HeadingCreateInvoice,DataPreivew,pargrafeCreate,ImgPreview,PaidGreen,BoxInvoice} from "./InvoiceStyle.js"
const Invoices = () => {
  return (
    <>
   <NavBar/>
   <div>
   <HeadingVoice>
   
   <HeadingInvoice>Create Invoice Records</HeadingInvoice>
   <HeadingPreview>Preview<br/>
   <ImgPreview src={CorrectSmall} alt="CorrectSmall"/>
   <PaidGreen>Paid</PaidGreen>
   <DataPreivew>on July 29 Via Paypal</DataPreivew>
   </HeadingPreview>
   </HeadingVoice>
   <HeadingCreateInvoice>
   <HeadingCreate>Create</HeadingCreate>
   <pargrafeCreate >
   Invoice Records
   </pargrafeCreate><br/>
   <pargrafeCreate>
   Payout Records
   </pargrafeCreate><br/>
   <pargrafeCreate>
   Add Link
   </pargrafeCreate><br/>
   </HeadingCreateInvoice>
   <BoxInvoice>
   <section><InvoiceCreateRecord/></section>
   <section><InvoicePreview/></section>
   </BoxInvoice>
   </div>
   <Footer/>
    </>
  )
}

export default Invoices
