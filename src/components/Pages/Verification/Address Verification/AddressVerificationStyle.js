import styled from 'styled-components';
export const AddresVerifContainer = styled.div`
max-width: 530px;
min-height: 840px;
padding: 6% 0 0;
margin: auto; 
justify-content: flex-start;
flex-direction: column;

`;
export const AddresVerifSection = styled.section`
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
font: normal normal 600 25px Segoe UI;
padding-top: 10px;

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
export const AddressPargraf= styled.p`
text-align: left;
margin-left: 50px;
font-size:16px;
color: #707070;
margin-top: -1px;
`;
export const AddressiParg= styled.p`
text-align: left;
font-size:16px;
color: #707070;
margin-top: -10px;
margin-left: 50px;
`;
export const ImgID= styled.img`
align-items: center;
margin-top: -5px;
margin-left: 230px;
padding-bottom: -15px;

`;
export const LabelStyle = styled.label`
font-weight: Semibold;
font-size: 12px;
color:#707070; 
border: #707070; 
margin-bottom: 15px;
margin-top: -5px;
display: block;
text-align: left;
margin-left: 60px;
`;
export const InputSelect = styled.select`
font-family: 'Segoe UI';
  padding: .57rem;
  border-radius: 7px;
  border: 1px solid  #BEC2C6;
  margin-top: -5px;
  margin-bottom: -10px;
  width: 425px;
  height: 50px;
  display: block;
  margin-left: 60px;
color:#BEC2C6;

`;
export  const Option = styled.option`
color:#BEC2C6;
`;
export const DangerStyle = styled.small`
color :red;
  font-size: 12px;

`;
export const FileError= styled.span`
display: inline-block;
vertical-align: top;
margin-left: 50px;
color: red;
`;

export const FileBefore = styled.div`

border: 1px solid #BEC2C6;
border-radius: 7px;
margin: auto; 
margin-left: 60px;
justify-content: flex-start;
flex-direction: column;
padding: .77rem;
width: 395px;
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
 export const FileRemove = styled.div`
 position: absolute;
 cursor: pointer;
 color: #000;
 margin-top:-50px;
 margin-left:380px;
`;
//  
//  top:230px;
//  right: 90px;
// line-height: 15px;
// 
// 
// margin-right: -10px;
//  cursor: pointer;
export const Text = styled.small`
text-align: left;

`;
export const FulName = styled.div`
display: flex;
width: 100%;
margin-top: 10px;
margin-bottom: -1px;
margin-left: 10px;
`;
export const LabelAddres = styled.label`
margin-top: 5px;
   font-size: 14px; 
   color: #707070;
  display:block;
  margin-left: 50px;
  margin-bottom: -15px;
`;
export const ColHalf = styled.div`
justify-content: space-between;

`;
export const InputText  = styled.input`
text-align: left;
padding: 15px 19px;
font-size: 12px;
border-radius: 5px;
border: 1px solid  rgb(175, 172, 172);
position: relative;
justify-content: space-between;
margin-top: 20px;
margin-left: 50px;
.Address2{
    margin-left: -30px; 
    padding-left:-50px;
}

  
`;
export const Select = styled.select `
height: 45px;
color: #707070;
width: 185px ;
border-radius: 5px;
border: 1px solid  rgb(175, 172, 172);
margin-left: 50px;
`;

export const LablCountry = styled.label`
margin-top: 7px;
margin-bottom: 2px;
font-size: 14px;
color:#707070; 
border: #707070;
padding-right: 30px;
display:block;
margin-left: 50px;
`;
export const FulNameAdress = styled.div`
display: flex;
width: 100%;
margin-top: -3px;
margin-bottom: 15px;
margin-left: 10px;
`;
export const Space = styled.div`

margin-bottom: 20px;
`;

