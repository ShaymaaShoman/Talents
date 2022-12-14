import React,{useState,useContext} from 'react'
import Footer from '../../../Footer/Footer';
import NavBar from '../../../NavBar/NavBar';
import IDImg from '../../../../assest/ID.png'
import {IDVerifContainer,IDVerifSection,DangerStyle,Option,VerfiHeading,ImgID,VerfiPargraf,FormStyle,VerfiParg,BtnVerfi,LabelStyle,BtnFile ,InputFile,InputStyle1,InputSelect } from './IDVerifStyle.js'
 import BtnVerf from '../../Button/ButtonVerifi'
 import axios from 'axios';
 import { AiFillWarning } from "react-icons/ai";
 import './File.css'
import FileUplod from './FileUplod.js'
import { Link, useNavigate  } from 'react-router-dom';
import { Context } from "../../../Context/Context.js"
const IDVerif = () => {
    const { selectedFile,file} = useContext(Context);
	const [values, setValues] = useState("");
	const [identif, setIdentif] = useState("");
	const [isDisabled, setIsDisabled] = useState(true);
	const [error, setError] = useState([]);
	const navigate = useNavigate();
	const handleClick = () => {
		setIdentif(!identif);
		// if(value==""||null){
		// 	setErrors("this field reqiuerd");
			
		// }
		}
		const [input, setInput] = useState("");
const handleSubmit =async(e,data)=>{
	e.preventDefault();
	const IDTest = JSON.parse(localStorage.getItem("TestID"));
	if(values&&selectedFile&&identif){
		navigate("/Home" );
	}
	const formData = new FormData();
	formData.append('idNumber', values);
	formData.append('idDocumentType', input);
	console.log(data);
	  const USER_API_URL = "https://talents-valley-backend.herokuapp.com/api/user/verify/id";
	  await fetch(USER_API_URL, {
		method: "POST",
		headers: { 
		 "Content-Type": "application/json",
		Authorization: `Bearer ${localStorage.getItem("TestID")}`,   
		},
		body: JSON.stringify({
		  withCredentials: true,
		  formData
		}),
	  })
		.then(response => response.json())
		.then((acualData)=>{
		 console.log(acualData);
		 
		}).catch((error) => {
			console.log(error);  
		  })
		};

	  
	 
  return (
    <>
     <NavBar/>
     <IDVerifContainer>
     <IDVerifSection>
     <VerfiHeading > ID Verification</VerfiHeading>
	 <ImgID src={IDImg} alt="IDImg"/>
     <VerfiPargraf>Upload Document That Proof Your Identity Such As: <br/>
     <VerfiParg>Identity  Card, Passport, Driver License</VerfiParg></VerfiPargraf>
	 <FormStyle onSubmit={handleSubmit}>
	 <>
	 <LabelStyle> Document Type </LabelStyle>
	
	
	 <InputSelect onChange={(e) => 
		  setInput(e.target.value )}
	  >
	   <Option key="blankKey" hidden value >
	 Choose your document type
	 </Option>
	 
	   <option key="Identity Card" value="Identity Card">Identity Card</option>
	   <option key="Passport" value="Passport">Passport</option>
	   <option key="Driver License" value="Driver License">Driver License</option>
	 </InputSelect>
	 
     </>
		   <>
		   <LabelStyle> ID Number </LabelStyle>
		   <InputStyle1 
		   type="text"
		   name="number"
		    placeholder="Enter your ID number"
		   id="number"
		   onClick={handleClick}
		   className={error.includes("number") ? "error" : ""}
		   value={values} onChange={(e)=>setValues(e.target.value)}
		 />
	
		   </>
		<FileUplod />

	    <BtnVerfi type="submit" onClick={handleSubmit}  disabled={!selectedFile&&!values&&!identif}>Continue
	   </BtnVerfi>
	 
	
   </FormStyle>
     </IDVerifSection>
     </IDVerifContainer>
     <Footer/>
    </>
  )
}

export default IDVerif;
// 	 {errors?<DangerStyle> {errors}</DangerStyle>:""}
//  <InputSelect
	//  id="select"
	//    name="select"
	//    value={value}
	 
	//  >
