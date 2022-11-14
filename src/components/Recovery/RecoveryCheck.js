import React,{useState} from "react";
import Brand from "../Brand/Brand";
import check from "../../assest/check.jpg";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

import {RecoveryCheckContainer, RecoveryChecked,PasswordRest,Img,Heading,ClickLog,Parg,FormStyle ,ButtonStyle ,ButtonPargStyle }from './RecoveryCheckStyle.js'

const RecoveryCheck = () => {
  const navigate = useNavigate();
 

const handleBtn=()=>{
  navigate("/");
}
  return (
    <>
      <RecoveryCheckContainer>
        <RecoveryChecked RecoveryChecked>
          <Brand />
          <PasswordRest>
            <Img src={check} alt="" />
            <Heading >Password Reset</Heading>
            <Parg>Your Password has been Successfully Reset.</Parg>
            <ClickLog>Click Below To Login</ClickLog>
          </PasswordRest>
          
              <ButtonStyle type="submit" onClick={handleBtn}>
                {" "}
                  <ButtonPargStyle >Sign in</ButtonPargStyle>
              </ButtonStyle>
        </RecoveryChecked>
      </RecoveryCheckContainer>
      <Footer />
    </>
  );
};

export default RecoveryCheck;
