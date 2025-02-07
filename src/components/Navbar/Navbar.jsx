import React, { useContext } from "react";
import { Link ,useNavigate} from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
// use react-router Link or NavLink



const Navbar = () => {

let navigate=useNavigate();

 const {isAuth,logout} = useContext(AuthContext)

  const onClickLogin=()=>{
   if(isAuth){
     logout()
   }
   else{
    navigate('/login')
   }
  }

  
  return (
    <div data-cy="navbar">
      <Link to='\' data-cy="navbar-home-link">Logo</Link>
      <span data-cy="navbar-cart-items-count">{/* count here */}</span>
      <button onClick={onClickLogin}  data-cy="navbar-login-logout-button">{isAuth?'Logout':'Login'}</button>
    </div>
  );
};

export default Navbar;
