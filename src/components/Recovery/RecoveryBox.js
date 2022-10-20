import React from 'react'
import Brand from '../Brand/Brand';
import Footer from '../Footer/Footer';
import { Link} from 'react-router-dom';
import UseForm from '../UseForm/UseForm';
import { MdArrowBackIosNew} from "react-icons/md";
const RecoveryBox = () => {
  const{handleSubmit,values}=UseForm();
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
      <section className='Recovery' >
      <Brand />
      <p className="back"><MdArrowBackIosNew/></p>
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


      <form onSubmit={handleSubmit} className='Recovery-form'>
      <Link to="/RecoveryPassword" >
      <button className='RecoveryBtn1'> Continue</button>
    </Link>
    

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
