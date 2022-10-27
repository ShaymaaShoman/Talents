import styled from 'styled-components';


export const SignContainer = styled.div`
max-width: 703px;
min-height: 821px;
padding: 7% 0 0;
margin: auto; 
justify-content: flex-start;
flex-direction: column;


`;
export const Sign = styled.section`
background: #FFFFFF;
    border-radius: 10px;
    max-width: 340px;
    margin: 0 auto 100px;
    padding: 5px 40px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    margin-top: -61px;
    margin-bottom: 26px;
    line-height: 10px;
`;
export const Heading = styled.h4`
margin-top: 20px;
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
padding: 20px;
`;
 export const InputField = styled.div`
 height: 50px;
 
 `;

 export const InputText  = styled.input`
 text-align: left;
 padding: 10px 8px;
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
margin-bottom: 10px;
 `;

export const LabelStylePhone   = styled.label`
margin-top: 3px;
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
  padding: .57rem;
  border-radius: 5px;
  border: 1px solid  rgb(175, 172, 172);
  margin-top: -5px;
  margin-bottom: 20px;
  width: 330px;
`;

export const ButtonStyle = styled.button `
background-color:#4375FF;
cursor: pointer;
font-weight: bold;
width: 350px;
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
export const AlreadyAcouunt = styled.p`
text-align: center;
margin-top: 12px;
font-size: 12px;
text-decoration: none;
margin-bottom: 0px;

`;
export const AlreadyAcouuntSpan= styled.span`
text-align: center;
margin-top: 30px;
font-size: 12px;
text-decoration: none;
margin-bottom: 5px;

`;
export const SignLink= styled.span`
color:#4375ff;
    cursor: pointer;
    text-decoration: none;

`;
export const Select = styled.select `
height: 40px;
color: #707070;
width: 350px ;
border-radius: 5px;
border: 1px solid  rgb(175, 172, 172);
`;

export const LablCountry = styled.label`
margin-top: 15px;
margin-bottom: 10px;
font-size: 12px;
color:#707070; 
border: #707070;
`;
export const FormControl   = styled.input`
width: 340px !important; 
height: 40px !important;
   
`;
export const DangerStyle = styled.small`
color :red;
  font-size: 12px;

`;
export const Icon= styled.p`

font-size: 18px;
position: absolute;
color:#00000029; 
padding-left: 310px;
margin-top: -75px;
`;
export const CorrectStyle = styled.small`
color :green;
  font-size: 12px;

`;



