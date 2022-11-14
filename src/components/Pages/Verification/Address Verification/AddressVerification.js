import React,{useState} from 'react'
import FileUpload from '../IDVerifi/FileUpload';
import Footer from '../../../Footer/Footer';
import NavBar from '../../../NavBar/NavBar';
import {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input/input";
import en from "react-phone-number-input/locale/en.json";
import address from '../../../../assest/address.png'
import {AddresVerifContainer,AddresVerifSection,VerfiHeading,AddressPargraf,AddressiParg,Space,Select,FulNameAdress,LablCountry,InputText,ColHalf,ImgID,LabelAddres,LabelStyle,InputSelect,FulName
}from './AddressVerificationStyle.js'
import ButtonTest from '../../Button/ButtonTest';
const AddressVerification = () => {
  const [selectedFile, setSelectedFile] = useState();
	const [isSelected , setIsSelected] = useState(false);
	const [newUserInfo, setNewUserInfo] = useState({
		profileImages: []
	  });
    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	};
	
	const updateUploadedFiles = (files) =>
    setNewUserInfo({ ...newUserInfo, profileImages: files });
  return (
    <>
    <NavBar/>
   <AddresVerifContainer>
   <AddresVerifSection>
   <VerfiHeading>Address Verification</VerfiHeading>
   <ImgID src={address} alt="address"/>
   <AddressPargraf>Upload Document That Proof Your Address Such As:</AddressPargraf>
   <AddressiParg>Bill(Phone, Electricity, Water, Bank Statement)</AddressiParg>
   <LabelStyle> Document Type </LabelStyle>
   <InputSelect >
   <option value="N/A">Choose your document type</option>
  <option value="N/A">Identity Card</option>
  <option value="1">Passport</option>
  <option value="2">Driver License</option>
</InputSelect>
<FulName>
<ColHalf>
  <LabelAddres>Address 1</LabelAddres>
  <InputText
    type="text"
    name="Address 1"
    id="Address 1"
    placeholder="Neighborhood"
  />
</ColHalf>
<ColHalf>
  <LabelAddres>Address 2</LabelAddres>
  <InputText
    type="text"
    id="Address 2"
    name="Address 2"
    placeholder="Street"
    className='Address2'
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
  
  />
</ColHalf>
<ColHalf>
<LablCountry> Country</LablCountry>
              <Select 
                placeholder=""
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
<FileUpload accept=".jpg,.png,.jpeg"
multiple updateFilesCb={updateUploadedFiles}/>
<Space></Space>
<ButtonTest  title="Continue"> Continue</ButtonTest>
   </AddresVerifSection>
   </AddresVerifContainer>
   <Footer/>
    </>
  )
}

export default AddressVerification;

