import React, { useRef ,useState} from "react";
import "./Register.css";
import { BiHide } from "react-icons/bi";
import Brand from "../Brand/Brand";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import axios from 'axios';
import SignIn from "../Sign-up/SignIn";
import PhoneNumber from "../PhoneInput/PhoneNumber";
// import { FaEyeSlash } from "react-icons/fa";
// import { FaEye } from "react-icons/fa";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useForm } from "react-hook-form";
import { AiFillWarning } from "react-icons/ai";
const Register = ({validatePassword}) => {
  const errRef = useRef();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    trigger,
  } = useForm();
  
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const [password,setPassword]=useState('');
  const [hidePassword, setHidePassword] = useState(true);
const [email, setEmail] = useState("");;
const onSubmit = async (data) => {
  if (!email || !password) {
    setErrMsg("Invalid Entry");
    return;
}
  // reset(); //clear value
  const USER_API_URL = "https://talents-valley.herokuapp.com/api/user/signup";
  const formData = new FormData();
formData.append("email", "heba.test@gmail.com");
formData.append("password", "Alex Banks");
try {
  const response = await axios.post(USER_API_URL,
      JSON.stringify({ email, password }),
      {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
      }
  );
  console.log(response?.data);
  console.log(response?.accessToken);
  console.log(JSON.stringify(response))
  setSuccess(true);
  //clear state and controlled inputs
  //need value attrib on inputs for this
  setEmail('');
  setPassword('');
 
} catch (err) {
  if (!err?.response) {
      setErrMsg('No Server Response');
  } else if (err.response?.status === 409) {
      setErrMsg('Username Taken');
  } else {
      setErrMsg('Registration Failed')
  }
  errRef.current.focus();
}
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

  const [value, setValue] = useState( "");

  



  return (
    <>
      <div className="sign-container">
        <section className="sign">
          <Brand />
          <h4>Create Your Account</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="fulName">
              <div className="col_half">
                <div className="input_field">
                  <label htmlFor="FirstName">First Name </label>
                  <input
                    type="text"
                    name="FirstName"
                    id="FirstName"
                    placeholder=" Enter First Name"
                    {...register("firstName", {
                      required: "firstName is required",
                    })}
                    className={`form-control ${errors.name && "invalid"}`}

                  />
                  {errors.name && (
                    <small className="text-danger">
                      {" "}
                      {errors.name.message}{" "}
                    </small>
                  )}
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
                    maxLength="20"
                    {...register("lastName", {
                      required: "lastName is required",
                    })}
                    className={`form-control ${errors.name && "invalid"}`}

                  />
                  {errors.name && (
                    <small className="text-danger">
                      {errors.name.message}{" "}
                    </small>
                  )}
                </div>
              </div>
            </div>

            <>
              <label htmlFor="email">Email</label>
              <input
                type="email"
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
            <>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                {...register("password",{
                    required:  "Incorrect password",
                    min: {
                      value: 4,
                      message: "Minimum Required password is 8",
                    },
                    max: {
                      value: 10,
                      message: "Maximum allowed password is 10",
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
                 
              />
              {errors.password && (
                <small className="text-danger"><AiFillWarning/> {errors.password.message}</small>
              )}
            
              <a
              href="#"
              className="toggle-btn"
              onClick={() => {
                setHidePassword(!hidePassword);
              }}
            >
              <span
                className="material-icons eye-icon"
                style={{ color: !hidePassword ? "#FF0054" : "#c3c3c3" }}
              >
               
              </span>
            </a>
            </>

            <>
              <label htmlFor="phone"> phone number</label>
              <PhoneInput
            onChange={setValue}
                country="US"
                value={value}
                id="phone"
                name="phone"
                {...register("phone", {
                  required:  "Incorrect phone" 
               })}
            
              />
              {errors.phone && (
                <small className="text-danger"><AiFillWarning/> {errors.phone.message}</small>
              )}
            </>
            <>
              <label>Country</label>
              <select    {...register("select", {
                required:  "Incorrect select" 
             })}>
                <option></option>
                <option>Palestain</option>
                <option>UAE</option>
             
              </select>
             
           
             {errors.name && (
              <small className="text-danger">Incorrect Country</small>
            )}
            </>
            <button className="signup1" type="submit">
            <Link to="/SignIn"><p>Sign Up </p>  </Link> 
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

      <Footer />
    </>
  );
};

export default Register;
