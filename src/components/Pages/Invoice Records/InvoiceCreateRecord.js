import React from 'react';
import "./date.css"
import {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input/input";
import en from "react-phone-number-input/locale/en.json";
import{InvoiceCreateRecordContainer,InvoiceCreateRecordSection,InputStylePriceFee,InputStyleJob,InputStylePayment,HeadingOtherPayment,HeadingGateway,SelectPayment,SpanAdd,HeadingPayment,InputStyleTextArea,InputStylePrice,SelectInvoiceCountry,SelectInvoice,HeadingDetails,FulName,InputStyleEmail,ColHalf,HeadingClient,InputText,InputTextName,SelectNuber,LablService,LablStatus,Selectstatus,LabelData,LabelStyle,InputStyle}from './InvoiceCreateRecordStyle.js'
import ButtonVerifi from '../Button/ButtonVerifi';
const InvoiceCreateRecord = () => {
  return (
    <>
   <InvoiceCreateRecordContainer>
<InvoiceCreateRecordSection>
<LabelStyle htmlFor="Name">Freelancer Name</LabelStyle>
<InputStyle
  type="text"
  name="text"
/>
<FulName>
<ColHalf>
  <LabelData>Date</LabelData>
  <InputText type="date" name="dateofbirth" id="dateofbirth" placeholder=" " />
</ColHalf>
<ColHalf>
  <LablStatus>Status</LablStatus>
  <Selectstatus>
    <option value="" ></option>
    <option value="1">Complete</option>
    <option value="2">pending</option>
    <option value="3">NotComplete</option>
 </Selectstatus>
</ColHalf>
</FulName>
<LablService>Service Number (Optional)</LablService>
<SelectNuber>
  <option value="" ></option>
  <option value="1">Complete</option>
  <option value="2">pending</option>
  <option value="3">NotComplete</option>
</SelectNuber>
<HeadingClient>Client Information</HeadingClient>
<FulName>
<ColHalf>
<InputTextName
  type="text"
  name="firstName"
  id="FirstName"
  placeholder="First name"

/>
</ColHalf>
<ColHalf>
<InputTextName
  type="text"
  name="lastName"
  id="lastName"
  placeholder="Last name"
/>
</ColHalf>
</FulName>
<InputStyleEmail
  type="email"
  name="email"
  placeholder="Email"
/>
<FulName>
<ColHalf>
<SelectInvoice 
               placeholder="country"
              >
                <option value="">{en[""]}</option>
                {getCountries().map((country) => (
                  <option key={country} value={en[country]}>
                    {en[country]} +{getCountryCallingCode(country)}
                  </option>
                ))}
              </SelectInvoice>
</ColHalf>
<ColHalf>

              <SelectInvoiceCountry 
                placeholder="USD"
              >
                <option value="">{en[""]}</option>
                {getCountries().map((country) => (
                  <option key={country} value={en[country]}>
                    {en[country]} +{getCountryCallingCode(country)}
                  </option>
                ))}
              </SelectInvoiceCountry>
</ColHalf>
</FulName>
<HeadingDetails>Job Details</HeadingDetails>
<FulName>
<ColHalf>
<InputStyleJob
  type="text"
  name="text"
  placeholder="Job title"
/>
</ColHalf>
<ColHalf>
<InputStylePrice
  type="text"
  name="text"
  placeholder="$ 0.00"
/>
</ColHalf>
</FulName>
<InputStyleTextArea>Describtion</InputStyleTextArea>
<SpanAdd>+Add item or service</SpanAdd>
<HeadingPayment>Payment Method</HeadingPayment>

<SelectPayment>
  <option value="" ></option>
  <option value="1">PayPal</option>
  <option value="2">ViCard</option>
  <option value="3">NotComplete</option>
</SelectPayment>
<HeadingOtherPayment>Other Payment</HeadingOtherPayment>
<InputStylePayment
  type="text"
  name="text"
/>
<HeadingGateway>Payment Gateway Fees</HeadingGateway>
<InputStylePriceFee
  type="text"
  name="text"
  placeholder="$ 0.00"
/>
<br/>

<input type="checkbox" name="genres" value="adventure" id="adventure_id"/>
<label htmlFor="adventure_id" >Allow Verified</label>
<ButtonVerifi title="Add Invoice"  >Add Invoice</ButtonVerifi>
</InvoiceCreateRecordSection>
    </InvoiceCreateRecordContainer>
    </>
  )
}

export default InvoiceCreateRecord
