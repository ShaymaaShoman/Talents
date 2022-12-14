import React ,{useEffect, useState}from 'react'
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer.js';
import ButtonTest from './Button/ButtonTest';
import {Link,useNavigate } from "react-router-dom";
import {CgDanger}from"react-icons/cg";
import axios from 'axios';
import {HomeContainer,HomeSection,VerfiHeading,VerfiPargraf,VerifyTry,VerifyPending,Box1,SubHed,Wrapp,Verify,VeriGreen,spanVerif,HedingVerif,VeriRed} from './Styled/HomeStyled.js'
import { useSearchParams } from "react-router-dom";
import CorrectSmall from '../../assest/CorrectSmall.png'
const Verification = () => {
  const[par,setPar]=useState("not verified");
  const[error,setError]=useState("");
  const [err, setErr] = useState(false);
  const[phone,setPhone]=useState(false);
  const [active, setActive] = useState(false);
  const [isVerfied ,setIsVerfied ] =useState(false);
  const [itemStatus  ,setItemStatus ]=useState("");
  const [disabled  ,setDisabled ]=useState(true);
  const [errorMssage, setErrorMssage] = useState("");
   const userData=localStorage.getItem('user');
  const testUserData =JSON.parse(userData);
const email =testUserData.email;
const mobile =testUserData.mobile;
const verifiedEmail =testUserData.verifiedEmail;
const verifiedMobile =testUserData.verifiedMobile;
const reg = /\d\d\d\d\d\d\d\d/;
const  mobileFormate= mobile.replace(reg,"********");
// navigate("/PhoneVerifi" )
  const MobileSendCode =async (e,data) => {
   e.preventDefault();
   console.log(data);
   const USER_API_URL="https://talents-valley-backend.herokuapp.com/api/user/send-code-mobile";
   await fetch (USER_API_URL,{
    method: "POST",
    headers: { 
     "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,   
  },
  body: JSON.stringify({
  
  }),
})
.then(response => response.json())
.then((acualData)=>{
 console.log(acualData);
   navigate("/PhoneVerifi" )
   .catch(error=>console.log(error))

  }).catch((error) => {
    console.log(error);
    
})

  };
 
  
  // const handleClick = () => {
  //   if(disabled){
  //     setActive(!active);
  //   }
   
  // };
 

  const navigate = useNavigate();

  const validmobile = async(e,data) => {
    e.preventDefault();
    console.log(data);
    const USER_API_URL = "https://talents-valley-backend.herokuapp.com/api/user/send-code-email";

    await fetch(USER_API_URL, {
       method: "POST",
       headers: { 
        "Content-Type": "application/json",
       Authorization: `Bearer ${localStorage.getItem('accessToken')}`,   
       },
       body: JSON.stringify({
       
       }),
     })
     .then(response => response.json())
     .then((acualData)=>{
      console.log(acualData);
      navigate("/EmailVerif" )
     }).catch((error) => {
         console.log(error);
         setErrorMssage("No Response")
         
     })

    }
    const ButtonChange = () => {
      if (
        (isVerfied === false && !test.verifiedAddress.status)) {
        return (
          <Verify >
           "Verify"
          </Verify>
        );
      } else if (test.verifiedAddress.status === "pending") {
        return (
          <VerifyPending disabled={true} >
            pending
          </VerifyPending>
        );
      } else if (test.verifiedAddress.status === "rejected") {
        return (
          <VerifyTry >
            try again
          </VerifyTry>
        );
      } else {
        return (
          <img src={CorrectSmall} alt ="LogoBrand"/>
        );
      }
    };
  return (
    <>
      <NavBar/>
      <HomeContainer>
      <HomeSection>
      <VerfiHeading >Verification</VerfiHeading>
      <VerfiPargraf >To use our services, We need to verify your account</VerfiPargraf>
      
              <SubHed> You Can Complete The 2 Following Taske Later</SubHed>
             <div className='nessaccry'>
              <Box1>  
              <HedingVerif>Email Address</HedingVerif>
              <Wrapp>
              <spanVerif style={{fontSize:"14px"}}>{email} {verifiedEmail? <VeriGreen >(Verified)</VeriGreen>:<VeriRed style={{color:par?"":"green"}}>(not verified)</VeriRed>}</spanVerif>
              {verifiedEmail ?(<img src={CorrectSmall} alt ="LogoBrand"/>

              ):(
                <Verify  onClick={validmobile}>
              Verifiy
              </Verify>
                
              )
                  
            }
     
            
          
              </Wrapp>
              </Box1>
              <Box1>  
              <HedingVerif>Phone Number</HedingVerif>
              <Wrapp>
              <spanVerif style={{fontSize:"14px"}}>{mobileFormate} {verifiedMobile? <VeriGreen >(Verified)</VeriGreen>:<VeriRed style={{color:par?"":"green"}}>(not verified)</VeriRed>}</spanVerif>
              {verifiedMobile ?(<img src={CorrectSmall} alt ="LogoBrand"/>

              ):(
                <Verify  onClick={MobileSendCode}>
              Verifiy
              </Verify>
                
              )
                  
            }
              
              </Wrapp>
              </Box1>
</div>
<div className='secondery'>
              <Box1>  
              <HedingVerif>ID Verification</HedingVerif>
              <Wrapp>
              <spanVerif style={{fontSize:"14px"}}>identity card - Driver license - passport{isVerfied? <VeriRed style={{color:par?"":"green"}}>Rejected<CgDanger style={{fontSize:"20px",marginTop:"-50px"}}/></VeriRed>:""}</spanVerif>
              <Link to="/IDVerif">
              <Verify  onClick={ButtonChange}>
              Verify
         </Verify>
              </Link>
              </Wrapp>
              </Box1>
              <Box1>  
              <HedingVerif>Address Verification</HedingVerif>
              <Wrapp>
              <spanVerif style={{fontSize:"14px"}}>Phone,Electricty , Water Bill -Bank statement{isVerfied? <VeriRed style={{color:par?"":"green"}}>Rejected<CgDanger/></VeriRed>:""}</spanVerif>
              <Link to="/AddressVerification">
      <Verify  onClick={ButtonChange}>
                Verifiy
                </Verify>
              
           
         
              </Link>
              </Wrapp>
              </Box1>
              </div>
      <ButtonTest  title="Continue"   disabled ={!email&&!mobile}
      style={{ backgroundColor: active ? "#A7BDFB" : "#4375FF" }}>Continue</ButtonTest>
      <p style={{ color: "#EE404C", fontSize: "18px" }}>{errorMssage}</p>
  </HomeSection>
  </HomeContainer>
  <Footer/>
    </>
  )
}

export default Verification;
// onClick={Verfi}
