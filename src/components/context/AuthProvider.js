import { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    const setAuthData = (data) => {
        setAuth({data: data});
      }; 
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;