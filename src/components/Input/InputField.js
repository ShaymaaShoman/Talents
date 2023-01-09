import React from "react";
import { AiFillWarning } from "react-icons/ai";
import { InputStyle, DangerStyle,LabelStyle } from "./InputStyle.js";

const InputField = React.forwardRef(
  ({ placeholder, type,label, value, name,error, change, ...rest }, ref) => {
    return (
      <>
      <LabelStyle>
{label}
        <InputStyle
          type={type}
          value={value}
          name={name}
          placeholder={placeholder}
          ref={ref}
          {...rest}
        />
        </LabelStyle>
        {error&&<DangerStyle><AiFillWarning/>{error.message}</DangerStyle>}

      </>
    );
  }
);
   


export default InputField;
