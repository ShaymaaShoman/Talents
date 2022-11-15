
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
background-color: #A7BDFB;
cursor: pointer;
color: #fff;
text-transform: capitalize;
border-radius: 7px;
border:1px solid #A7BDFB;
opacity: 1;
height: 50px;
width: 435px;
margin-left: 60px;
margin-top: 10px;
margin-bottom:40px ;
font-size: 20px;
`;
export const ButtonTest = ({children}) => {
  return<Button type="submit">{children}</Button>;
};
export default ButtonTest;
// text-align: center;
// 
// 
//   
// 
// 
// font-weight: bold;
// 
// 
// 
// 
// 
// 
// 
// 