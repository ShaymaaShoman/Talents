import React from 'react'
const err =document.getElementById("error")
const Validtion = (values) => {
    let errors={}
    let correct={}
 if(!values.FirstName.trim()){
    errors.name="UserName is requried ";
 }
 if(!values.LastName.trim()){
    errors.name="UserName is requried ";
 }
 if(errors.length>0){
   values.preventDefault();
   err.innerHTML=errors.join(',');
 }
 //Email

 if(!values.email){
    errors.email =" Inncorrect Email ";
 }else if(!/^[A-z][A-z0-9-_]{3,23}$/i.test(values.email)){
   correct.email ="correct  email ";
 }
 
 if(!values.password){
    errors.password="Inncorrect password ";
 }else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,10}$/i.test(values.password)){
   correct.password ="correct  password";
 }else if(values.password.length<=8){
   errors.password ="password shoud be more than 8";
 }

      // if( !/^(?=.*[a-z])/.test(values.password))
      //          return errors.password = "password must include lowercase letter" ;
      //     if(!/^(?=.*[A-Z])/.test(values.password)) 
      //       return errors.password  = "password must include uppercase letter" ;
      //     if(!/^(?=.*[0-9])/.test(values.password)) 
      //       return errors.password ="password must include digit";
      //    if(!/^(?=.*[!@#\$%\^&\*])/.test(values.password))
      //       return errors.password = "password must include special character" ;
              
       


   
//  }else if (values.isStrongPassword(values, {
//     minLength: 8, minLowercase: 1,
//     minUppercase: 1, minNumbers: 1, minSymbols: 1
//   })) {
//       setErrors('Is Strong Password');
//   } else {
//       setErrors('Is Not Strong Password');
//   }

if(!values.ConfirmPassword){
    errors.ConfirmPassword ="Incorrect  password";
}else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,10}$/i.test(values.ConfirmPassword)){
    errors.ConfirmPassword ="password field requerid";
}else if(values.email&&values.password!==0){
console.log("Succsssed");
}


 
return errors;

}
  

  

export default Validtion;
