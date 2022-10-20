import React, { useEffect } from "react";
import "./Sign-up.css";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import Footer from "../Footer/Footer";
import Brand from "../Brand/Brand";
import { Link } from "react-router-dom";
import UseForm from "../UseForm/UseForm";
import Home from "../HomePage/Home";
import Validtion from "../UseForm/Validtion";
// import  useHistory  from "react-router-dom"
const SignIn = () => {
  // const history = useHistory();
  const { handleSubmit, handleChange, values, errors } = UseForm(Validtion);
  const { email, password } = values;
  const [show, setShow] = useState(true);

  useEffect(() => {
    // if(email&&password==0){
    //   alert("invalid data");
    // }else{
    //  alert("user Login sucssed" );

    // }
   localStorage.getItem("user-info");

    
    // history.push("/Home");
  }, [values]);
  // if(email&password){
  //   setShow(!show)
  // }
  //async await add
  async function loginTest() {
    console.warn(email, password);
    let item = { email, password };
   
    const USER_API_URL = "https://talents-valley.herokuapp.com/api/user/login";
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

  }
  
  return (
    <>
      <div id="error"></div>
      {show ? (
        <div className="Login-container">
          <section className="login">
            <Brand />
            <h4>Login To Your Account</h4>
            <form onSubmit={handleSubmit} className="login-form">
              <>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={values.email || ""}
                  onChange={handleChange}
                  placeholder="email@gmail.com"
               
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
                <label htmlFor="password">Password</label>
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
              {password ? <FaEye id="eye" /> : <FaEyeSlash id="eye" />}

              <Link to="/Recovery">
                <p className="forget">
                  <a>Forget Password?</a>
                </p>
              </Link>

              <button className="Loginbtn" type="submit" onClick={loginTest}>
             
                <Link to="/"><p >Sign in</p></Link>
              </button>

              <p className="DAcount">
                Dont have an account?{" "}
                <Link to="/Register">
                  <a href="#" className="signLink">
                    &nbsp;Sig up
                  </a>
                </Link>{" "}
              </p>
            </form>
          </section>
        </div>
      ) : (
        <Home />
      )}
      <Footer />
    </>
  );
};

export default SignIn;
