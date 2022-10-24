import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import SignIn from './components/Sign-up/SignIn';
import Register from './components/Register/Register';
import Recovery from './components/Recovery/Recovery';
import RecoveryPassword from './components/Recovery/RecoveryPassword';
import RecoveryCheck from './components/Recovery/RecoveryCheck';
import RecoveryBox from './components/Recovery/RecoveryBox';
import Home from "./components/HomePage/Home";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
        <Route path="SignIn" element={ <SignIn/>} />
        <Route path="Home" element={ <Home/> } />
            <Route path="Register" element={<Register/> } />
            <Route path="RecoveryCheck" element={ <RecoveryCheck/>  } />
            <Route path="RecoveryBox" element={ <RecoveryBox/> } />
            <Route path="RecoveryPassword" element={ <RecoveryPassword/>  } />
            <Route path="Recovery" element={ <Recovery/> } />
            
         
      
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
//               