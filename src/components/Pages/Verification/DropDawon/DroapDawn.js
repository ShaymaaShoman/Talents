import React from 'react'
import {InputSelect,LabelStyle} from "./DropDawanStyle.js"
const DroapDawn = ({ setCountry,data,value,country,label,...rest }, ref) => {
  return (
    <>
    <LabelStyle>{label}</LabelStyle>
    <InputSelect  value={value} {...rest}>
      {data.map((data,i) => (
        <option key={i} value={data.name}>
          {data.name}
        </option>
      ))}
    </InputSelect>
  </>
  )
}

export default DroapDawn;
