import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  import SignIn from "../Sign-up/SignIn.js"
  import SignUp from "../Register/SignUp.js"
  import ProtectedRoute from '../ProtectedRoute.js';
  import Home from"../Pages/Home/Home"
  import Verification from "../Pages/Verification.js"
  import Invoices from "../Pages/Invoice Records/Invoices.js"
  import UserManagement from "../Pages/User Management/UserManagement.js"
  import Create from "../Pages/Create.js"
  import RecoveryPassword from "../Recovery/RecoveryPassword"
  import RecoveryBox from "../Recovery/RecoveryBox"
  import Recovery from "../Recovery/Recovery"
  import RecoveryCheck from "../Recovery/RecoveryCheck"
  import Users from "../Pages/User Management/Users"
  import AddressVerification from "../Pages/Verification/Address Verification/AddressVerification.js"
  import IDVerif from "../Pages/Verification/IDVerifi/IDVerif.js"
  import PhoneCheck from "../Pages/Verification/PhoneVeriviction/PhoneCheck"
  import PhoneVerifi from "../Pages/Verification/PhoneVeriviction/PhoneVerifi"
  import EmailVerfiChek from "../Pages/EmailVerfied/EmailVerfiChek.js"
  import EmailVerif from "../Pages/EmailVerfied/EmailVerif.js"
const RouterPage = () => {
  return (
    <>
      
    <BrowserRouter>
    <Routes>
    <Route path="/" element={ <SignIn/>} />
    <Route path="SignUp" element={ <SignUp />  } />
    <Route element={<ProtectedRoute/>}>   </Route>
    <Route path="Home" element={<Home/>} />
   
    <Route path="Verification" element={<Verification/>} />
    <Route path="Invoices" element={ <Invoices/> } /> 
    <Route path="UserManagement" element={ <UserManagement/> } />  
      <Route path="Create" element={ <Create/> } />  
    <Route path="RecoveryPassword" element={ <RecoveryPassword/>  } />
      <Route path="Recovery" element={ <Recovery/> } />  
      <Route path="RecoveryBox" element={ <RecoveryBox/> } />  
      <Route path="RecoveryCheck" element={ <RecoveryCheck/> } />     
      <Route path="EmailVerif" element={ <EmailVerif/> } />  
      <Route path="EmailVerfiChek" element={< EmailVerfiChek/> } />
      <Route path="PhoneVerifi" element={<PhoneVerifi/> } /> 
      <Route path="PhoneCheck" element={<PhoneCheck/> } /> 
      <Route path="IDVerif" element={<IDVerif/> } />   
      <Route path="AddressVerification" element={<AddressVerification/> } />
      <Route path="Users" element={<Users/> } />    
    
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default RouterPage;
// // 