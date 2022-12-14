import React,{useState,useContext} from 'react'
import Footer from '../../../Footer/Footer';
import NavBar from '../../../NavBar/NavBar';
import axios from 'axios';
import {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input/input";
import {Context } from "../../../Context/Context.js"
import { Link, useNavigate  } from 'react-router-dom';
import en from "react-phone-number-input/locale/en.json";
import address from '../../../../assest/address.png'
import FileUplod from '../IDVerifi/FileUplod';
import {AddresVerifContainer,AddresVerifSection,FormStyle,VerfiHeading,BtnVerf,AddressPargraf,AddressiParg,Space,Select,FulNameAdress,LablCountry,InputText,ColHalf,ImgID,LabelAddres,LabelStyle,InputSelect,FulName
}from './AddressVerificationStyle.js'
import ButtonVerifi from '../../Button/ButtonVerifi';
import { useEffect } from 'react';
const AddressVerification = () => {
  const { selectedFile,file} = useContext(Context);
	const [disabled,setDisabled] = useState(true);

    const [value, setValue] = useState("");
    const [value1, setValue1] = useState("");
    const [identif, setIdentif] = useState("");
    const [identi, setIdenti] = useState("");
    const [val, setVal] = useState("");

  const navigate = useNavigate();
	useEffect(()=>{
    localStorage.getItem("accessToken");
  })

    const handleSubmit = async(data,e) => {
      e.preventDefault();
      console.log(data);
      if(value&&value1&&identif&&identi){
        navigate("/Home" ); 
      }
      if(data){
        navigate("/Home" );
      }
     
        const USER_API_URL = "https://talents-valley-backend.herokuapp.com/api/user/verify/address";
        await fetch(USER_API_URL, {
          method: "POST",
          headers: { 
           "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem('_id')}`,   
          },
          body: JSON.stringify({
            withCredentials: true,
            address1:value,
            address2:value1,
            city:val,
            addressDocumentType:identif,
            country:identi

          }),
        })
          .then(response => response.json())
          .then((acualData)=>{
           console.log(acualData);
           navigate("/Home" );
           if(acualData.StatusCode==200){
            navigate("/Home" );
           }
          }).catch((error) => {
              console.log(error);  
            })
          };
        
  return (
    <>
    <NavBar/>
   <AddresVerifContainer>
   <AddresVerifSection>
   <VerfiHeading>Address Verification</VerfiHeading>
   <ImgID src={address} alt="address"/>
   <AddressPargraf>Upload Document That Proof Your Address Such As:</AddressPargraf>
   <AddressiParg>Bill(Phone, Electricity, Water, Bank Statement)</AddressiParg>
   <FormStyle onSubmit={handleSubmit}>
   <LabelStyle> Document Type </LabelStyle>
   <InputSelect value={identif} name="select"  onChange={(e)=>setIdentif(e.target.value)}>
   <option value="N/A">Choose your document type</option>
  <option value="Identity Card">Identity Card</option>
  <option value="Passport">Passport</option>
  <option value="Driver License">Driver License</option>
</InputSelect>
<FulName>
<ColHalf>
  <LabelAddres>Address 1</LabelAddres>
  <InputText
    type="text"
    name="Address"
    id="Address "
    placeholder="Neighborhood"
    value={value} onChange={(e)=>setValue(e.target.value)}
  />
</ColHalf>
<ColHalf>
  <LabelAddres>Address 2</LabelAddres>
  <InputText
    type="text"
    id="Addres"
    name="Addres"
    placeholder="Street"
    value={value1} onChange={(e)=>setValue1(e.target.value)}
  />
</ColHalf>
</FulName>

<FulNameAdress>
<ColHalf>
  <LabelAddres>City</LabelAddres>
  <InputText
    type="text"
    name="City"
    id="City"
    value={val} onChange={(e)=>setVal(e.target.value)}
  />
</ColHalf>
<ColHalf>
<LablCountry> Country</LablCountry>
              <Select 
                placeholder=""
                value={identi} name="select"  onChange={(e)=>setIdenti(e.target.value)}
              >
                <option value="">{en[""]}</option>
                {getCountries().map((country) => (
                  <option key={country} value={en[country]}>
                    {en[country]} +{getCountryCallingCode(country)}
                  </option>
                ))}
              </Select>
</ColHalf>
</FulNameAdress>

<Space></Space>

<FileUplod/>
   <BtnVerf type="submit" onClick={handleSubmit} disabled={!selectedFile&&value&&value1&&identi&&identif&&val} >Continue</BtnVerf>
   </FormStyle>
   </AddresVerifSection>
   </AddresVerifContainer>
   <Footer/>
    </>
  )
}

export default AddressVerification;
// 
