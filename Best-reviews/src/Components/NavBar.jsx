import { NavLink } from "react-router-dom";
import profileicon from "../assets/profileicon.jpg"
import "../../src/index.css"
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";



function NavBar({token, setToken}) {
  const navigate = useNavigate()
  console.log("navbar token",token)
  const logoutUser= () => {
      setToken(null)
      navigate("/items")
  };
 
  
  if(token){
    return(
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/items">Items</NavLink>
      <CgProfile className= "profile-button-button" onClick={() => navigate(`/users/`)}/>
      {/* <button className= "profile-button-button" onClick={() => navigate(`/users/`)}><img className="profile-button" src={profileicon} alt="Profile"/></button>       */}
      <a onClick={logoutUser}>Logout</a>
    </nav>
    )
  }
  return(
    <nav>
      <NavLink to="/">Home</NavLink>
     <NavLink to="/register">Register</NavLink>
     <NavLink to="/login">Login</NavLink>
     <NavLink to="/items">Items</NavLink>
    </nav>
  );
  
}

export default NavBar;