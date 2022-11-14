import React from 'react'
import {EmailContainer,EmailSection,VerfiHeading,ImgCheck,VerfiPargraf,PargSucced,ButtonVerifiy} from './EmailVerfCheckStyle'
import NavBar from '../../NavBar/NavBar'
import checkImg from '../../../assest/check.jpg'
import Footer from '../../Footer/Footer'
import { Link  } from 'react-router-dom';
const EmailVerfiChek = () => {
  return (
    <>
    <NavBar/>
    <EmailContainer>
 <EmailSection>
 <VerfiHeading > Email Verification</VerfiHeading>
 <ImgCheck src={checkImg} alt="Check" />
 <VerfiPargraf>Your Email has been Verified <br/><PargSucced>Successfully</PargSucced> </VerfiPargraf>
 <Link to="/Home" >
 <ButtonVerifiy title="Continue"  >Continue</ButtonVerifiy>
 </Link>
 </EmailSection>
 </EmailContainer>
 <Footer/>
    </>
  )
}

export default EmailVerfiChek;
// style={{ marginBottom:"30px"}}