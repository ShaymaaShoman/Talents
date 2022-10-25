import React from "react";
import Brand from "../Brand/Brand";
import check from "../../assest/check.jpg";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {RecoveryCheckContainer, RecoveryChecked,PasswordRest,Img,Heading,ClickLog,Parg,FormStyle ,ButtonStyle ,ButtonPargStyle }from './RecoveryCheckStyle.js'

const RecoveryCheck = () => {
  const {
    handleSubmit,
    formState: { errors },
    
  } = useForm();
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
          <FormStyle onSubmit={handleSubmit} >
            <Link to="/Home">
              <ButtonStyle type="submit">
                {" "}
                <Link to="/">
                  <ButtonPargStyle >Sign in</ButtonPargStyle>
                </Link>
              </ButtonStyle>
            </Link>
          </FormStyle>
        </RecoveryChecked>
      </RecoveryCheckContainer>
      <Footer />
    </>
  );
};

export default RecoveryCheck;
