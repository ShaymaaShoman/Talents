import React, { useEffect, useState } from "react";
import Brand from "../Brand/Brand";
import Footer from "../Footer/Footer";
import { Link,useNavigate } from "react-router-dom";
import { MdArrowBackIosNew} from "react-icons/md";
import {useForm} from 'react-hook-form'
import PasswordForm from "../Password/PasswordForm";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { AiFillWarning } from "react-icons/ai";
import axios from 'axios';
import {RecoveryPassContainer,RecoveryPass, BackStyle,ForgetPassword,Heading,FormStyle,LabelStyle,InputStyle,ButtonStyle,ButtonPargStyle }from './RecoveryPaswStyle'
const RecoveryPassword = () => {
 
  const navigate =useNavigate();
  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password length should be at least 8 characters")
      .max(10, "Password cannot exceed more than 10 characters"),
    cpassword: Yup.string()
      .required("Confirm Password is required")
      .min(8, "Password length should be at least 8 characters")
      .max(10, "Password cannot exceed more than 10 characters")
      .oneOf([Yup.ref("password")], "Passwords do not match")
  });
  const validationOpt = { resolver: yupResolver(formSchema) }
  const {register, watch,handleSubmit,formState: { errors }, reset, trigger,getValues} = useForm({
    mode: "onTouched",
    resolver: yupResolver(formSchema)})
  const{getActiveColor,hidePassword, handlePassword,message ,setHidePassword,setMessage}=PasswordForm();
const [password,setPassword]=useState('');
const [ConfirmPassword,setConfirmPassword]=useState('');



const onSubmit = async (data) => {
  console.log(JSON.stringify(data, null, 4))
  return false
  reset();

//   const USER_API_URL = "https://talents-valley.herokuapp.com/api/user/password/recover";
//   const formData = new FormData();
// formData.append("email", "heba.test@gmail.com");
// formData.append("password", "Alex Banks");
// axios.post(USER_API_URL, {
//     method: "POST",
//     headers: {
//     "Content-Type": "application/json",
//     },  
//     body: JSON.stringify({
//       email: data.email,
//       password: data.Password,
//       formData
//     }),

//   }).then((response)=>{
//     if (response.status === 200) {
//            const data_ = JSON.parse(response);
//          console.log( data_.data,"data")
//          localStorage.setItem("accessToken", data_.data);
//          localStorage.setItem("jwt",response.token); //store in local
//      } else if(response.data === 'SUCCESS') {
//       console.log("sucess");
//            } else if(response.data === 'FAILURE') {
//             console.log("failer");
//            }})
//            .catch(error =>
//             {
//                 console.log('error', error);
//                 return error;
//             });
}


    


  return (
    <>
    <RecoveryPassContainer >
    <RecoveryPass>
    <Brand />
    <BackStyle onClick={()=>navigate("/RecoveryBox",{replace:true})}><MdArrowBackIosNew/></BackStyle>
    <ForgetPassword>
        <Heading>Create New Password</Heading>
      </ForgetPassword>
      <FormStyle  onSubmit={handleSubmit(onSubmit)} >
      <LabelStyle htmlFor="password">New Password</LabelStyle>
      <InputStyle
      id="password"
       name="password"
      {...register("password", {
        required: true,
        minLength: 5
      })}
      onChange={({ target }) => {
        handlePassword(target.value);
      }}
      type="password"
      className={`form-control ${errors.password && "invalid"}`}
    />
    {errors?.password?.type === "required" && <p className="text-danger">This field is required</p>}
    {errors?.password?.type === "minLength" && (
      <p className="text-danger">password cannot less than 5 characters</p>
    )}
  
    <LabelStyle htmlFor="ConfirmPassword">Re-Enter Password</LabelStyle>
    <InputStyle
      {...register("ConfirmPassword", { required: true })}
      className={`form-control ${errors.password && "invalid"}`}
      type="password"
      id ="ConfirmPassword"
     name="ConfirmPassword"
    />

    {watch("ConfirmPassword") !== watch("password") &&
    getValues("ConfirmPassword") ? (
      <p className="text-danger"> <AiFillWarning/> password not match</p>
    ) : null}
       <ButtonStyle  type="submit" >
          {" "}
          <Link to="/RecoveryCheck">
         <ButtonPargStyle>Continue</ButtonPargStyle> 
        </Link>
           
          </ButtonStyle>
     
      </FormStyle>
    </RecoveryPass>
    </RecoveryPassContainer>
  <Footer />

    </>
  );
};

 
    
export default RecoveryPassword ;