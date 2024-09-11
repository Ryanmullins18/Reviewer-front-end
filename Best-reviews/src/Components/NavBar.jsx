import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"
import "../../src/index.css"
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";



function NavBar({token, setToken}) {
  const navigate = useNavigate()
  
  const logoutUser= () => {
      setToken(null)
      navigate("/items")
  };
 
  
  if(token){
    return(
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/items">Items</NavLink>
      <CgProfile className= "profile-button-button" onClick={() => navigate(`/users`)}/>
      {/* <button className= "profile-button-button" onClick={() => navigate(`/users/`)}><img className="profile-button" src={profileicon} alt="Profile"/></button>       */}
      <a onClick={logoutUser}>Logout</a>
    </nav>
    )
  }
  return(
    <nav>
      <NavLink to="/">Home</NavLink>
     <NavLink to="/items">Items</NavLink>
     <NavLink to="/register">Sign Up</NavLink>
     <NavLink to="/login">Login</NavLink>
    </nav>
  );
  
}

export default NavBar;