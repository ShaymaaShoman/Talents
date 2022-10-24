import React,{useEffect, useState} from 'react'
import Validtion from './Validtion';

const UseForm = (Validtion) => {
    const [values,setValues]=useState({
      
        password: '',
        passwordLength:false,
        ConfirmPassword: false,
        continuesNumber:false,
        continuesSymbole:false,
        
})



const handleChange =e=>{
 
    const {name,value}=e.target
  
    setValues({
        ...values,
       [name]:value
    })
  console.log(values);
}

// var x = document.getElementById("input");
// if (x.type === "password") {
//   x.type = "text";
// } else {
//   x.type = "password";
// }
// return x;
  

const handleSubmit = (event) => {
  event.preventDefault();
  
 
    localStorage.setItem("Email",JSON.stringify(values.email));
    localStorage.setItem("password",JSON.stringify(values.password))
    // if (Validtion.password(values, {
    //   minLength: 8, minLowercase: 1,
    //   minUppercase: 1, minNumbers: 1, minSymbols: 1
    // })) {
    //     setErrors('Is Strong Password');
    // } else {
    //     setErrors('weak Password');
    // }
}

// var result={};
//     if( !/^(?=.*[a-z])/.test(values.password)){
//       return result.password = "password must include lowercase letter" ;
//      }else if(!/^(?=.*[A-Z])/.test(values.password)) {
//      return result.password  = "password must include uppercase letter" ;
//   }else if(!/^(?=.*[0-9])/.test(values.password)) {
//      return result.password ="password must include digit";
//   }else if(!/^(?=.*[!@#\$%\^&\*])/.test(values.password)){
//      return result.password = "password must include special character" ;
//   }


return {handleChange,values,handleSubmit};
}

export default UseForm;
