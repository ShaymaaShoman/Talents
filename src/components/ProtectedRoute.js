import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
const useAuth =()=>{
    const user = {loggedIn:false};
    const users = {loggedOut:false};
    return(
        user&&user.loggedIn,
        users&& users.loggedOut
    )
}
const ProtectedRoute = () => {
    const isAuth =useAuth();
  return isAuth ? <Outlet/>:<Navigate to="/"/>;
}

export default ProtectedRoute;
