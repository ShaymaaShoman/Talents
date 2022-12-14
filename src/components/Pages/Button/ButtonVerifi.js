import React from 'react'
import styled from 'styled-components';

const Btn = styled.button`
display: block;
margin-left: -5px;
margin-right: auto;
background-color:  #4375FF ;
color: #fff;
cursor: pointer;
text-transform: capitalize;
width: 430px;
height: 60px;
border:1px solid #A7BDFB;
border-radius: 7px;
font-size: 20px;
font-weight: bold;
margin-top: 40px;
margin-bottom:10px ;
`;
const ButtonVerifi = ({children}) => {

  return <Btn type="submit">{children}</Btn>;
}

export default ButtonVerifi;
// 
// 
// 
//   
// 
// 
// 
// 
// 
// 

// 
// opacity: 1;
// 
//
// margin-top: 30px;