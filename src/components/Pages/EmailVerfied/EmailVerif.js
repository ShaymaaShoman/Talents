import React ,{useState}from 'react'
import NavBar from '../../NavBar/NavBar';
import Footer from '../../Footer/Footer';
import EmailVerify from '../../../assest/Email.png'
import ButtonVerifi from '../Button/ButtonVerifi';

import {EmailContainer,Otp, EmailSection,VerfiHeading,Resed1,VerfiPargraf,VerfiParg,VerfiImg,ContainerBox,FormStyle,ResendLink1} from './EmailVerifStyle.js'

import { Link, useNavigate  } from 'react-router-dom';
import { useEffect } from 'react';


const EmailVerif = () => {
  const navigate = useNavigate();
  const[error,setError]=useState("");
  const [err, setErr] = useState(false);
  const [inputs, setInputs] = useState({});
  const useInput=[inputs.otp1,inputs.otp2,inputs.otp3,inputs.otp4,inputs.otp5,inputs.otp6];
  const userData=localStorage.getItem('user');
  const testUserData =JSON.parse(userData);
const email =testUserData.email;
const  mobileFormate=email.replace(/^(.).*(.@)/, '*********$1$2');
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
  
  const handleSubmit = async(e,da)=> {
    e.preventDefault();
    console.log(useInput);
    const result =useInput.join("")
       console.log(result);
       if(result !== ""){
        setErr(true);
        navigate("/EmailVerfiChek" );
      }
    const USER_API_URL ="https://talents-valley-backend.herokuapp.com/api/user/verify/email";
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
       navigate("/EmailVerfiChek" )
      .catch((error) => {
          console.log(error);  
        })
      };
 

  return (
    <div>
    <NavBar/>
    <EmailContainer>
 <EmailSection>
 <VerfiHeading > Email Verification</VerfiHeading>
 <VerfiImg src={EmailVerify} alt ="EmailVerif"/>
 <VerfiPargraf>We have sent you a verification code to your email <br/>
 <VerfiParg>{mobileFormate}</VerfiParg></VerfiPargraf>
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
  <ButtonVerifi title="Continue" >Continue</ButtonVerifi>


<p style={{ color: "red", fontSize: "18px" }}>{error}</p>

<Resed1>Didn't get the code? <Link to="/Home" >
<Link to="/Home" >
<ResendLink1 >&nbsp;Resend</ResendLink1>
</Link>

</Link></ Resed1>

  </FormStyle>
 </EmailSection>
    </EmailContainer>
    <Footer/>
    </div>
  )
}

export default EmailVerif;
