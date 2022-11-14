import React, { useState,useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { FaEyeSlash } from "react-icons/fa";
import { AiFillWarning } from "react-icons/ai";
import axios from "axios";
import Footer from "../Footer/Footer";
import Brand from "../Brand/Brand";

import {
  LoginContainer,
  LoginSection,
  Heading,
  Icon,
  FormStyle,
  DangerStyle,
  InputStyle1,
  LabelStyle,
  DAcount,
  ALinks,
  ButtonStyle,
  ForgetPassword,
  ButtonPargStyle,
} from "./StyleSignup";

const SignIn = () => {
  const navigate = useNavigate();
  
  const errRef = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();
  const [errMsg, setErrMsg] = useState('');
  const [showResults, setShowResults] = useState(true);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState(false);

  if (data.password !== "" && data.email !== "") {
    setErr(true);
    navigate("/Home");
  }
  const [home, setHome] = useState(true);
useEffect(()=>{
setErrMsg('')
},[data])
 
  const onClick = () => setShowResults(false);
  async function onSubmit(data) {
    console.log(data);
    setHome(false);
    try {
    
      const USER_API_URL = "https://talents-valley.herokuapp.com/api/user/login";
      const response = await axios.post(USER_API_URL,
        JSON.stringify({ data }),
          {
            headers: { "Content-Type": "application/json" },
        withCredentials: true,
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
             
          }
      )
    console.log(JSON.stringify(response?.data));

      //console.log(JSON.stringify(response));
      // const accessToken = response?.data?.accessToken;
      // const roles = response?.data?.roles;
  } catch (err) {
      if (!err?.response) {
          setErrMsg('No Server Response');
      } else if (err.response?.status === 400 && err.response?.status === 401) {
          setErrMsg('Missing Username or Password');
      } else {
          setErrMsg('Login Failed');
      }
      errRef.current.focus();
  }
  

 
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("accesToken")}`,
  //       "Content-Type": "application/json",
  //     },
  
      
    reset();
  }

  return (
    <>
      <LoginContainer>
        {home ? (
          <LoginSection>
            <Brand />
            <Heading>Login To Your Account</Heading>

            <FormStyle onSubmit={handleSubmit(onSubmit)}>
              <>
                <LabelStyle htmlFor="email">Email</LabelStyle>

                <InputStyle1
                  type="email"
                  name="email"
                  placeholder="email@gmail.com"
                  {...register("email", {
                    required: "Incorrect email",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Incorrect email address",
                    },
                  })}
                />
                {errors.email && (
                  <DangerStyle>
                    <AiFillWarning /> {errors.email.message}
                  </DangerStyle>
                )}

                <>
                  <LabelStyle htmlFor="password">Password</LabelStyle>
                  <InputStyle1
                    type="password"
                    id="password"
                    name="password"
                    {...register("password", {
                      required: "Incorrect password",
                      minLength: {
                        value: 8,
                        message: "Password must have at least 8 characters",
                      },
                      maxLength: {
                        value: 12,
                        message: "Maximum allowed password is 12",
                      },
                      pattern: {
                        value:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%])/i,
                        message: "week",
                      },
                    })}
                    onClick={onClick}
                  />

                  {showResults ? (
                    <Icon>
                      {" "}
                      <FaEyeSlash />
                    </Icon>
                  ) : null}
                  {errors.password && (
                    <DangerStyle>
                      <AiFillWarning />
                      {errors.password.message}
                    </DangerStyle>
                  )}
                </>

                <Link to="/Recovery">
                  <ForgetPassword>Forget Password?</ForgetPassword>
                </Link>

                <ButtonStyle type="submit">
                  <ButtonPargStyle>Sign in</ButtonPargStyle>
                </ButtonStyle>
                <p ref={errRef} style={{ color: "#F50000", fontSize: "14px" }} aria-live="assertive">
                  {errMsg}
                </p>
                <DAcount>
                  Dont have an account?{" "}
                  <Link to="SignUp">
                    <ALinks href="#">&nbsp;Sig up</ALinks>
                  </Link>{" "}
                </DAcount>
              </>
            </FormStyle>
          </LoginSection>
        ) : (
          navigate("/home")
        )}
      </LoginContainer>

      <Footer />
    </>
  );
};
export default SignIn;
