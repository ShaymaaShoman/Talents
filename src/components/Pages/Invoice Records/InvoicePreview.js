import React from 'react'
import{InvoicePreviewContainer,InvoicePreviewSection,ColHalf,FulName,InvoiceBrand,HeadingInvoiceBrand,SpanInvoiceBrand,ImgInvoiceBrand} from './InvoicePreviewStyle.js'
import LogoBrand from "../../../assest/logo.png"
const InvoicePreview = () => {
  return (
    <>
  <InvoicePreviewContainer>
  <InvoicePreviewSection>
  <InvoiceBrand>
  <HeadingInvoiceBrand>Invoice</HeadingInvoiceBrand>
  <SpanInvoiceBrand>#INV-003</SpanInvoiceBrand>
  <ImgInvoiceBrand src={LogoBrand} alt ="LogoBrand"/>
  </InvoiceBrand>
  
  <FulName>
<ColHalf>
<p>From</p>
<p>Talents Valley </p>
<p>LLC 30 North Gould St. </p>
<p>Sheridan, Wyoming 82801 </p>
<p>United States +1 307-217-6666 </p>
</ColHalf>
<ColHalf>
<p>Bill To</p>
<p>John Doe </p>
<p>Email@mail.com</p>
<p>Issue Date</p>
<p>July 27 ,2022 </p>
</ColHalf>
</FulName>
<FulName>
<ColHalf>
<p>Service</p>
<p>UI/UX Design for Noon Website </p>
<hr/>
</ColHalf>
<ColHalf>
<p>Amount</p>
<p>$ 300 </p>
</ColHalf>
</FulName>
<FulName>
<ColHalf>
<p>Sub Total</p>
<p>Fees </p>
<p>Total </p>
</ColHalf>
<ColHalf>
<p>$..</p>
<p>$.. </p>
<p>$.. </p>
</ColHalf>
</FulName>

  </InvoicePreviewSection>
  </InvoicePreviewContainer>
    </>
  )
}

export default InvoicePreview;
