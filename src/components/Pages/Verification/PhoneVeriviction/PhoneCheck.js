import React from 'react'
import Footer from '../../../Footer/Footer';
import NavBar from '../../../NavBar/NavBar';
import{ PhoneContainer,PhoneSection,VerfiHeading,ImgePhone,VerfiPargraf,PargSucced,ButtonVerifiy} from './PhoneCheckStyle.js'
import { Link  } from 'react-router-dom';
import checkImg from '../../../../assest/check.jpg'
 
const PhoneCheck = () => {
  return (
    <>
      <NavBar/>
<PhoneContainer>
<PhoneSection>
<VerfiHeading >Phone Verification</VerfiHeading>
<ImgePhone src={checkImg} alt="Check" />
<VerfiPargraf>Your Phone has been Verified <br/><PargSucced>Successfully</PargSucced> </VerfiPargraf>
<Link to="/Home" >
<ButtonVerifiy title="Continue" style={{marginTop:"40px"}} >Continue</ButtonVerifiy>
</Link  >
</PhoneSection>
</PhoneContainer>
      <Footer/>
    </>
  )
}

export default PhoneCheck;
