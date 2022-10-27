import React, { useState,useMemo} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useForm } from "react-hook-form";
import { getCountries, getCountryCallingCode } from 'react-phone-number-input/input'
import en from 'react-phone-number-input/locale/en.json'


import './Register.css'
import { FaEyeSlash } from "react-icons/fa";
import {AiFillCheckCircle } from "react-icons/ai";
import { AiFillWarning } from "react-icons/ai";


import Brand from "../Brand/Brand";
import Footer from "../Footer/Footer";

import SignIn from "../Sign-up/SignIn";

import {SignContainer,Sign,Heading,FormStyle,FulName,LabelStylePhone,Select ,CorrectStyle,DangerStyle,InputText,LablCountry, Icon,SignLink,Label,ColHalf,AlreadyAcouuntSpan,ButtonPargStyle ,InputStyle,LabelStyle,ButtonStyle  }from './RegisterStyle.js'


const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();
  const [showResults, setShowResults] = useState(true);
  const [phone, setPhone] = useState('');
  const [value, setValue] = useState("");
  const [password,setPassword]=useState('');
  const[country,setCountry]=useState('');
  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    phone:"",
    select:"",

});

  function valid(){
    var regularExpression  = /[a-zA-Z0-9!@#$%^&*]{2,16}$/;
    if(regularExpression.test(password)) {
      return "Nice Work. This is excellent password"  
  }else{
    return
  }
  }

 

  const onClick = () =>setShowResults(false);


  
  const onSubmit = async (e,data) => {
    e.preventData();
    console.log(data);
    const USER_API_URL =  "https://talents-valley.herokuapp.com/api/user/signup";
    await axios.post(USER_API_URL ,{
      headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({
          firstName:data.firstName,
          lastName:data.lastName,
      email: data.email,
      password: data.Password,
      phone:data.phone,
      select: data.select,
    
    }),

    })
      .then(data => data.json())
   .then((res)=>{
           if(res.data === 'SUCCESS') {
            alert("Login Successful!");
           } else if(res.data === 'FAILURE') {
            alert("Login Failed!");
           }})
           
           .catch((error) => {
            console.log(error);
          });
           reset(); 
       
    }
  
   
  

  return (
    <>
      <SignContainer>
        <Sign>
          <Brand />
          <Heading>Create Your Account</Heading>
          <FormStyle onSubmit={handleSubmit(onSubmit)}>
          <FulName>
          <ColHalf >
          <Label>
            First Name
          </Label>
          
          <InputText type="text"      
           name="firstName"
                  id="FirstName"
                  placeholder=" Enter First Name"
                  {...register("firstName", { required: true, maxLength: 10 })}
                  className={`form-control ${errors.firstName ? "borderRed":"" }`} />
                  {errors.firstName && <DangerStyle>Incorrect First Name</DangerStyle>}
        </ColHalf>
    
        <ColHalf >
          <Label>
            Last Name
          </Label>
          <InputText type="text"    
          id="LastName"
          firstNamename="LastName"
        placeholder="Enter Last Name"
             
                  {...register("lastName", {
                    required: "lastName is required",
                  })}
                  className={`form-control ${errors.lastName && "invalid"}`}/>
                  {errors.lastName && <DangerStyle>Incorrect First Name</DangerStyle>}
        </ColHalf>
        </FulName>

            <>
              <LabelStyle  htmlFor="email">Email</LabelStyle>
              <InputStyle
                type="email"
                name="email"
                placeholder="email@gmail.com"
                {...register("email", { required: "Incorrect email" , 
                 pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Incorrect email address",
                  }} )}
                  onKeyUp={() => {
                    trigger("email");
                  }}
                  className={`form-control ${errors.email && "invalid"}`}
              />
              {errors.email && (
                <DangerStyle><AiFillWarning/> {errors.email.message}</DangerStyle>
              )}
            
            </>
            <>
              <LabelStyle label htmlFor="password">Password</LabelStyle>
              <InputStyle
                type="password"
                id="password"
                name="password"
                {...register("password",{
                    required:  "Incorrect password",
                    min: {
                      value: 4,
                      message: "Minimum Required password is 8",
                    },
                    max: {
                      value: 10,
                      message: "Maximum allowed password is 10",
                    },
                     pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%])/i,
                      message: "week",
                   }
                   
                   } )}
                
                 className={`form-control ${errors.password && "invalid"}`}
                 onClick={onClick}
                 
              />
              
              { showResults ? <Icon> <FaEyeSlash/></Icon>  : null }
              {errors.password && (
                <DangerStyle><AiFillWarning/> {errors.password.message}</DangerStyle>
               )} 
             
            
            </>

            <>
              <LabelStylePhone  htmlFor="phone"> phone number</LabelStylePhone>
             
              <PhoneInput
            onChange={setPhone}
                country="US"
                value={phone}
                id="phone"
                name="phone"
                style={{with:380}}
                {...register("phone", {
                  required:  "Incorrect phone" 
               })}
               className={`form-control ${errors.phone && "invalid"}`}
              />
         
              {errors.phone && (
                <DangerStyle><AiFillWarning/> {errors.phone.message}</DangerStyle>
              )}
            </>
            <>
            <LablCountry>Country</LablCountry>
              <Select
              value={country}
              name="select"
              id="select"
              onChange={event => setCountry(event.target.value || undefined)}   placeholder="">
              <option value=""
              >
                {en[""]}
              </option>
              {getCountries().map((country) => (
                <option key={country} value={en[country]}>
                  {en[country]} +{getCountryCallingCode(country)}
                </option>
              ))}
            </Select>
             {errors.select && (
              <DangerStyle>Incorrect Country</DangerStyle>
            )}
            </>
            <ButtonStyle  type="submit">
            <Link to="/SignIn"><ButtonPargStyle >Sign Up </ButtonPargStyle>  </Link> 
            </ButtonStyle>

            <AlreadyAcouuntSpan>
              Already have an account?{" "}
              <Link to="/SignIn">
                <SignLink>&nbsp;Sign In</SignLink>
              </Link>{" "}
            </AlreadyAcouuntSpan>
          </FormStyle>
        </Sign>
      </SignContainer>

      <Footer />
    </>
  );

}


export default Register;
//  {password.includes(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%])/i)&&(<CorrectStyle>{password}</CorrectStyle>)}
/*  <CorrectStyle><AiFillCheckCircle/> {valid}</CorrectStyle>  */