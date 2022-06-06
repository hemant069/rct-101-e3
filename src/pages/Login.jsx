import React, { useState, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [loginCred, setloginCred] = useState({email:"",password:""});
   const {login}=useContext(AuthContext);
 const navigate=useNavigate()

  const handlechange=(e)=>{
    const{name,value}=e.target;
    setloginCred({
      ...loginCred,
      [name]:value,
    })
  }
  const handleSubmit=(e)=>{
e.preventDefault();

login()
navigate('/home')
  }
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input onChange={handlechange} name='email'  type='text' data-cy="login-email" />
      <input onChange={handlechange} name='password' type='password' data-cy="login-password" />
      <button type="submit" data-cy="login-submit">Login</button>
    </form>
    </div>
  );
};

export default Login;
