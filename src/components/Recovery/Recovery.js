import React, { useState } from "react";
import Brand from "../Brand/Brand";
import Footer from "../Footer/Footer";
import { AiFillWarning } from "react-icons/ai";
import { Link ,useNavigate  } from "react-router-dom";
import { MdArrowBackIosNew} from "react-icons/md";
import { useForm } from "react-hook-form";
import axios from "axios";
import {RecoveryContainer,Recoveryed ,Heading,BackStyle,ForgetEmail,DangerStyle,ForgetPargraf,FormStyle,LabelStyle,InputEmailStyle,ButtonStyle,ButtonPargStyle}from './RecoveryEmStyle.js'
const Recovery = () => {
  const navigate =useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();
  const[email,setEmail]=useState("");
  const[error,setError]=useState("");
  const[err,setErr]=useState(false);
  const OpenBox=(id)=>{
if(email !== ""){
    setErr(true);
    navigate("/RecoveryBox");

}
  }
  const onSubmit = async (data) => {
    console.log(data);
    const IDTest = JSON.parse(localStorage.getItem("TestID"));
    try {
        const USER_API_URL =  "https://talents-valley-backend.herokuapp.com/api/user/password/forgot";
      const response = await axios.post(USER_API_URL
      ,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
          email: data.email,
          _id:IDTest
        }
      ) ;
      console.log(navigate('/RecoveryBox',localStorage.setItem("TestID", JSON.stringify(response?.data._id))));
    } catch (error) {
      console.log( error);

      if (!error?.response) {
        setError("No Server Response");
      } else if (error.response?.status === 400 && error.response?.status === 408) {
        setError(error.response.data.message);
      } else {
        setError("Email Failed");
      }
    }

 reset();
}

  return (
    <>
      <RecoveryContainer>
        <Recoveryed >
          <Brand />
          <BackStyle onClick={()=>navigate("/",{replace:true})}><MdArrowBackIosNew/></BackStyle>
          <ForgetEmail>
            <Heading>Forget Password ?</Heading>
            <ForgetPargraf>We'll send a code to your email to reset your password</ForgetPargraf>
          </ForgetEmail>
          <FormStyle onSubmit={handleSubmit(onSubmit)} >
          <>
          <LabelStyle htmlFor="email">Email</LabelStyle>
          <InputEmailStyle
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
             className={`form-control ${errors.email && "invalid1"}`}
         />
         {errors.email && (
           <DangerStyle><AiFillWarning/> {errors.email.message}</DangerStyle>
         )}
        </>
        <Link to="/RecoveryBox" state={{id:"navvv"}}></Link>
   <ButtonStyle onClick={OpenBox}> <ButtonPargStyle>Send Code</ButtonPargStyle></ButtonStyle>
              
   <p style={{ color: "red", fontSize: "18px" }}>{error}</p>
          </FormStyle>
        </Recoveryed >
      </RecoveryContainer>

      <Footer />
    </>
  );
};

export default Recovery;
