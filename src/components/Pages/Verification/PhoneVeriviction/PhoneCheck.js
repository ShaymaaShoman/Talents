import React from 'react'
import Footer from '../../../Footer/Footer';
import NavBar from '../../../NavBar/NavBar';
import{ PhoneContainer,PhoneSection,VerfiHeading,ImgePhone,VerfiPargraf,PargSucced,ButtonVerifiy} from './PhoneCheckStyle.js'
import { Link ,useNavigate } from 'react-router-dom';
import checkImg from '../../../../assest/check.jpg'
 
const PhoneCheck = () => {
  const navigate = useNavigate();
  const toggle = async(e,data)=>{
    e.preventDefault();
    navigate("/Verification" );
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
<PhoneContainer>
<PhoneSection>
<VerfiHeading >Phone Verification</VerfiHeading>
<ImgePhone src={checkImg} alt="Check" />
<VerfiPargraf>Your Phone has been Verified <br/><PargSucced>Successfully</PargSucced> </VerfiPargraf>
<Link to="/Home" >
<ButtonVerifiy title="Continue" onClick={toggle} style={{marginTop:"40px"}} >Continue</ButtonVerifiy>
</Link  >
</PhoneSection>
</PhoneContainer>
      <Footer/>
    </>
  )
}

export default PhoneCheck;
