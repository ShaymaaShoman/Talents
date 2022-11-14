
import React,{useState} from 'react'

import Brand from '../Brand/Brand';
import Footer from '../Footer/Footer';

import { Link ,useNavigate,useLocation  } from 'react-router-dom';
 import  axios from 'axios';

import { MdArrowBackIosNew} from "react-icons/md";

import {RecoveryContainer,Recovery1,BackStyle,CheckEmail,Heading,ResendLink1 , Parg,ClickLog, Resed1,ContainerBox,Otp,FormStyle,ButtonStyle,ButtonPargStyle }from './RecoveryBoxStyle.js'


const RecoveryBox = () => {
  const navigate =useNavigate();
  const [inputs, setInputs] = useState({});
  const[error,setError]=useState("");
  const [err, setErr] = useState(false);
  const useInput=[inputs.otp1,inputs.otp2,inputs.otp3,inputs.otp4,inputs.otp5,inputs.otp6];
  
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
  const handleSubmit =async (e) => {
    e.preventDefault();
   
  console.log(useInput);
  const test =useInput.join("")
     console.log(test);
     if(test !== ""){
      setErr(true);
      navigate("/RecoveryPassword" );
     }
     try {
      const IDTest = JSON.parse(localStorage.getItem("TestID"));
      const USER_API_URL = "https://talents-valley.herokuapp.com/api/user/password/verify-code";
      const response = await axios.post(
        USER_API_URL,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
          verificationCode:test,
           _id:IDTest
        }
      );

      console.log(JSON.stringify(response?.data));
     
    } catch (error) {
      console.log( error);
      if (!error?.response) {
        setError("No Server Response");
      } else if (error.response?.status === 400 && error.response?.status === 408) {
        setError(error.response.data.message);
      } else {
       setError("Code Failed");
      }
  
    }
  

  } 
  return (
    <>
    <RecoveryContainer>
      <Recovery1 >
      <Brand />
      <BackStyle onClick={()=>navigate("/Recovery",{replace:true})}><MdArrowBackIosNew/></BackStyle>
      <CheckEmail>
      <Heading>Check Your Email</Heading>
      <Parg>We have sent you an email that contains a code to</ Parg>
      <ClickLog> reset your password </ClickLog>
      </CheckEmail>
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
           <ButtonStyle type="submit" > <ButtonPargStyle> Continue </ButtonPargStyle> 
  </ButtonStyle>

  <p style={{ color: "red", fontSize: "18px" }}>{error}</p>

  <Resed1>Didn't get the code? <Link to="/RecoveryPassword" >
  <Link to="/RecoveryBox" >
  <ResendLink1 >&nbsp;Resend</ResendLink1>
</Link>

</Link></ Resed1>

         </FormStyle>
      </Recovery1>
    </RecoveryContainer>
      <Footer/>
    </>

  )
}

export default RecoveryBox
