import React from 'react'
import Brand from '../Brand/Brand';
import Footer from '../Footer/Footer';
import { Link ,useNavigate  } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { MdArrowBackIosNew} from "react-icons/md";
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
    <div  className='Recovery-container'>
      <section className='Recovery1' >
      <Brand />
      <p className="back" onClick={()=>navigate("/Recovery",{replace:true})}><MdArrowBackIosNew/></p>
      <div className='CheckEmail'>
      <h4>Check Your Email</h4>
      <p>We have sent you an email that contains a code to<br/>
      reset your password</p>
      </div>
<div className='box-container'>

<input type="text"  className='LeftBox'/>
<input type="text" className='LeftBox'/>
<input type="text" className='LeftBox' />
<input type="text"  className='RightBox'/>
<input type="text" className='RightBox'/>
<input type="text" className='RightBox'/>
</div>


      <form onSubmit={handleSubmit} className='Recovery-form1'>
     
      <button className='RecoveryBtn1' type="submit"> <Link to="/RecoveryPassword" ><p> Continue </p>  </Link>
      </button>
  

      <p className='Resed1'>Didn't get the code? <Link to="/RecoveryPassword" >
      <Link to="/RecoveryBox" >
      <a href="#" className='ResendLink1'>&nbsp;Resend</a>
    </Link>
   
    </Link></p>
      </form>
      </section>
    </div>
      <Footer/>
    </>
  )
}

export default RecoveryBox;
