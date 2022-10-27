import React from "react";
import Brand from "../Brand/Brand";
import check from "../../assest/check.jpg";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {RecoveryCheckContainer, RecoveryChecked,PasswordRest,Img,Heading,ClickLog,Parg,FormStyle ,ButtonStyle ,ButtonPargStyle }from './RecoveryCheckStyle.js'
import axios from "axios";
const RecoveryCheck = () => {
  const {
    handleSubmit,
    formState: { errors },
    
  } = useForm();
  const onSubmit = async (e,data) => {
    console.log(data);
  // const res = await axios({
  //   method: 'PATCH',
  //   url:
  //       `https://talents-valley.herokuapp.com/api/user/password/verify-code/${token}`,
  //   data: {
  //       password,
  //       passwordValidation
  //   }
  // });
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
