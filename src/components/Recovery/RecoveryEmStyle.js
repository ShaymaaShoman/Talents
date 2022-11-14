import styled from 'styled-components';

export const RecoveryContainer = styled.div`
max-width: 703px;
min-height: 861px;
padding: 7% 0 0;
margin: auto; 
justify-content: flex-start;
flex-direction: column;
margin-top: -60px;
`;
export const Recoveryed = styled.section `
background: #FFFFFF;
border-radius: 10px;
max-width: 340px;
margin: 0 auto 100px;
padding: 50px 60px;
box-shadow: 0px 3px 6px #00000029;
`;
export const Heading = styled.h4`
margin-top: 30px;
font-size: 14px;
font-weight: Semibold;
font-family:  "Segoe UI";
text-transform: capitalize;

`;
export const BackStyle = styled.p`
position: absolute; 
    top: 130px;
    left: 500px;
    font-size: 18px;
    cursor: pointer;
`;

export const ForgetEmail= styled.div`
margin-top: 30px;
`;
export const ForgetPargraf= styled.p`
font-size: 12px;
color: #707070;
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
export const LabelStyle = styled.label`
font-weight: Semibold;
font-size: 12px;
color:#707070; 
border: #707070; 
margin-bottom: 5px;
margin-top: 30px;
`;
export const InputEmailStyle = styled.input`
    margin-bottom: 5px;
font-family: 'Segoe UI';
  padding: .57rem;
  border-radius: 5px;
  border: 1px solid  rgb(175, 172, 172);
  margin-top: 5px;
  
`;
export const ButtonStyle = styled.button `
background-color:#4375FF;
cursor: pointer;
font-weight: bold;
width: 355px;
height: 40px;
margin-top: 50px;
border-radius: 5px;
border: 1px solid #4375FF;
margin-bottom: 60px;
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