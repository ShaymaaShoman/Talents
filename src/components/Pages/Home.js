import React ,{useState}from 'react'
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer.js';
import ButtonTest from './Button/ButtonTest';
import {Link,useNavigate } from "react-router-dom";
import axios from 'axios';
import {HomeContainer,HomeSection,VerfiHeading,VerfiPargraf,Box1,SubHed,Wrapp,Verify,spanVerif,HedingVerif,VeriRed} from './Styled/HomeStyled.js'

const Home = () => {
  const[error,setError]=useState("");
  const [err, setErr] = useState(false);
  const [email,setEmail]=useState("")
  const navigate = useNavigate();
 const CodeEmail =async(data)=>{
  try {
    
  const USER_API_URL = "https://talents-valley.herokuapp.com/api/user/send-code-email";
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
   }
  const response = await axios.post(
    USER_API_URL,
    {
      headers:headers ,
      withCredentials: true,
    }
  );
  
  console.log(JSON.stringify(response?.data));
 
}catch(error) {
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
              <spanVerif style={{fontSize:"14px"}}>mail@email.com<VeriRed>(not verified)</VeriRed></spanVerif>
              <Link to="/EmailVerif">
              <Verify onClick={CodeEmail}>
              Verifiy
              </Verify>
              </Link>
              </Wrapp>
              </Box1>
              <Box1>  
              <HedingVerif>Phone Number</HedingVerif>
              <Wrapp>
              <spanVerif style={{fontSize:"14px"}}>+972******966<VeriRed>(not verified)</VeriRed></spanVerif>
              <Link to="/PhoneVerifi">
              <Verify>
              Verifiy
              </Verify>
              </Link>
              </Wrapp>
              </Box1>
</div>
<div className='secondery'>
              <Box1>  
              <HedingVerif>ID Verigication</HedingVerif>
              <Wrapp>
              <spanVerif style={{fontSize:"14px"}}>identity card - Driver license - passport</spanVerif>
              <Link to="/IDVerif">
              <Verify>
              Verifiy
              </Verify>
              </Link>
              </Wrapp>
              </Box1>
              <Box1>  
              <HedingVerif>Address Verification</HedingVerif>
              <Wrapp>
              <spanVerif style={{fontSize:"14px"}}>Phone,Electricty , Water Bill -Bank statement</spanVerif>
              <Link to="/AddressVerification">
              <Verify>
              Verifiy
              </Verify>
              </Link>
              </Wrapp>
              </Box1>
              </div>
      <ButtonTest  title="Continue"> Continue</ButtonTest>
   
  </HomeSection>
  </HomeContainer>
  <Footer/>
    </>
  )
}

export default Home;


//  <Boxses/>
//  
