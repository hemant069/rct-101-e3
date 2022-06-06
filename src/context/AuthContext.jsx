import React, { createContext } from "react";
import { useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)
  

  const login=()=>{
setIsAuth(true);
// if(state.from){
//   navigate(state.from,{replace:true})
// }
// else{
//   navigate('/')
// }
  }

  const logout=()=>{
    setIsAuth(false)
   
  }
  return <AuthContext.Provider value={{isAuth,login,logout}}>{children}</AuthContext.Provider>;
};
