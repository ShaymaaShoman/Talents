import React, { useState } from "react";
  
export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
    const[value,setValue]=useState("")
    const userData=localStorage.getItem('user');
    // const testUserData =JSON.parse(userData);

   
    return (
        <Context.Provider value={{userData}}>
            {children}
        </Context.Provider>
    );
};
