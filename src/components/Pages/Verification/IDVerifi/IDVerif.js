import { AiFillWarning } from "react-icons/ai";
import "./File.css";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../../../Context/Context.js";
import { BsUpload } from "react-icons/bs";
import React, { useState, useContext, useEffect } from "react";
import Footer from "../../../Footer/Footer";
import NavBar from "../../../NavBar/NavBar";
import IDImg from "../../../../assest/ID.png";
import InputField from "../../../Input/InputField.js";
import * as Yup from "yup";
import API from "../../../../API/API";
import { useForm } from "react-hook-form";
import {
  IDVerifContainer,
  IDVerifSection,
  UploadSize,
  Text,
  DangerStyle,
  FileBefore,
  UploadContain,
  FileContainer,
  VerfiHeading,
  ImgID,
  VerfiPargraf,
  FormStyle,
  VerfiParg,
  BtnVerfi,
  LabelStyle,
  InputSelect
} from "./IDVerifStyle.js";
import { yupResolver } from "@hookform/resolvers/yup";
import useAxiosFetch from "../../../../hook/useAxiosFetch";
const schema = Yup.object({
  file: Yup.mixed()
    .required("You need to provide a file")
    .test("fileSize", "The file is too large", (value) => {
      return value && value[0].size <= 2000000;
    })
});
const IDVerif = (props) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset
  } = useForm({ resolver: yupResolver(schema) });
  const [loading, setLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);
  
  const handleClick = () => {
    setIsActive((current) => !current);
  };

  const onSubmit = (data) => {
    setLoading(true);
    console.log(data);
    const formData = new FormData();
    formData.append("file", data.file[0]);
    formData.append("idNumber", data.idNumber);
    formData.append("idDocumentType", data.idDocumentType);
    API.post(`user/verify/id`,formData, {
      headers: {
        Accept: "application/json",
        Authorization:`Bearer ${localStorage.getItem("accessToken")}`
  }}).then((acualData)=>{
        setLoading(false);
        navigate("/Verification");
        console.log(acualData)
      }).catch((error) => {
          console.log(error);
          setLoading(false);  
        })
  };

  return (
    <>
      <NavBar />
      <IDVerifContainer>
        <IDVerifSection>
          <VerfiHeading> ID Verification</VerfiHeading>
          <ImgID src={IDImg} alt="IDImg" />
          <VerfiPargraf>
            Upload Document That Proof Your Identity Such As: <br />
            <VerfiParg>Identity Card, Passport, Driver License</VerfiParg>
          </VerfiPargraf>
          <FormStyle onSubmit={handleSubmit(onSubmit)}>
            <>
            <LabelStyle>Document Type</LabelStyle>
            <InputSelect
            className="form-select"
            name="idDocumentType"
            {...register("idDocumentType")}
          >
            <option hidden value>
              Choose your document type
            </option>
            <option value="passport">passport</option>
            <option value="driving_license">driving_license</option>
            <option value="national_id">national_id</option>
</InputSelect>

              {errors.idDocumentType == "" && (
                <DangerStyle>
                  <AiFillWarning />
                  files is required{" "}
                </DangerStyle>
              )}
            </>
            <>
              <InputField
                placeholder="Enter your ID number"
                label="ID Number"
                {...register("idNumber", { required: true })}
              />
            </>

            {!watch("file") || watch("file").length === 0 ? (
              <FileBefore>
                <BsUpload style={{ marginRight: "10px" }} />
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
              </FileBefore>
            ) : (
              <FileContainer>
                <UploadContain>
                  <BsUpload style={{ marginRight: "10px" }} />
                  <span>{watch("file")[0].name}</span>
                  <UploadSize>
                    {(watch("file")[0].size / 1048576).toFixed(2)}Mb size
                  </UploadSize>
                  <div className="file-remove" onClick={() => reset("")}>
                    X
                  </div>
                  <Text>
                    {" "}
                    {watch("file")[0].size > 2000000 ? (
                      <DangerStyle
                        style={{
                          textAlign: "left",
                          marginLeft: "-400px",
                          marginTop: "-40px"
                        }}
                      >
                        <AiFillWarning />
                        Your file is too big
                      </DangerStyle>
                    ) : (
                      <p>2 MP maximum</p>
                    )}
                  </Text>
                </UploadContain>
              </FileContainer>
            )}

            <BtnVerfi
              type="submit"
              style={{
                backgroundColor: isActive ? "#4375FF" : "",
                color: isActive ? "#fff" : ""
              }}
              onClick={handleClick}
            >
              {" "}
              {loading?<span>Loading...</span>:"Continue"}
            </BtnVerfi>
          </FormStyle>
        </IDVerifSection>
      </IDVerifContainer>
      <Footer />
    </>
  );
};
export default IDVerif;
//
