import React, { useState } from "react";
import Brand from "../Brand/Brand";
import Footer from "../Footer/Footer";
import "./Recover.css";
import { Link } from "react-router-dom";
import UseForm from "../UseForm/UseForm";
import { MdArrowBackIosNew} from "react-icons/md";
const Recovery = () => {
  const { handleSubmit, values, handleChange,errors } = UseForm();
  async function ForgetEmail(){
    console.warn(values);
    let item= {values};
  let resp =  await  fetch("https://talents-valley.herokuapp.com/api/user/password/forgot",{
    body: JSON.stringify(item.json()),
    method:'POSt',
    headers:{
      "Content-Type":"application/json",
      "Accept":"application/json",
    },
    body: JSON.stringify(item)
  })
  resp = resp.JSON();
  
  localStorage.setItem("user-info",JSON.stringify(resp));
  

  }
  localStorage.getItem('user-info')
  return (
    <>
      <div className="Recovery-container">
        <section className="Recovery">
          <Brand />
          <p className="back"><MdArrowBackIosNew/></p>
          <div className="forgetEmail">
            <h4>Forget Password ?</h4>
            <p>We'll send a code to your email to reset your password</p>
          </div>
          <form onSubmit={handleSubmit} className="Recovery-form">
          <>
            <label htmlFor="userName">Email</label>
            <input
              type="email"
              id="userName"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="email@gmail.com"
            />
            {errors.email&&<span>{errors.email}</span>}
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
