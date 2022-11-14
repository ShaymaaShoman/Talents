import styled from 'styled-components';
export const EmailContainer = styled.div`
max-width: 550px;
min-height: 830px;
padding: 6% 0 0;
margin: auto; 
justify-content: flex-start;
flex-direction: column;


`;
export const EmailSection = styled.section`
background: #FFFFFF;
    border-radius: 10px;
box-shadow: 0px 3px 6px #00000029;
    margin-top: -31px;
    margin-bottom: 20px;
    padding: 1px 0px ;
`;
export const VerfiHeading= styled.span`
text-align: center;
display: block;
font-size:1rem;
font: normal normal 600 30px Segoe UI;
padding-top: 31px;
`;
export const VerfiImg= styled.img`
align-items: center;
margin-left: 200px;
margin-top: 10px;
margin-left: 230px;
padding-bottom: 1rem;
`;
export const VerfiPargraf= styled.p`
text-align: center;
font-size:18px;
color: #151617;
margin-top: 0px;
`;
export const VerfiParg= styled.p`
text-align: left;
font-size:15px;
color: #151617;
margin-left: 80px;
`;
export const Otp= styled.input`
  box-shadow: 0px 2px 2px #00000029;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  width: 50px;
  height: 50px;
  font-size: 20px;
  margin:3px;
  margin-top:40px;
  
  &:nth-of-type(3) {  
    margin-right:50px;
    width:50px
   
  }
`;
export const ContainerBox= styled.div`
display: flex;
  width: 100%;
  padding-bottom: 4.5rem;
   
  }
`;



export const FormStyle = styled.form`
display: flex;
flex-direction: column;
justify-content: space-evenly;
flex-grow: 1;
padding-bottom: 1rem;
margin-top: -10px;
position: relative;
text-align: center;
margin-left:70px;


`;


export const Resed1 = styled.p`
text-align: center;
font-size: 14px;
margin-top: 15px;
margin-bottom: 40px;
margin-left:-30px;
`;
export const ResendLink1 = styled.a`
text-decoration: none;
color: #4375FF;
margin-bottom: 40px;
`;
