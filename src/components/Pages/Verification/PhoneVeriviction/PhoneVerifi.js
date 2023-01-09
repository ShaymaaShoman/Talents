import React,{useState} from 'react'
import Footer from '../../../Footer/Footer';
import NavBar from '../../../NavBar/NavBar';
import phoneCheck from '../../../../assest/Phone.png'
import axios from 'axios';
import {PhoneContainer,PhoneSection,VerfiHeading,VerfiParg,VerfiPargraf,ImgPhoneCheck ,FormStyle,Resed1,ContainerBox,Otp ,ResendLink1} from './PhoneVerifiStyle.js';
import ButtonVerifi from '../../Button/ButtonVerifi';
import { Link, useNavigate  } from 'react-router-dom';
import { useEffect } from 'react';
const PhoneVerifi = () => {
  const [inputs, setInputs] = useState({});
  const useInput=[inputs.otp1,inputs.otp2,inputs.otp3,inputs.otp4,inputs.otp5,inputs.otp6];
  const[error,setError]=useState("");
  const [err, setErr] = useState(false);
const userData=localStorage.getItem("user");
const testUserData =JSON.parse(userData);
const mobile =testUserData.mobile;
var start = 4;
var end = 9;
var substitute ="*** ***";
 function replaceRange(mobile, start, end, substitute) {
    return mobile.substring(0, start) + substitute + mobile.substring(end);
  }
  const navigate = useNavigate();
  const handleChange = (val, event) => {
    setInputs({ ...inputs, [val]: event.target.value });
  };
  const inputfocus = (elmnt) => {
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {
        elmnt.target.form.elements[next].focus();
      }
    } else {
      const next = elmnt.target.tabIndex;
      if (next < 6) {
        elmnt.target.form.elements[next].focus();
      }
    
    }
  };

 

    // const OpenBox=(id)=>{
    //   if(useInput !== ""){
    //       setErr(true);
    //       navigate("/emailVerfiChek" );
    //   }
  // }
  useEffect(()=>{

  },[])
    const handleSubmit = async(e,da)=> {
      e.preventDefault();
      console.log(useInput);
      const result =useInput.join("")
         console.log(result);
         if(result !== ""){
          setErr(true);
          navigate("/PhoneCheck" );
         }
      const USER_API_URL ="https://talents-valley-backend.herokuapp.com/api/user/verify/mobile";
      await fetch(USER_API_URL, {
        method: "POST",
        headers: { 
         "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,   
        },
        body: JSON.stringify({
          verificationCode:result,
          withCredentials: true,
        }),
      })
        .then(response => response.json())
         navigate("/PhoneCheck" )
        .catch((error) => {
            console.log(error);  
          })
        };

  
     
  return (
    <>
      <NavBar/>
      <PhoneContainer>
      <PhoneSection>
      <VerfiHeading >Phone Verification</VerfiHeading>
      <ImgPhoneCheck src ={phoneCheck} alt ="phoneCheck"/>
      <VerfiPargraf>We have sent you a verification code to your phone <br/>
 <VerfiParg>number{replaceRange(mobile, start, end, substitute)} </VerfiParg></VerfiPargraf>
 <FormStyle onSubmit={handleSubmit}>
 <ContainerBox>
  
  <Otp
      type="text"
      maxLength="1"
      name="otp1"
      autoComplete="off"
      className="otpInput"
      value={inputs.otp1}
      onChange={(e) => handleChange("otp1", e)}
      tabIndex="1"
      onKeyUp={(e) => inputfocus(e)}
    />
    <Otp
      type="text"
      maxLength="1"
      name="otp2"
      autoComplete="off"
      className="otpInput"
      value={inputs.otp2}
      onChange={(e) => handleChange("otp2", e)}
      tabIndex="2"
      onKeyUp={(e) => inputfocus(e)}
    />
    <Otp
      type="text"
      maxLength="1"
      name="otp3"
      autoComplete="off"
      className="otpInput"
      value={inputs.otp3}
      onChange={(e) => handleChange("otp3", e)}
      tabIndex="3"
      onKeyUp={(e) => inputfocus(e)}
    />
 
   
    <Otp
    type="text"
    maxLength="1"
    name="otp4"
    autoComplete="off"
    className="otpInput"
    value={inputs.otp4}
    onChange={(e) => handleChange("otp4", e)}
    tabIndex="4"
    onKeyUp={(e) => inputfocus(e)}
  />
  <Otp
    type="text"
    maxLength="1"
    name="otp5"
    autoComplete="off"
    className="otpInput"
    value={inputs.otp5}
    onChange={(e) => handleChange("otp5", e)}
    tabIndex="5"
    onKeyUp={(e) => inputfocus(e)}
  />
  <Otp
    type="text"
    maxLength="1"
    name="otp6"
    autoComplete="off"
    className="otpInput"
    value={inputs.otp6}
    onChange={(e) => handleChange("otp6", e)}
    tabIndex="6"
    onKeyUp={(e) => inputfocus(e)}
  />
  </ContainerBox>
  <ButtonVerifi title="Continue"  >Continue</ButtonVerifi>


<p style={{ color: "red", fontSize: "18px" }}>{error}</p>

<Resed1>Didn't get the code? <Link to="/Home" >
<Link to="/Home" >
<ResendLink1 >&nbsp;Resend</ResendLink1>
</Link>

</Link></ Resed1>

  </FormStyle>

      </PhoneSection>
      </PhoneContainer>
      <Footer/>
    </>
  )
}

export default PhoneVerifi;
