import React, {  useState } from "react";
import Brand from "../Brand/Brand";
import Footer from "../Footer/Footer";
import { Link,useNavigate } from "react-router-dom";
import { MdArrowBackIosNew} from "react-icons/md";
import './Recover.css'
import { AiFillWarning } from "react-icons/ai";
import {AiFillCheckCircle } from "react-icons/ai";
import { FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import {RecoveryPassContainer,RecoveryPass,CorrectStyle, BackStyle,DangerStyle,ForgetPassword,Heading, Icon1,Icon,FormStyle,LabelStyle,InputStyle,ButtonStyle,ButtonPargStyle }from './RecoveryPaswStyle'
const RecoveryPassword = () => {
 
  const navigate =useNavigate();
  const[err,setErr]=useState(false);
  const [state, setState] = React.useState({
    password: "",
    cPassword: ""
  });
  const[error,setError]=useState("");
  const [passMatch, setPassMatch] = React.useState(true);
  const [showResults, setShowResults] = useState(true);
  const OpenBox=()=>{
  if(state !== ""){
    setErr(true);
    navigate({
      pathname:'/RecoveryCheck',
    state: {
      recoverToken: "",
     } }
    );
    }}
  
  React.useEffect(() => {
    validatePassword();
  }, [state]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };
  
  const validatePassword = () => {
    state.password === state.cPassword
      ? setPassMatch(true)
      : setPassMatch(false);
  };
  
  const createAccount = (data) =>{
    console.log(data);
    validatePassword();
    
  }

const onClick = () => setShowResults(false);

 
 

  


const handleSubmit= async(e,data)=>{
  console.log(data);
  e.preventDefault();
  console.log(state.password,state.cPassword);
   
    try {
      const USER_API_URL = "https://talents-valley.herokuapp.com/api/user/password/recover";
    const response = await axios.post(USER_API_URL,
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
        password:state.password,
        // recoverToken:recoverToken,
      }
    );
    console.log(JSON.stringify(response?.data));
    navigate("/RecoveryCheck");
  } catch(error) {
  console.log( error);

  if (!error?.response) {
    setError("No Server Response");
  } else if (error.response?.status === 400 && error.response?.status === 408) {
    setError(error.response.data.message);
  } else {
    setError("Password Failed");
  }
}}
// const onSubmit = async (data) => {
//   console.log(data)
  


// }
// }


  return (
    <>
    <RecoveryPassContainer >
    <RecoveryPass>
    <Brand />
    <BackStyle onClick={()=>navigate("/RecoveryBox",{replace:true})}><MdArrowBackIosNew/></BackStyle>
    <ForgetPassword>
        <Heading>Create New Password</Heading>
      </ForgetPassword>
      <FormStyle onSubmit={handleSubmit} >
      <LabelStyle htmlFor="password">New Password</LabelStyle>
      <InputStyle
      aria-label="Password"
          type="password"
          className="form-control"
          id="password"
          value={state.password}
          onChange={handleChange}
          aria-required="true"
            onClick={onClick}
           
    />
    { showResults ?  <Icon ><FaEyeSlash/></Icon>  : null }
   
     
    <LabelStyle htmlFor="ConfirmPassword">Re-Enter Password</LabelStyle>
    <InputStyle
    aria-label="Confirm Password"
    type="password"
    className={`form-control ${passMatch ? "" : "input-error-border"}`}
    id="cPassword"
    value={state.cPassword}
    onChange={handleChange}
    aria-required="true"
    aria-invalid={passMatch ? true : false}
     onClick={onClick}
    />
    { showResults ?  <Icon1 ><FaEyeSlash/></Icon1>  : null }
   
 
        <div className="input-error">
        {state.password === "" ? (
          ""
        ) :state.password <=8 ?(
<p style={{ color: "red" }}> please Password more 8</p>
        ) : state.password  === state.cPassword ? (
          <p style={{ color: "green" }} >
            {" "}
            <CorrectStyle> <AiFillCheckCircle/> 
     Passwords match{" "}
   </CorrectStyle>
          </p>
        ) : (
          <p style={{ color: "red" }}>
            {" "}
            <DangerStyle>
            <AiFillWarning />
            Passwords not match{" "}
            </DangerStyle>
          </p>
        )}
    
          
        </div>
 
       <ButtonStyle type="submit"  >
          {" "}
         
         <ButtonPargStyle onClick={OpenBox}>Continue</ButtonPargStyle> 
     
           
          </ButtonStyle>
     
      </FormStyle>
    </RecoveryPass>
    </RecoveryPassContainer>
  <Footer />

    </>
  );
};

 
    
export default RecoveryPassword ;