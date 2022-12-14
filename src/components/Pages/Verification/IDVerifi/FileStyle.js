import styled from 'styled-components';
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
margin-left: 80px;
`;

 export const UploadContain = styled.span`
 margin-left: -300px;
background: #E2E2E2;
 

 `;
//  ;export const fileRemove = styled.div`
// position: absolute;
// top:200px;
// right: 90px;
// line-height: 15px;
// cursor: pointer;
// color: #000;
// margin-right: -10px;
// cursor: pointer; 
// `;
export const DangerStyle = styled.small`
color :red;
  font-size: 12px;

`;
export const Text = styled.small`
text-align: left;

`;