import React,{useState} from 'react'
import Footer from '../../../Footer/Footer';
import NavBar from '../../../NavBar/NavBar';
import API from '../../../../API/API';
import { AiFillWarning } from "react-icons/ai";
import { BsUpload } from "react-icons/bs";
import {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input/input";
import '../IDVerifi/File.css';
import {Context } from "../../../../Context/Context.js"
import {  useNavigate  } from 'react-router-dom';
import InputField from '../../../Input/InputField';
import en from "react-phone-number-input/locale/en.json";
import address from '../../../../assest/address.png'
import {AddresVerifContainer,Text,UploadContain,UploadSize,FileBefore,FileRemove,LabelStyle,InputSelect,BeforUploadContiner,FileContainer,AddresVerifSection,Option,FormStyle,DangerStyle,VerfiHeading,BtnVerf,AddressPargraf,AddressiParg,Space,Select,FulNameAdress,LablCountry,InputText,ColHalf,ImgID,LabelAddres,FulName
}from './AddressVerificationStyle.js';
import { useForm } from "react-hook-form";
import ButtinCont from '../../Button/ButtinCont';
import * as yup from "yup";
const AddressVerification = () => {
  const navigate = useNavigate();
  const schema = yup.object({
    file:yup.mixed().required("Your need a file ").test("fileSize","Your file is too big",(value)=>{
      console.log(value);
      return value&&value[0].size>=2000000
    }).test("type","Your file is too big",(value)=>{
      console.log(value);
      return value&&value[0].type=== "image/jpeg";
    })
  });
  const[select,setSelect]=useState("");
  const {
		register,
		handleSubmit,
		formState: { errors },
		watch,reset
	  } = useForm({validationSchema:schema});
  const [loading, setLoading] = useState(false);
const[country,setCountry]=useState("");
 
           
  
  
    if(loading) return <p>Loading...</p>

        const onsubmit =(data)=>{
          setLoading(true);
        console.log(data);
        const formData = new FormData();
        formData.append("file", data.file[0]);
        formData.append("address1", data.address1);
        formData.append("address2", data.address2);
        formData.append("city",data.city);
        formData.append("addressDocumentType",data.addressDocumentType);
        formData.append("country",data.country);
        setLoading(true);
        API.post(`user/verify/address`,formData,{
      headers: {
      Accept: "application/json",
      Authorization:`Bearer ${localStorage.getItem("accessToken")}`,
      },
       })
       .then((acualData)=>{
         setLoading(false);
         navigate("/Verification");
         console.log(acualData)
       }).catch((error) => {
           console.log(error);
           setLoading(false);  
         })
        }
     
  return (
    <>
    <NavBar/>
   <AddresVerifContainer>
   <AddresVerifSection>
   <VerfiHeading>Address Verification</VerfiHeading>
   <ImgID src={address} alt="address"/>
   <AddressPargraf>Upload Document That Proof Your Address Such As:</AddressPargraf>
   <AddressiParg>Bill(Phone, Electricity, Water, Bank Statement)</AddressiParg>
   <FormStyle onSubmit={handleSubmit(onsubmit)} >
   <> 
 <LabelStyle>Document Type</LabelStyle>
   <InputSelect className='form-select' name ="addressDocumentType"  {...register("addressDocumentType",{required:"this is requirde"})} >
   <option id="businesstype" hidden value>Choose your document type</option>
   <option value="bank_statement">bank_statement</option>
   <option value="water_bill">water_bill</option>
   <option value="phone_bill">phone_bill</option>
   <option value="electricity_bill">electricity_bill</option>
   <option value="other">other</option>
  </InputSelect>
   </>
   <FulName>
   <ColHalf>
     <LabelAddres>Address 1</LabelAddres>
     <InputText 
     type="text"
     name="address1"
     placeholder="Neighborhood"
     {...register("address1",{required:"this is requirde"})}
     className={`form-control ${errors.address1 ? "invalid" : ""}`}
      /><br/>
      {errors.address1?.type === "required" && <DangerStyle><AiFillWarning/>Address1 required</DangerStyle>}
   </ColHalf>

   <ColHalf>
     <LabelAddres>Address 2</LabelAddres>
     <InputText 
     type="text"
     name="address2"
     placeholder="Street"
     {...register("address2",{required:"this is requirde"})}
     className={`form-control ${errors.address2 ? "invalid" : ""}`}
      /><br/>
      {errors.address2?.type === "required" && <DangerStyle><AiFillWarning/>address2 required</DangerStyle>}
   </ColHalf>
   </FulName>
  
   <FulNameAdress>
<ColHalf>
  <LabelAddres>City</LabelAddres>
  <InputText
  type="text"
  name="city"
  {...register("city",{required:"this is requirde"})}
  className={`form-control ${errors.city ? "invalid" : ""}`}
   /><br/>
   {errors.city?.type === "required" && <DangerStyle><AiFillWarning/>city required</DangerStyle>}
</ColHalf>

<ColHalf>
<LablCountry> Country</LablCountry>
              <Select 
              value={country}
              name="country"
              {...register("country", {
                required: "country is required",
              })}
              onChange={(event) =>
                setCountry(event.target.value || undefined)
              }
              placeholder=""
              >
                <option value="">{en[""]}</option>
                {getCountries().map((country) => (
                  <option key={country} value={en[country]}>
                    {en[country]} +{getCountryCallingCode(country)}
                  </option>
                ))}
              </Select>
</ColHalf>
</FulNameAdress>

{!watch("file") || watch("file").length === 0 ? (
<FileBefore>
<>
<BsUpload style={{marginRight :"10px"}}/>
<input
id="fileInput"
style={{ display: "none" }}
{...register("file")}
type="file"
accept="image/*"
className={`form-control ${errors.file ? "invalid" : ""}`}
/>
<label htmlFor="fileInput" style={{ cursor: "pointer" }}>
Upload a File
</label>
</>
</FileBefore>
) : (
  <FileContainer> 
<UploadContain  >
<BsUpload style={{marginRight :"10px"}}/>
<span>{watch("file")[0].name}</span>
<UploadSize>{(watch("file")[0].size/1048576).toFixed(2)}Mb size</UploadSize>
<FileRemove onClick={()=>reset("")} >X</FileRemove> 
<Text > {errors.file? <p>{errors.file.message}</p>:<p>2 MP maximum</p>}</Text>
</UploadContain>
</FileContainer>
)}

{errors.file?.type === "required" && <DangerStyle><AiFillWarning/>files is required </DangerStyle>}

<ButtinCont type="submit" title="Continue"/>
  



   </FormStyle>
   </AddresVerifSection>
   </AddresVerifContainer>
   <Footer/>
    </>
  )
}

export default AddressVerification;
