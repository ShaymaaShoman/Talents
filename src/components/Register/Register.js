import React, { useRef ,useState,useMemo} from "react";
import { BiHide } from "react-icons/bi";
import Brand from "../Brand/Brand";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import axios from 'axios';
import SignIn from "../Sign-up/SignIn";
import './Register.css'
// import { FaEyeSlash } from "react-icons/fa";
// import { FaEye } from "react-icons/fa";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { useForm } from "react-hook-form";
import { AiFillWarning } from "react-icons/ai";
import {SignContainer,Sign,Heading,FormStyle,FulName,LabelStylePhone ,InputText,LabelContry ,SignLink,Label,ColHalf,AlreadyAcouuntSpan,ButtonPargStyle ,InputStyle,LabelStyle,ButtonStyle  }from './RegisterStyle.js'
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
  
  const [value, setValue] = useState( "");
  const [phone, setPhone] = useState('')
  const options = useMemo(() => countryList().getData(), [])
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const [password,setPassword]=useState('');
  const [hidePassword, setHidePassword] = useState(true);
const [email, setEmail] = useState("");;
const changeHandler = value => {
  setValue(value)
}
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


  



  return (
    <>
      <SignContainer>
        <Sign>
          <Brand />
          <Heading>Create Your Account</Heading>
          <FormStyle onSubmit={handleSubmit(onSubmit)}>
          <FulName>
          <ColHalf >
          <Label>
            First Name
          </Label>
          <InputText type="text"       name="FirstName"
                  id="FirstName"
                  placeholder=" Enter First Name"
                  {...register("firstName", {
                    required: "firstName is required",
                  })}
                  className={`form-control ${errors.name && "invalid"}`} />
        </ColHalf>
    
        <ColHalf >
          <Label>
            Last Name
          </Label>
          <InputText type="text"    id="LastName"
                  name="LastName"
                  placeholder="Enter Last Name"
             
                  {...register("lastName", {
                    required: "lastName is required",
                  })}
                  className={`form-control ${errors.name && "invalid"}`}/>
        </ColHalf>
        </FulName>

            <>
              <LabelStyle  htmlFor="email">Email</LabelStyle>
              <InputStyle
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
              <LabelStyle label htmlFor="password">Password</LabelStyle>
              <InputStyle
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
              <LabelStylePhone  htmlFor="phone"> phone number</LabelStylePhone>
             
              <PhoneInput
            onChange={setPhone}
                country="US"
                value={phone}
                id="phone"
                name="phone"
                {...register("phone", {
                  required:  "Incorrect phone" 
               })}
               style={{width: '980px'}}
              />
         
              {errors.phone && (
                <small className="text-danger"><AiFillWarning/> {errors.phone.message}</small>
              )}
            </>
            <>
              <LabelContry  >Country</LabelContry>
              <Select options={options} value={value} onChange={changeHandler} placeholder="" />
             
           
             {errors.name && (
              <small className="text-danger">Incorrect Country</small>
            )}
            </>
            <ButtonStyle  type="submit">
            <Link to="/SignIn"><ButtonPargStyle >Sign Up </ButtonPargStyle>  </Link> 
            </ButtonStyle>

            <AlreadyAcouuntSpan>
              Already have an account?{" "}
              <Link to="/SignIn">
                <SignLink>&nbsp;Sign In</SignLink>
              </Link>{" "}
            </AlreadyAcouuntSpan>
          </FormStyle>
        </Sign>
      </SignContainer>

      <Footer />
    </>
  );
};

export default Register;
// <FulName >
//   <ColHalf>
//     <InputField>
//       <Label htmlFor="FirstName">First Name </Label>
//       <input
//         type="text"
//   

//       />
//       {errors.name && (
//         <small className="text-danger">
//           {" "}
//           {errors.name.message}{" "}
//         </small>
//       )}
//     </InputField>
//   </ColHalf>
//   <ColHalf>
//     <InputField>
//       {" "}
//       <label htmlFor="LastName">
//         Last Name
//       </label>
//       <input
//         type="text"
//     

//       />
//       {errors.name && (
//         <small className="text-danger">
//           {errors.name.message}{" "}
//         </small>
//       )}
//     </InputField>
//   </ColHalf>
// </FulName>