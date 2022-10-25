import React from 'react'
import Brand from '../Brand/Brand';
import Footer from '../Footer/Footer';
import { Link ,useNavigate  } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { MdArrowBackIosNew} from "react-icons/md";
import {RecoveryContainer,Recovery1,BackStyle,CheckEmail,Heading,ResendLink1 , Parg,ClickLog, Resed1,BoxContainer,LeftBox,RightBox,FormStyle,ButtonStyle,ButtonPargStyle }from './RecoveryBoxStyle.js'
const RecoveryBox = () => {
  const navigate =useNavigate();
  const {

    handleSubmit,
    formState: { errors },
    
  } = useForm();
 function Emailcheck(){
    const USER_API_URL = "https://talents-valley.herokuapp.com/api/user/send-code-email";
    return fetch(USER_API_URL, {

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
  localStorage.getItem('user-info')
  return (
    <>
    <RecoveryContainer>
      <Recovery1 >
      <Brand />
      <BackStyle onClick={()=>navigate("/Recovery",{replace:true})}><MdArrowBackIosNew/></BackStyle>
      <CheckEmail>
      <Heading>Check Your Email</Heading>
      <Parg>We have sent you an email that contains a code to</ Parg>
      <ClickLog> reset your password </ClickLog>
      </CheckEmail>
<BoxContainer>

<LeftBox input type="text"  />
<LeftBox  type="text"/>
<LeftBox  type="text"  />
<RightBox type="text"  />
<RightBox type="text" />
<RightBox type="text" />
</BoxContainer>


      <FormStyle onSubmit={handleSubmit} >
     
      <ButtonStyle type="submit"> <Link to="/RecoveryPassword" ><ButtonPargStyle> Continue </ButtonPargStyle>  </Link>
      </ButtonStyle>
  

      <Resed1>Didn't get the code? <Link to="/RecoveryPassword" >
      <Link to="/RecoveryBox" >
      <ResendLink1 >&nbsp;Resend</ResendLink1>
    </Link>
   
    </Link></ Resed1>
      </FormStyle>
      </Recovery1>
    </RecoveryContainer>
      <Footer/>
    </>
  )
}

export default RecoveryBox;
