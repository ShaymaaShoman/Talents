import React, { useState } from 'react'
import {EmailContainer,EmailSection,VerfiHeading,ImgCheck,VerfiPargraf,PargSucced,ButtonVerifiy} from './EmailVerfCheckStyle.js'
import NavBar from '../../NavBar/NavBar'
import checkImg from '../../../assest/check.jpg'
import Footer from '../../Footer/Footer'
import { Link ,useNavigate } from 'react-router-dom';
const EmailVerfiChek = () => {
  const navigate = useNavigate();
  const[state,setState]=useState(false);
  const toggle = async(e,data)=>{
    setState(!state);
    navigate("/Verification" );
    e.preventDefault();
    console.log(data);
    const USER_API_URLx ="https://talents-valley-backend.herokuapp.com/api/settings/profile";
    await fetch(USER_API_URLx, {
      method: "GET",
      headers: { 
       "Content-Type": "application/json",
       Authorization: `Bearer ${localStorage.getItem('accessToken')}`,   
      },
      body: JSON.stringify({

      }),
    })
       .then(response => response.json())
       .then((acualData)=>{  
       localStorage.setItem("user",JSON.stringify(acualData.data.user));
       console.log(acualData);
         navigate("/Verification");
       }).catch((error) => {
           console.log(error); 
       })
  }
  
  return (
    <>
    <NavBar/>
    <EmailContainer>
 <EmailSection>
 <VerfiHeading > Email Verification</VerfiHeading>
 <ImgCheck src={checkImg} alt="Check" />
 <VerfiPargraf>Your Email has been Verified <br/><PargSucced>Successfully</PargSucced> </VerfiPargraf>

 <ButtonVerifiy title="Continue" onClick={toggle} >Continue</ButtonVerifiy>

 </EmailSection>
 </EmailContainer>
 <Footer/>
    </>
  )
}

export default EmailVerfiChek;
// style={{ marginBottom:"30px"}} {state?"Continue":<ImgCheck src={checkImg} alt="Check" />}