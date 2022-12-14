import styled from 'styled-components';
export const HomeContainer = styled.div`
max-width: 550px;
min-height: 860px;
padding: 6% 0 0;
margin: auto; 
justify-content: flex-start;
flex-direction: column;


`;
export const HomeSection = styled.section`
background: #FFFFFF;
    border-radius: 10px;
box-shadow: 0px 3px 6px #00000029;
    margin-top: -31px;
    margin-bottom: 26px;
  
`;
export const VerfiHeading= styled.span`
text-align: center;
display: block;
font-size:30px;
padding-top: 20px;
`;
export const VerfiPargraf= styled.p`
text-align: center;
font-size:19px;
color: #151617;
margin-top: 10px;
`;

// 
// margin: 0 auto 100px;
// 
export const HedingVerif = styled.h4`
color: #151617;
font: 18px;
text-align: left;
margin-top: 5px;
`;
export const Box1 = styled.div`
background: #F3F4F6;
border: 1px solid #E2E2E2;
border-radius: 7px;
margin-bottom: 15px;
padding:5px;
margin-right: 60px;
margin-left:60px;
position: relative;
&:nth-of-type(2) {  
    margin-bottom:30px ;
   
  }
`;
export const SubHed= styled.p`
text-align:left;
font-size:14px;
color: #151617;
position: absolute;
margin-top:160px;
margin-left:45px;
padding:20px;
`;
export const spanVerif = styled.span`
color: #151617;
font: 8px;
text-align: left;

`;
export  const VeriRed = styled.span`
color:red;

`;
export  const VeriGreen = styled.span`
color:green;

`;
export const Wrapp = styled.div`
display: flex;
justify-content: space-between;


`;

export  const Verify = styled.div`
background: #4375FF;
border: 1px solid #E2E2E2;
border-radius: 7px;
color:#fff;
width:100px;
height:25px;
text-align: center;
margin-top: -30px;
margin-right: 10px;
cursor: pointer;
`;
export  const VerifyPending = styled.div`
background: #D4D4D4;
border: 1px solid #E2E2E2;
border-radius: 7px;
color:#fff;
width:100px;
height:25px;
text-align: center;
margin-top: -30px;
margin-right: 10px;
cursor: pointer;
`;
export  const VerifyTry = styled.div`
background: #FFFFFF;
border: 1px solid #E2E2E2;
border-radius: 7px;
color:#4375FF;
width:100px;
height:25px;
text-align: center;
margin-top: -30px;
margin-right: 10px;
cursor: pointer;
`;
