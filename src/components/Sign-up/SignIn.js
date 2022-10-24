import React, { useRef,useEffect , useContext} from "react";
import axios from "axios";
// import { FaEyeSlash } from "react-icons/fa";
// import { FaEye } from "react-icons/fa";
import { AiFillWarning } from "react-icons/ai";
import { useState } from "react";
import Footer from "../Footer/Footer";
import Brand from "../Brand/Brand";
import { Link,Navigate  } from "react-router-dom";
import { useForm } from "react-hook-form";
import Home from "../HomePage/Home";
import './Sign-up.css'
import PasswordForm from "../Password/PasswordForm";

import AuthContext from "../context/AuthProvider";
import { LoginContainer ,LoginSection,Heading,FormStyle,InputEmailStyle ,DangerStyle,InputStyle,LabelStyle,DAcount ,ALinks ,ButtonStyle,ForgetPassword,ButtonPargStyle} from "./StyleSignup";
const SignIn = () => {
  const { setAuth } = useContext(AuthContext);
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const errRef = useRef();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    trigger,
  } = useForm();
  const{getActiveColor,hidePassword, handlePassword,message ,setHidePassword,setMessage,}=PasswordForm();
  const [password,setPassword]=useState('');
  const [email, setEmail] = useState("");;
  
  const onSubmit = async (e,data) => {
//     // reset(); //clear value
//     const USER_API_URL = "https://talents-valley.herokuapp.com/api/user/login";
//     const formData = new FormData();
// formData.append("email", "heba.test@gmail.com");
// formData.append("password", "Alex Banks");
// try {
//   const response = await axios.post(USER_API_URL,
//       JSON.stringify({ email, password }),
//       {
//           headers: { 'Content-Type': 'application/json' },
//           withCredentials: true
//       }
//   );
//   console.log(JSON.stringify(response?.data));
//   //console.log(JSON.stringify(response));
//   const accessToken = response?.data?.accessToken;
//   const roles = response?.data?.roles;
//   setAuth({email, password, roles, accessToken });
//   setPassword('');
//   setEmail('');
//   setSuccess(true);
// } catch (err) {
//   if (!err?.response) {
//       setErrMsg('No Server Response');
//   } else if (err.response?.status === 400) {
//       setErrMsg('Missing Username or Password');
//   } else if (err.response?.status === 401) {
//       setErrMsg('Unauthorized');
//   } else {
//       setErrMsg('Login Failed');
//   }
//   errRef.current.focus();
// }

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
                
                <InputStyle
                  type="email"
                  id="email"
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
                 <DangerStyle ><AiFillWarning/> {errors.email.message}</DangerStyle>
               )}
          
              <>
                <LabelStyle  htmlFor="password">Password</LabelStyle>
                <InputStyle
                
                  type= {hidePassword ? "password" : "text"}
                  id="password"
                  name="password"
                  {...register("password",{
                    required:  "Incorrect password",
                    min: {
                      value: 6,
                      message: "Minimum Required age is 6",
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
                   onKeyUp={() => {
                  trigger("password");// underline red
                }}
                 className={`form-control ${errors.password && "invalid"}`}
                 onChange={({ target }) => {
                  handlePassword(target.value);
                }}
              />
              {errors.password && (
                <DangerStyle  ><AiFillWarning/>{errors.password.message}</DangerStyle>
              )}
              </>
              <ALinks
              href="#"
              className="toggle-btn"
              onClick={() => {
                setHidePassword(!hidePassword);
              }}
            >
              <span
               
                style={{ color: !hidePassword ? "#FF0054" : "#c3c3c3" }}
              >
               
              </span>
            </ALinks>
          
            {password.length !== 0 ? (
              <p  style={{ color: getActiveColor(message) }}>
                Your password is {message}
              </p>
            ) : null}
              <Link to="/Recovery">
                <ForgetPassword>
                  Forget Password?
                </ForgetPassword>
              </Link>

              <ButtonStyle  type="submit">
             
                <Link to="/"><ButtonPargStyle >Sign in</ButtonPargStyle></Link>
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
};

export default SignIn;
