import React,{useState} from 'react'
import Footer from '../../../Footer/Footer';
import NavBar from '../../../NavBar/NavBar';
import IDImg from '../../../../assest/ID.png'
import {IDVerifContainer,IDVerifSection,VerfiHeading,ImgID,VerfiPargraf,VerfiParg,LabelStyle,BtnFile ,InputFile,InputStyle1,InputSelect } from './IDVerifStyle.js'
 import ButtonVerifi from '../../Button/ButtonVerifi';
import FileUpload from './FileUpload';
const IDVerif = () => {
    const [selectedFile, setSelectedFile] = useState();
	const [isSelected , setIsSelected] = useState(false);
	const [newUserInfo, setNewUserInfo] = useState({
		profileImages: []
	  });
    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	};
	
	const updateUploadedFiles = (files) =>
    setNewUserInfo({ ...newUserInfo, profileImages: files });
    const handleSubmission = () => {
		const formData = new FormData();

		formData.append('File', selectedFile);

		fetch(
			'https://freeimage.host/api/1/upload?key=<YOUR_API_KEY>',
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};
	

  return (
    <>
     <NavBar/>
     <IDVerifContainer>
     <IDVerifSection>
     <VerfiHeading > ID Verification</VerfiHeading>
     <ImgID src={IDImg} alt="IDImg"/>
     <VerfiPargraf>Upload Document That Proof Your Identity Such As: <br/>
     <VerfiParg>Identity  Card, Passport, Driver License</VerfiParg></VerfiPargraf>
     <LabelStyle> Document Type </LabelStyle>
     <InputSelect >
     <option value="N/A"></option>
    <option value="N/A">Identity Card</option>
    <option value="1">Passport</option>
    <option value="2">Driver License</option>
</InputSelect>
<LabelStyle> ID Number </LabelStyle>
<InputStyle1 type="number"/>
<FileUpload accept=".jpg,.png,.jpeg"
multiple updateFilesCb={updateUploadedFiles}/>
<ButtonVerifi title="Continue" style={{marginTop:"40px"}} onClick={handleSubmission}>Continue</ButtonVerifi>
     </IDVerifSection>
     </IDVerifContainer>
     <Footer/>
    </>
  )
}

export default IDVerif;
// <BtnFile>
// Upload a File
// </BtnFile>
// <InputFile type="file" name="file" onChange={changeHandler} style={{ display:"none"}} />
// {isSelected ? (
// 				<div>
// 					<p>Filename: {selectedFile.name}</p>
// 					<p>Filetype: {selectedFile.type}</p>
// 					<p>Size in bytes: {selectedFile.size}</p>
// 					<p>
// 						lastModifiedDate:{' '}
// 						{selectedFile.lastModifiedDate.toLocaleDateString()}
// 					</p>
// 				</div>
// 			) : (
// 				<p></p>
// 			)}