import React ,{useState,useContext}from 'react'
import { BsUpload } from "react-icons/bs";
import { AiFillWarning } from "react-icons/ai";
import {FileContainer,Upload,UploadSize,UploadContain,DangerStyle,Text}from './FileStyle.js'
 import { Context } from "../../../Context/Context.js"
const FileUplod = () => {
    const { selectedFile,file,setSelectedFile,setFile } = useContext(Context);
	const [isSelected ,	setIsSelected] = useState(false);

    const [parg, setParg] = useState();
	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
        if(file.value ==""){
            file.style.border="1px solid red";
        }
        
            }
        
            const Delete = (files) => {
                setSelectedFile("");
                setIsSelected(false);
                setParg(<p>Uploadfile</p>)
                selectedFile.size(null);
              };
            
  

  return (
    <FileContainer>    
    <input type="file" id="fileInput" name="file" onChange={changeHandler}   accept="image/*" />

    {isSelected ? (
        <UploadContain>
        <BsUpload style={{marginRight :"10px"}}/>
            <span>{selectedFile.name}</span>
         
            <UploadSize >{(selectedFile.size/ 1048576).toFixed(2)}Mb size</UploadSize>
       
             <div className='file-remove' onClick={Delete} >X</div> 
   <Text > {selectedFile.size > 2000000?<DangerStyle style={{textAlign:"left",marginLeft:"-400px",marginTop:"-40px"}}><AiFillWarning/>Your file is too big</DangerStyle>:<p>2 MP maximum</p>}</Text>
        </UploadContain>
 
    ) : (
        
        <label htmlFor ="fileInput"><BsUpload style={{marginRight :"20px"}}/> Upload a File</label>

    )}
   
</FileContainer>

  )
}

export default FileUplod;

               