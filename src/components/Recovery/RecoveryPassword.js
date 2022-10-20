import React, { useEffect, useState } from "react";
import Brand from "../Brand/Brand";
import Footer from "../Footer/Footer";
import "./Recover.css";
import { Link } from "react-router-dom";
import UseForm from "../UseForm/UseForm";
import { FaEyeSlash} from "react-icons/fa";
import {FaEye } from "react-icons/fa";
const RecoveryPassword = () => {
  const { handleSubmit, values, handleChange,errors } = UseForm();
  const {ConfirmPassword,password}=values
    // perform all neccassary validations
  function ValidConfirm(){
    let item = { ConfirmPassword, password };
//   const USER_API_URL = "https://talents-valley.herokuapp.com/api/user/password/recover";
//   return fetch(USER_API_URL, {
//     body: JSON.stringify(item.json()),
//       headers : {
//           'Content-Type' : 'application/json'
//       },
//       method : "POST",
//       'credentials': 'include'
//   }).then(response => {
//       console.log(response);
//        response.json();
//        if(response.status === 200){
//         console.log("SUCCESSS")
//         return response.json();     
//     }else if(response.status === 408){
//         console.log("SOMETHING WENT WRONG")
//         this.setState({ requestFailed: true })
//     }
//       localStorage.setItem("user-info", JSON.stringify(response));
//   }).catch(function (error) {
//     if (error.response.status === 401) {
//       throw error;
//     }  
//   });

// }
// ValidConfirm();
// useEffect(()=>{

//   localStorage.getItem('user-info')
// },[])
  }
function help(){
  if (values.password ==values.ConfirmPassword) {
    alert("Passwords   match");
  } else {
  
  alert("Passwords Not  match");
  }
  
}
    


  return (
    <>
      <div className="RecoveryPass-container">
        <section className="RecoveryPass">
          <Brand />
          <div className="forgetPassword">
            <h4>Create New Password</h4>
          </div>
          <form onSubmit={handleSubmit} className="RecoveryPass-form">
          <>
            <label htmlFor="password">New Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />

            {errors.password&&<span className="invalid" style={{
              color:' red' }}>{errors.password}</span>}
            </>
          
            {password? <FaEye id="eye" /> : <FaEyeSlash id="eye"  />}
            <>
            <label htmlFor="ConfirmPassword">Re-Enter Password</label>
            <input
              type="password"
              id="ConfirmPassword"
              name="ConfirmPassword"
              value={values.passsword2}
              onChange={handleChange}
            />
           
            {errors.ConfirmPassword&&<span className="invalid" style={{
              color:' red' }}>{errors.ConfirmPassword}</span>}
            </>
          
            {password? <FaEye id="eye1" /> : <FaEyeSlash id="eye1"  />}
              <button className="RecoveryPassBtn" type="submit" onClick={ help}>
                {" "}
                Continue
              </button>
          
            <p className="Resed">
              Didn't get the code?
              <Link to="/RecoveryBox">
                <a href="#" className="ResendLink">
                  &nbsp;Resend
                </a>
              </Link>
            </p>
          </form>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default RecoveryPassword;
