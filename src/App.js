import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import SignIn from './components/Sign-up/SignIn';
import SignUp from "./components/Register/SignUp";
import Recovery from './components/Recovery/Recovery';
import RecoveryPassword from './components/Recovery/RecoveryPassword';
import RecoveryCheck from './components/Recovery/RecoveryCheck';
import RecoveryBox from './components/Recovery/RecoveryBox';
import Home from "./components/Pages/Home";
import Invoices from "./components/Pages/Invoice Records/Invoices";
import Create from "./components/Pages/Create";
import EmailVerif from "./components/Pages/Verification/EmailVerif";
import EmailVerfiChek from "./components/Pages/Verification/EmailVerfiChek";
import PhoneVerifi from "./components/Pages/Verification/PhoneVeriviction/PhoneVerifi";
import PhoneCheck from "./components/Pages/Verification/PhoneVeriviction/PhoneCheck";
import IDVerif from "./components/Pages/Verification/IDVerifi/IDVerif";
import AddressVerification from "./components/Pages/Verification/Address Verification/AddressVerification";
// export const NotFound = () => {
//   return <div><h1> 404 page not found </h1> </div>
// }
function App() {
  
  return (
    <div className="App">
  
    <BrowserRouter>
        <Routes>
        <Route path="/" element={ <SignIn/>} />
        <Route path="SignUp" element={ <SignUp />  } />
        <Route path="Home" element={<Home/>} />
        <Route path="Invoices" element={ <Invoices/> } />  
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
        
        </Routes>
      </BrowserRouter>
    
    
    </div>
  );
}

export default App;
  // <Route path="*" element={<NotFound />} /> 

           