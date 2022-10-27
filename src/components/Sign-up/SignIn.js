import React, { useState } from "react";
import axios from "axios";
import { Link  } from "react-router-dom";
import { useForm } from "react-hook-form";

 import { FaEyeSlash } from "react-icons/fa";
import { AiFillWarning } from "react-icons/ai";

import Footer from "../Footer/Footer";
import Brand from "../Brand/Brand";

import { LoginContainer ,LoginSection,Heading,Icon,FormStyle ,DangerStyle,
  InputStyle1,LabelStyle,DAcount ,ALinks ,ButtonStyle,ForgetPassword,ButtonPargStyle} from "./StyleSignup";

  const SignIn = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,

    } = useForm();
    const [showResults, setShowResults] = useState(true);
    const [data,setData] = useState({
      email:"",
      password:""
 });
 const {username,password} = data;

    const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

    const onClick = () => setShowResults(false);
  const onSubmit = async (e,data) => {
    e.preventData();
    console.log(data);
    const USER_API_URL = "https://talents-valley.herokuapp.com/api/user/login";
    await axios.post(USER_API_URL ,{
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
    email: data.email,
    password: data.Password,
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
    <LoginContainer>
          <LoginSection>
            <Brand />
            <Heading>Login To Your Account</Heading>
            
    
         <FormStyle onSubmit={handleSubmit(onSubmit)}>
              <>
       
                <LabelStyle  htmlFor="email">Email</LabelStyle>
                
                <InputStyle1
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email@gmail.com"
                  {...register("email", { required: "Incorrect email" , 
                  pattern: {
                   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                   message: "Incorrect email address",
                   }} )}
                  
                   className={`form-control ${errors.email && "invalid"}`}
               />
               {errors.email && (
                 <DangerStyle ><AiFillWarning/> {errors.email.message}</DangerStyle>
               )}
          
              <>
                <LabelStyle  htmlFor="password">Password</LabelStyle>
                <InputStyle1
                
                  type=  "password"
                  id="password"
                  name="password"
                  {...register("password",{
                    required:  "Incorrect password",
                    min: {
                      value: 6,
                      message: "Minimum Required age is 5",
                    },
                    max: {
                      value: 10,
                      message: "Maximum allowed age is 10",
                    },
                    // pattern: {
                    //   value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%])/i,
                    //   message: "Incorrect password",
                    // }
                  
                   } )}
              
                 className={`form-control ${errors.password ? 'border-red' : 'border-default'}`}
                onClick={onClick}
               
              />
              { showResults ? <Icon> <FaEyeSlash/></Icon>  : null }
              {errors.password && (
                <DangerStyle  ><AiFillWarning/>{errors.password.message}</DangerStyle>
              )}
              </>
             
              <Link to="/Recovery">
                <ForgetPassword>
                  Forget Password?
                </ForgetPassword>
              </Link>

              <ButtonStyle  type="submit">
             
                <Link to="/Home"><ButtonPargStyle >Sign in</ButtonPargStyle></Link>
              </ButtonStyle>

              <DAcount>
                Dont have an account?{" "}
                <Link to="/Register">
                  <ALinks href="#" >
                    &nbsp;Sig up
                  </ALinks>
                </Link>{" "}
              </DAcount>
            </>
              
            </FormStyle>  
          </LoginSection>
          </LoginContainer>
   
      <Footer />
    </>

     
  
  );

  }
export default SignIn;
// if ('accessToken' in response) {
//   swal("Success", response.message, "success", {
//     buttons: false,
//     timer: 2000,
//   })
//   .then((value) => {
//     localStorage.setItem('accessToken', response['accessToken']);
//     localStorage.setItem('user', JSON.stringify(response['user']));
//     window.location.href = "/profile";
//   });
// } else {
//   swal("Failed", response.message, "error");
// }
// }
