import styled from 'styled-components';
export const LoginContainer = styled.div`
max-width: 703px;
min-height: 821px;
padding: 7% 0 0;
margin: auto; 
justify-content: flex-start;
flex-direction: column;


`;
export const LoginSection = styled.section`
background: #FFFFFF;
    border-radius: 10px;
    max-width: 360px;
    margin: 0 auto 100px;
    padding: 5px 40px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    margin-top: -31px;
    margin-bottom: 26px;

`;
export const Heading = styled.h4`
margin-top: 30px;
font-size: 14px;
font-weight: Semibold;
font-family:  "Segoe UI";
text-transform: capitalize;

`;
export const FormStyle = styled.form`
display: flex;
flex-direction: column;
justify-content: space-evenly;
flex-grow: 1;
padding-bottom: 1rem;
margin-top: -10px;
position: relative;
`;
export const InputStyle1 = styled.input`
font-family: 'Segoe UI';
  padding: .77rem;
  border-radius: 5px;
  border: 1px solid  rgb(175, 172, 172);
  margin-top: -5px;
  margin-bottom: 15px;
  width: 330px;
  
`;
export const InputEmailStyle = styled.input`
    margin-bottom: 5px;
font-family: 'Segoe UI';
  padding: .57rem;
  border-radius: 5px;
  border: 1px solid  rgb(175, 172, 172);
  margin-top: -5px;
  
`;
export const LabelStyle = styled.label`
font-weight: Semibold;
font-size: 12px;
color:#707070; 
border: #707070; 
margin-bottom: 15px;
margin-top: 15px;
`;
export const ButtonStyle = styled.button `
background-color:#4375FF;
cursor: pointer;
font-weight: bold;
width: 360px;
height: 40px;
margin-top: 1rem;
border-radius: 5px;
border: 1px solid #4375FF;
`;
export const ButtonPargStyle = styled.p`
color: #fff;
margin-top: 10px;
font-size: 16px;
`;
export const DangerStyle = styled.small`
color :red;
  font-size: 12px;

`;
export const ForgetStyle = styled.small`
color :red;
  font-size: 12px;

`;
export const DAcount = styled.p`
text-align: center;
margin-top: 2rem;
color:  #666;
font-size: 12px;
margin-bottom:40px ;


`;
export const ALinks= styled.a`
text-decoration: none;

color: #4375FF;
`;
export const Span= styled.span`
color: red;

`;

export const ForgetPassword= styled.p`
 text-align: right;
    cursor: pointer;
     color:  #666;
    font-size: 12px;
    border-radius: 5px;
    margin-top: -10px;

 
`;

export const Invalid= styled.input`
border: 1px solid #F50000;
  font-size: 12px;


`;
export const Icon= styled.p`

  font-size: 18px;
  position: absolute;
  color:#00000029; 
  padding-left: 320px;
  margin-top: -10px;
`;


// export const Style={
//   border: 1px solid #F50000;
//   font-size: 12px;
//  }

export const Select= styled.p`

  font-size: 12px;
  
`;