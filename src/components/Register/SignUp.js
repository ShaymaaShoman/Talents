import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useForm } from "react-hook-form";
import {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input/input";
import en from "react-phone-number-input/locale/en.json";

import "./Register.css";
import { FaEyeSlash } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillWarning } from "react-icons/ai";

import Brand from "../Brand/Brand";
import Footer from "../Footer/Footer";

import {
  SignContainer,
  Sign,
  Heading,
  FormStyle,
  FulName,
  LabelStylePhone,
  Select,
  ALinks,
  CorrectStyle,
  DangerStyle,
  InputText,
  LablCountry,
  Icon,
  SignLink,
  Label,
  ColHalf,
  AlreadyAcouuntSpan,
  ButtonPargStyle,
  InputStyle,
  LabelStyle,
  ButtonStyle,
} from "./RegisterStyle.js";
import { useEffect } from "react";
import { type } from "@testing-library/user-event/dist/type";

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const [showResults, setShowResults] = useState(true);
  const [mobile, setMobile] = useState("");
  const [value, setValue] = useState("");
  const [password, setPassword] = useState(false);
  const [country, setCountry] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [err, setErr] = useState(false);
  const [error, setError] = useState("");
  const [character, setCharacter] = useState(false);
  const [number, setNumber] = useState(false);
  const [special, setSpecial] = useState(false);
  
  var colour1=" #A6A0A0",colour2="#A6A0A0",colour3=" #A6A0A0",colour4="#A6A0A0";
  const [inputVal,setInputVal]=useState({
    charlength: false,
    specialchar: false,
    UpperLowerchar: false,
    numeric: false,
  })
  function onClick() {
    setShowResults(false);
    if (type === "paswword") {
      setInputVal({
        charlength: !(value.length > 8),
        specialchar: !/[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(value),
        UpperLowerchar: !/^(?=.*[a-z])(?=.*[A-Z])/.test(value),
        numeric: !/^(?=.*\d)/.test(value),
      });
    }
    // if(password.length >= "8")
    // {
    //     colour1="green";    
    // }
    // if(password.length .match(/[A-Z]/))
    // {
    //     colour2="green";    
    // }
    // if(password.length .match(/[a-z]/))
    // {
    //     colour3="green";    
    // }
    // if(password.length .match(/[\d`~!@#$%\^&*()+=|;:'",.<>\/?\\\-]/))
    // {
    //     colour4="green";    
    // }
   
  }

  
  function Valid(){
    if(password.includes("!"||"@"||"#"||"$"||"%")){
      setErr(true);
    }
  }
 
  const onSubmit = async(data) => {

    console.log(data);
  
    if (
      data.password !== "" &&
      data.email !== "" &&
      data.firstName !== "" &&
      data.lastName !== "" &&
      data.mobile !== "" &&
      data.country !== ""
    ) {
      setErr(true);
      navigate("/");
    }
    
    const USER_API_URL = "https://talents-valley.herokuapp.com/api/user/signup";

   await fetch(USER_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        mobile: mobile,
        country: data.country,
      }),
    })
    .then(response => response.json())
    .then((acualData)=>{
      localStorage.setItem('accessToken',acualData.data.accessToken);
      localStorage.setItem('refreshToken',acualData.data.refreshToken);
    }).catch((error) => {
        console.log(error);
          if (!error?.response) {
            setError('No Server Response');
        } else if (error.response?.status === 400) {
          setError('Missing Username or Password');
        } else if (error.response?.status === 401) {
          setError('Unauthorized');
        } else {
          setError('Login Failed');
  }})

    reset();
  };

  return (
    <>
      <SignContainer>
        <Sign>
          <Brand />
          <Heading>Create Your Account</Heading>
          <FormStyle onSubmit={handleSubmit(onSubmit)}>
            <FulName>
              <ColHalf>
                <Label>First Name</Label>

                <InputText
                  type="text"
                  name="firstName"
                  id="FirstName"
                  placeholder=" Enter First Name"
                  {...register("firstName", { required: true, maxLength: 10 })}
                  className={`form-control ${
                    errors.firstName ? "invalid" : ""
                  }`}
                />

                {errors.firstName && (
                  <DangerStyle>
                    <AiFillWarning />
                    Incorrect First Name
                  </DangerStyle>
                )}
              </ColHalf>

              <ColHalf>
                <Label>Last Name</Label>
                <InputText
                  type="text"
                  id="LastName"
                  name="lastName"
                  placeholder="Enter Last Name"
                  {...register("lastName", { required: true, maxLength: 10 })}
                  className={`form-control ${errors.lastName ? "invalid" : ""}`}
                />

                {errors.lastName && (
                  <DangerStyle>
                    <AiFillWarning />
                    Incorrect Last Name
                  </DangerStyle>
                )}
              </ColHalf>
            </FulName>
            <>
              <LabelStyle htmlFor="email">Email</LabelStyle>
              <InputStyle
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
                className={`form-control ${errors.email ? "invalid" : ""}`}
              />

              {errors.email && (
                <DangerStyle>
                  <AiFillWarning /> {errors.email.message}
                </DangerStyle>
              )}
            </>
            <>
              <LabelStyle label htmlFor="password">
                Password
              </LabelStyle>
              <InputStyle
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
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%])/i,
                    message: "week",
                  },
                })}
                className={`form-control ${errors.password ? "invalid" : ""}`}
                onClick={onClick}
                
              />

 
 {showResults ? (
                <Icon>
                  {" "}
                  <FaEyeSlash />
                </Icon>
              ) : null}
        
              {password === "" ? (
                ""
              ) : password&& (
                <p style={{ color: "green", fontWeight: "bold" }}>
                  {" "}
                  <CorrectStyle> <AiFillCheckCircle/> 
           Passwords match{" "}
         </CorrectStyle>
                </p>
              )}
              {errors.password ? (
                <DangerStyle>
                  <AiFillWarning /> {errors.password.message}
                </DangerStyle>
              ) : !errors.password ? (
                ""
              ) : (
                <CorrectStyle>
                  <AiFillCheckCircle />
                  <label>Nice Work. This is excellent password</label>
                </CorrectStyle>
              )}
              { Valid && password===""? <CorrectStyle><AiFillCheckCircle/> <label>Nice Work. This is excellent password</label></CorrectStyle>:"" }
            </>
            <>
              <LabelStylePhone htmlFor="mobile"> phone number</LabelStylePhone>

              <PhoneInput
                name="mobile"
                defaultCountry="PS"
                {...register("mobile", {
                  required: "Incorrect mobile",
                })}
                inputStyle={{
                  width: "390px",
                }}
                value={mobile}
                onChange={setMobile}
                // className={`form-control ${errors.mobile ? 'invalid' : ''}`}
              />

              {errors.mobile && (
                <DangerStyle>
                  <AiFillWarning /> {errors.mobile.message}
                </DangerStyle>
              )}
            </>
            <>
              <LablCountry> Country</LablCountry>
              <Select
                value={country}
                name="country"
                {...register("country", {
                  required: "country is required",
                })}
                onChange={(event) =>
                  setCountry(event.target.value || undefined)
                }
                placeholder=""
                className={`form-control ${errors.country ? "invalid" : ""}`}
              >
                <option value="">{en[""]}</option>
                {getCountries().map((country) => (
                  <option key={country} value={en[country]}>
                    {en[country]} +{getCountryCallingCode(country)}
                  </option>
                ))}
              </Select>
              {errors.country && (
                <DangerStyle>
                  <AiFillWarning />
                  Incorrect Country
                </DangerStyle>
              )}
            </>

            <ButtonStyle type="submit"  >
              <ButtonPargStyle>Sign Up </ButtonPargStyle>
            </ButtonStyle>
            <p style={{ color: "#F50000", fontSize: "14px" }}>
              {error}
            </p>
            <>
              <AlreadyAcouuntSpan>
                Already have an account?{" "}
                <Link to="/">
                  <ALinks href="#">&nbsp; Sign In</ALinks>
                </Link>{" "}
              </AlreadyAcouuntSpan>
            </>
          </FormStyle>
        </Sign>
      </SignContainer>

      <Footer />
    </>
  );
};

export default SignUp;
//               {inputVal.password!== "" &&(
//                 <div id="check0"> <label   style={inputVal.charlength ? null : { color: "#2cfd03" }} className={`check1 ${inputVal.password ? "invalid" : "Valid"}`}>8 character</label> &nbsp; <label style={inputVal.UpperLowerchar ? null : { color: "#2cfd03" }}className={`check2 ${errors.password ? "invalid" : "Valid"}`}  >1 capitallleter</label> &nbsp;  
// <label style={inputVal.numeric ? null : { color: "#2cfd03" }} className={`check3 ${inputVal.password ? "invalid" : "Valid"}`} >1 Number</label>&nbsp;  <label   style={inputVal.specialchar ? null : { color: "#2cfd03" }}  className={`check4 ${errors.password ? "invalid" : "Valid"}`}  >Special character</label></div>
  
//               )}

