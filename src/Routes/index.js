import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "../components/Sign-up/SignIn.js";
import SignUp from "../components/Register/SignUp.js"
import ProtectedRoute from "../components/ProtectedRoute.js";
// import Home from "../Pages/Home/Home";
import {Home}from"../components/Pages"
import Verification from "../components/Pages/Verification.js"
import Invoices from "../components//Pages/Invoice Records/Invoices.js"
import UserManagement from "../components/Pages/User Management/UserManagement.js"
import Create from "../components/Pages/Create.js"
import RecoveryPassword from "../components/Recovery/RecoveryPassword.js"
import RecoveryBox from"../components/Recovery/RecoveryBox.js"

import Recovery from "../components/Recovery/Recovery";
import RecoveryCheck from "../components/Recovery/RecoveryCheck";
import Users from "../components/Pages/User Management/Users"
import AddressVerification from "../components/Pages/Verification/Address Verification/AddressVerification.js";
import IDVerif from "../components/Pages/Verification/IDVerifi/IDVerif.js"
import PhoneCheck from "../components/Pages/Verification/PhoneVeriviction/PhoneCheck.js"
import PhoneVerifi from "../components/Pages/Verification/PhoneVeriviction/PhoneVerifi";
import EmailVerfiChek from "../components/Pages/EmailVerfied/EmailVerfiChek.js";
import EmailVerif from "../components/Pages/EmailVerfied/EmailVerif.js"
import Team from "../components/Pages/User Management/Team/Team.js";
const RouterPage = () => {
  return (
    <>
     
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route element={<ProtectedRoute />}> </Route>
          <Route path="Home" element={<Home />} />

          <Route path="Verification" element={<Verification />} />
          <Route path="Invoices" element={<Invoices />} />
          <Route path="Team" element={<Team />} />
          <Route path="UserManagement" element={<UserManagement />} />
          <Route path="Create" element={<Create />} />
          <Route path="RecoveryPassword" element={<RecoveryPassword />} />
          <Route path="Recovery" element={<Recovery />} />
          <Route path="RecoveryBox" element={<RecoveryBox />} />
          <Route path="RecoveryCheck" element={<RecoveryCheck />} />
          <Route path="EmailVerif" element={<EmailVerif />} />
          <Route path="EmailVerfiChek" element={<EmailVerfiChek />} />
          <Route path="PhoneVerifi" element={<PhoneVerifi />} />
          <Route path="PhoneCheck" element={<PhoneCheck />} />
          <Route path="IDVerif" element={<IDVerif />} />
          <Route path="AddressVerification" element={<AddressVerification />} />
          <Route path="Users" element={<Users />} />
        </Routes>
    
    </>
  );
};

export default RouterPage;
// //
