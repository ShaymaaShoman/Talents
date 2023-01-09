import styled from 'styled-components';
export const IDVerifContainer = styled.div`
max-width: 550px;
min-height: 850px;
padding: 6% 0 0;
margin: auto; 
justify-content: flex-start;
flex-direction: column;

`;
export const IDVerifSection = styled.section`
background: #FFFFFF;
    border-radius: 10px;
box-shadow: 0px 3px 6px #00000029;
    margin-top: -31px;
    margin-bottom: 20px;
    padding: 20px 0px ;

`;
export const VerfiHeading= styled.span`
text-align: center;
display: block;
font-size:1rem;
font: normal normal 600 30px Segoe UI;


`;
export const ImgID= styled.img`
align-items: center;
margin-left: 200px;
margin-top: 5px;
margin-left: 230px;


`;
export const VerfiPargraf= styled.p`
text-align: left;
margin-left: 60px;
font-size:15px;
color: #707070;
margin-top: 5px;
`;
export const VerfiParg= styled.p`
text-align: left;
font-size:15px;
color: #707070;
margin-top: 5px;
`;
export const LabelStyle = styled.label`
font-weight: Semibold;
font-size: 12px;
color:##707070; 
border: #707070; 
margin-bottom: 10px;
margin-top: 10px;
display: block;
text-align: left;
margin-left: 60px;
`;
export const InputStyle1 = styled.input`
font-family: 'Segoe UI';
  padding: .77rem;
  border-radius: 7px;
  border: 1px solid  #BEC2C6;
  margin-top: -5px;
  margin-bottom: 3px;
  width: 400px;
  height: 30px;
  display: block;
  margin-left: 60px;

`;
export const InputFile = styled.input`
font-family: 'Segoe UI';
  padding: .77rem;
  border-radius: 7px;
  border: 1px solid  #BEC2C6;
  margin-top: -5px;
  width: 400px;
  height: 30px;
  display: block;
  margin-left: 60px;

`;


export const BtnFile = styled.button`

text-align:center;
margin-left: 200px;

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

export const InputSelect = styled.select`
font-family: 'Segoe UI';
  padding: .57rem;
  border-radius: 7px;
  border: 1px solid  #BEC2C6;
  margin-top: -5px;
  margin-bottom: 1px;
  width: 425px;
  height: 50px;
  display: block;
  margin-left: 60px;
color:#BEC2C6;

`;
export  const BtnVerfi = styled.button`
display: block;
margin-left: 60px;
margin-right: auto;
color: #fff;
cursor: pointer;
text-transform: capitalize;
width: 430px;
height: 60px;
border:1px solid #A7BDFB;
border-radius: 7px;
font-size: 20px;
font-weight: bold;
margin-top: 30px;
margin-bottom:30px ;
`;
export  const Option = styled.option`
color:#BEC2C6;
`;
export const DangerStyle = styled.small`
color :red;
  font-size: 12px;

`;
export const Max = styled.span`
text-align: left; 
justify-content: left;
margin-top:10px;
font-size: 10px;
margin-left: 60px;
`;
export const FileError= styled.span`
display: inline-block;
vertical-align: top;
margin-left: 50px;
color: red;
`;
export const FileContainer = styled.div`
border: 1px solid #BEC2C6;
border-radius: 7px;
margin: auto; 
justify-content: flex-start;
flex-direction: column;
padding: .77rem;
width: 400px;
height: 30px;
text-align: center;
margin-top: 10px;
#fileInput{
    display: none;
  }
  #fileInput + label{
    /* background-color: blue;
    padding: 8px;
    color: #fff;
    cursor: pointer; */
  }
  #fileInput + label:hover{
    cursor: pointer;
    
  }
  span{
    font-size:13px ;
  }
  background: #E2E2E2;
`;
export const Upload = styled.span`
font-size: 30px;
`;
export const UploadSize = styled.p`
text-align: left; 
justify-content: left;
margin-top:2px;
font-size: 13px;
margin-left: 30px;
`;

 export const UploadContain = styled.span`
 margin-left: -300px;
background: #E2E2E2;
 

 `;
 export const FileBefore = styled.div`
border: 1px solid #BEC2C6;
border-radius: 7px;
margin: auto; 
justify-content: flex-start;
flex-direction: column;
padding: .77rem;
width: 400px;
height: 30px;
text-align: center;
margin-top: 10px;
#fileInput{
    display: none;
  }
  #fileInput + label{
    /* background-color: blue;
    padding: 8px;
    color: #fff;
    cursor: pointer; */
  }
  #fileInput + label:hover{
    cursor: pointer;
    
  }
  span{
    font-size:13px ;
  }
  background: #fff;
`;


export const Text = styled.small`
text-align: left;

`;