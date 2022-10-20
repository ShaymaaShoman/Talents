import React, { useEffect } from "react";
import "./Register.css";
import { BiHide } from "react-icons/bi";
import { useState } from "react";
import Brand from "../Brand/Brand";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import UseForm from "../UseForm/UseForm";
import Validtion from "../UseForm/Validtion";
import SignIn from "../Sign-up/SignIn";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
const Register = () => {
  const { handleSubmit, values, handleChange, errors } = UseForm(Validtion);
  const [show, setShow] = useState(false);
  const SignupFetch = () => {
    console.warn(values);
    let item = { values };

    const USER_API_URL = "https://talents-valley.herokuapp.com/api/user/signup";
    return fetch(USER_API_URL, {
      body: JSON.stringify(item.json()),
        headers : {
            'Content-Type' : 'application/json'
        },
        method : "POST",
        'credentials': 'include'
    }).then(response => {
        console.log(response);
         response.json();
         if(response.status === 200){
          console.log("SUCCESSS")
          return response.json();     
      }else if(response.status === 408){
          console.log("SOMETHING WENT WRONG")
          this.setState({ requestFailed: true })
      }
        localStorage.setItem("user-info", JSON.stringify(response));
    }).catch(function (error) {
      if (error.response.status === 401) {
        throw error;
      }  
    });
    // let resp = fetch(/signup", {
    
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    //   body: JSON.stringify(item),
    // });
    // resp= response => response.json();
    // 
  
    return handleChange;
  };
  // .catch (error) {
  //   console.error(error);
  // }
  useEffect(() => {
    localStorage.getItem("user-info");
  }, [values]);
  return (
    <>
      {!show ? (
        <div className="sign-container">
          <section className="sign">
            <Brand />
            <h4>Create Your Account</h4>
            <form onSubmit={handleSubmit}>
              <div className="fulName">
                <div className="col_half">
                  <div className="input_field">
                    <label htmlFor="FirstName">First Name </label>
                    <input
                      type="text"
                      name="FirstName"
                      id="FirstName"
                      placeholder=" Enter First Name"
                      value={values.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col_half">
                  <div className="input_field">
                    {" "}
                    <label htmlFor="LastName" id="Last">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="LastName"
                      name="LastName"
                      placeholder="Enter Last Name"
                      value={values.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <>
                <label>Email</label>
                <input
                  type="email"
                  value={values.email}
                  name="email"
                  placeholder="email@gmail.com"
                  onChange={handleChange}
                />
                {errors.email && (
                  <span
                    className="invalid"
                    style={{
                      color: " red",
                    }}
                  >
                    {errors.email}
                  </span>
                )}
              </>
              <>
                <label>Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <span
                    className="invalid"
                    style={{
                      color: " red",
                    }}
                  >
                    {errors.password}
                  </span>
                )}
              </>
              {values.password ? <FaEye id="eye" /> : <FaEyeSlash id="eye" />}

              <label>Country</label>
              <select onChange={handleChange}>
                <option></option>
                <option>Palestain</option>
                <option>UAE</option>
              </select>

              <button className="signup1" type="submit" onClick={SignupFetch}>
                Sign Up
              </button>

              <p className="AlreadyAcouunt">
                Already have an account?{" "}
                <Link to="/SignIn">
                  <span>&nbsp;Sign In</span>
                </Link>{" "}
              </p>
            </form>
          </section>
        </div>
      ) : (
        <SignIn />
      )}
      <Footer />
    </>
  );
};

export default Register;
