import React, { useState } from "react";
import Brand from "../Brand/Brand";
import Footer from "../Footer/Footer";
import "./Recover.css";
import { AiFillWarning } from "react-icons/ai";
import { Link ,useNavigate  } from "react-router-dom";
import { MdArrowBackIosNew} from "react-icons/md";
import { useForm } from "react-hook-form";
const Recovery = () => {
  const navigate =useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    trigger,
  } = useForm();
  const onSubmit = async (e) => {
    reset();
}
//   async function ForgetEmail(){
//     console.warn(values);
//     let item= {values};
//   let resp =  await  fetch("https://talents-valley.herokuapp.com/api/user/password/forgot",{
//     body: JSON.stringify(item.json()),
//     method:'POSt',
//     headers:{
//       "Content-Type":"application/json",
//       "Accept":"application/json",
//     },
//     body: JSON.stringify(item)
//   }).then(response => {
//     response.json();
//     console.log(response);
//     if(response.status === 200){
//      console.log("SUCCESSS")
//      return response.json();     
//  }else if(response.status === 408){
//      console.log("SOMETHING WENT WRONG")
//      this.setState({ requestFailed: true })
//  }
//  localStorage.setItem("jwt",response.token);
//    localStorage.setItem("user-info", JSON.stringify(response.user));
// }).catch(function (error) {
//  if (error.response.status === 401) {
//    throw error;
//  }  
// });}
  return (
    <>
      <div className="Recovery-container">
        <section className="Recovery">
          <Brand />
          <p className="back" onClick={()=>navigate("/SignIn",{replace:true})}><MdArrowBackIosNew/></p>
          <div className="forgetEmail">
            <h4>Forget Password ?</h4>
            <p>We'll send a code to your email to reset your password</p>
          </div>
          <form  onSubmit={handleSubmit(onSubmit)}  className="Recovery-form">
          <>
          <label htmlFor="email">Email</label>
          <input
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
           <small className="text-danger"><AiFillWarning/> {errors.email.message}</small>
         )}
        </>

            <Link to="/RecoveryBox">
              <button className="RecoveryBtn"> Send Code</button>
            </Link>
          </form>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Recovery;
