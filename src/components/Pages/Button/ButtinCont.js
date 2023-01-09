import React,{ useState } from 'react'
import styled from 'styled-components';
export  const BtnContinue = styled.button`
display: block;
margin-left: 60px;
cursor: pointer;
text-transform: capitalize;
width: 420px;
height: 60px;
border:1px solid #A7BDFB;
border-radius: 7px;
font-size: 20px;
font-weight: bold;
margin-top: 30px;
margin-bottom:30px ;
color:#fff;
`;
const ButtinCont = ({title}) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
      // 👇️ toggle
      setIsActive((current) => !current);
  
      // 👇️ or set to true
      // setIsActive(true);
    };
  return (
    <>
     <BtnContinue type="submit" style={{
        backgroundColor: isActive ? "#4375FF" : "",
        color: isActive ? "#fff" : "",
      }}
      onClick={handleClick}>{title}</BtnContinue>
    </>
  )
}

export default ButtinCont;
