import React, { useState } from "react";
  
export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
    const [selectedFile, setSelectedFile] = useState();
    const [file, setFile] = useState([]);
  
    return (
        <Context.Provider value={{ selectedFile,file,setSelectedFile,setFile}}>
            {children}
        </Context.Provider>
    );
};