import React, { useState } from "react";

// // validation function
// export const validatePassword = (value) => {
//     if ( !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(value)) {
//       return 'Your password is  weak'+"#FF0054";
//     } else if (
//         /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(value)
//     ) {
//       return 'Nice Work. This is excellent password '+"#8BC926";
//     }
//     return true;
//   };


const PasswordForm = () => {
    const [password,setPassword]=useState('');
const [hidePassword, setHidePassword] = useState(true);
  const [message, setMessage] = useState("");
  const handlePassword = (passwordValue) => {
    const strengthChecks = {
      length: 0,
      hasUpperCase: false,
      hasLowerCase: false,
      hasDigit: false,
      hasSpecialChar: false,
    };

    strengthChecks.length = passwordValue.length >= 10 ? true : false;
    strengthChecks.hasUpperCase = /[A-Z]+/.test(passwordValue);
    strengthChecks.hasLowerCase = /[a-z]+/.test(passwordValue);
    strengthChecks.hasDigit = /[0-9]+/.test(passwordValue);
    strengthChecks.hasSpecialChar = /[^A-Za-z0-9]+/.test(passwordValue);

    let verifiedList = Object.values(strengthChecks).filter((value) => value);

    let strength =
      verifiedList.length == 5
        ? "Strong"
        : verifiedList.length >= 2
        ? "Weak"
        : "Weak";

    setPassword(passwordValue);
    setMessage(strength);

    console.log("verifiedList: ", `${(verifiedList.length / 5) * 100}%`);
  };

  const getActiveColor = (type) => {
    if (type === "Strong") return "#8BC926";
   
    return "#FF0054";
  };
  return { getActiveColor,hidePassword, handlePassword,message ,setHidePassword,setMessage};
}

export default PasswordForm;
