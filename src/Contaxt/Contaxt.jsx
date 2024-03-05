 import React, { createContext } from 'react';
 export const MyContaxt = createContext()
 const Contaxt = ({children}) => {
    const AuthInfo = {}
    return (
        <MyContaxt.Provider value={AuthInfo}>
             {children}
        </MyContaxt.Provider>
    );
 };
 
 export default Contaxt; 