import styled from 'styled-components';


export const SignContainer = styled.div`
max-width: 703px;
min-height: 940px;
padding: 5% 0 0;
margin: auto; 
justify-content: flex-start;
flex-direction: column;


`;

export const Sign = styled.section`
background: #FFFFFF;
    border-radius: 10px;
    max-width: 340px;
    margin: 0 auto 100px;
    padding: 2px 40px;
    box-shadow: 0px 3px 6px #00000029;
    margin-bottom: 26px;
    line-height: 10px;
    margin-top: -31px;
`;
export const Heading = styled.h4`
margin-top: 30px;
font-size: 18px;
text-transform: capitalize;
width: 258px;
height:25 ;
font: normal normal 600 19px/25px Segoe UI;
`;
export const FormStyle = styled.form`
display: flex;
flex-direction: column;
justify-content: space-evenly;
flex-grow: 1;
padding-bottom: 1rem;
margin-top: -20px;
position: relative;
`;

export const LabelStyle = styled.label`
font-weight: Semibold;
font-size: 12px;
color:#707070; 
border: #707070; 
margin-bottom: 10px;
margin-top: -2px;
`;
export const FulName = styled.div`
display: flex;
width: 100%;
margin-top: 5px;
`;
export const Label = styled.label`
margin-top: 10px;
   font-size: 12px; 
   color: #707070;
   margin-left: -20px;
`;
export const ColHalf = styled.div`
justify-content: space-between;
padding: 19px;
`;
 export const InputField = styled.div`
 height: 50px;
 
 `;

 export const InputText  = styled.input`
 text-align: left;
 padding: 10px 6px;
 font-size: 12px;
 border-radius: 5px;
 border: 1px solid  rgb(175, 172, 172);
 position: relative;
 justify-content: space-between;
 margin-top: 6px;
 margin-left: -20px;
 
   
`;

 export const PhoneInput  = styled.input`
//  width: 340px;
// height: 30px;
margin-bottom: 15px;
 `;

export const LabelStylePhone   = styled.label`
margin-top: -1px;
   font-size: 12px; 
   color: #707070;
   margin-left: -1px;
   margin-bottom: 10px;
`;
export const Invalid  = styled.input`
   border:1px solid red !important;
`;

export const InputFirst= styled.input`

font-size: 12px;
border-radius: 5px;
border: 1px solid  rgb(175, 172, 172);

margin-top: 5px;
`;
// export const LastName= styled.label`
// margin-left: 30px;
// `;
// export const FirstName= styled.input`
// width: 50%;
// `;
export const InputStyle = styled.input`
font-family: 'Segoe UI';
  padding: .56rem;
  border-radius: 5px;
  border: 1px solid  rgb(175, 172, 172);
  margin-top: -5px;
  margin-bottom: 20px;
  width: 320px;
`;

export const ButtonStyle = styled.button `
background-color:#4375FF;
cursor: pointer;
font-weight: bold;
width: 340px;
height: 40px;
margin-top: 2rem;
border-radius: 5px;
border: 1px solid #4375FF;
`;
export const ButtonPargStyle = styled.p`
color: #fff;
margin-top: 10px;
font-size: 16px;
`;

export const AlreadyAcouuntSpan= styled.span`
text-align: center;
margin-top: 10px;
font-size: 12px;
text-decoration: none;
margin-bottom: 20px;

`;

export const ALinks= styled.a`
text-decoration: none;
color: #4375FF;
cursor: pointer;
`;
export const Select = styled.select `
height: 40px;
color: #707070;
width: 340px ;
border-radius: 5px;
border: 1px solid  rgb(175, 172, 172);
`;

export const LablCountry = styled.label`
margin-top: 15px;
margin-bottom: 7px;
font-size: 12px;
color:#707070; 
border: #707070;
padding-right: 30px;
`;

export const DangerStyle = styled.small`
color :red;
  font-size: 12px;

`;
export const Icon= styled.p`

font-size: 18px;
position: absolute;
color:#000000;
padding-left: 310px;
margin-top: -90px;
`;
export const CorrectStyle = styled.small`
color :green;
  font-size: 12px;

`;



