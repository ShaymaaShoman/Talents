import React from "react";
import Brand from "../Brand/Brand";
import "./Recover.css";
import check from "../../assest/check.jpg";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
const RecoveryCheck = () => {
  const {
    handleSubmit,
    formState: { errors },
    
  } = useForm();
  return (
    <>
      <div className="RecoveryCheck-container">
        <section className="RecoveryCheck">
          <Brand />
          <div className="PasswordRest">
            <img src={check} alt="" />
            <h4>Password Reset</h4>
            <p>Your Password has been Successfully Reset.</p>
            <p className="ClickLog">Click Below To Login</p>
          </div>
          <form onSubmit={handleSubmit} className="RecoveryCheck-form">
            <Link to="/Home">
              <button className="RecoveryCheckBtn" type="submit">
                {" "}
                <Link to="/">
                  <p>Sign in</p>
                </Link>
              </button>
            </Link>
          </form>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default RecoveryCheck;
