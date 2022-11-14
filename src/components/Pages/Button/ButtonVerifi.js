import React from 'react'
import styled from 'styled-components';

const Btn = styled.button`
background-color:  #4375FF ;
color: #fff;
cursor: pointer;
text-transform: capitalize;
width: 425px;
height: 50px;
border:1px solid #A7BDFB;
border-radius: 7px;
font-size: 20px;
font-weight: bold;

`;
const ButtonVerifi = ({children}) => {
  return <Btn type="submit">{children}</Btn>;
}

export default ButtonVerifi;
// text-align: center;
// 
// 
//   
// margin-top: 40px;
// 
// 
// 
// 
// 
// 
// 
// opacity: 1;
// margin-bottom:10px ;
//
// margin-top: 30px;