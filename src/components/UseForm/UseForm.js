import React,{useEffect, useState} from 'react'
import Validtion from './Validtion';

const UseForm = (Validtion) => {
    const [values,setValues]=useState({
        FirstName: '',
        LastName: '',
        email: '',
        password: '',
        ConfirmPassword: ''
})
const[ errors,setErrors]=useState({});
const[isSubmit,setISSubmit]=useState(false);

function submitForm(){
    setISSubmit(true);
  }
const handleChange =e=>{
    const {name,value}=e.target
  
    setValues({
        ...values,
       [name]:value
    })
   
}

// var x = document.getElementById("input");
// if (x.type === "password") {
//   x.type = "text";
// } else {
//   x.type = "password";
// }
// return x;
  

const handleSubmit = (event) => {
  if(event)  event.preventDefault();
    setErrors(Validtion(values));
    setISSubmit(true);
localStorage.setItem("Email",JSON.stringify(values.email));
localStorage.setItem("password",JSON.stringify(values.password))
    // const { email,password } = values;
//     const re = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/);
//     const isOk = re.test(email);
// const pas =new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,10}$/i)
// const isGood =pas.test(password);
//    alert (isOk+isGood);

//     if(!isOk&&isGood) {
//         alert('Successd');
//     }
//     return alert('pleaze full email && password are required');
   
  
//   }
}


  
return {handleChange,values,handleSubmit,errors};
}

export default UseForm;
