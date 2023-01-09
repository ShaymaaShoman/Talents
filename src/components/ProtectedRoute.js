import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const user = { loggedIn: false };
  // const users = {loggedOut:false};
  return user && user.loggedIn;
};
const ProtectedRoute = () => {
  const navigate = useNavigate();
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <navigate to="Home" />;
};

export default ProtectedRoute;
