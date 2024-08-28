import { NavLink } from "react-router-dom";

function NavBar({token, setToken}) {
  console.log("navbar token",token)
  const logoutUser= () => {
      setToken(null)
  };
  
  if(token){
    return(
    <nav>
      <NavLink to="/">Home</NavLink>
     <NavLink to="/items">Read Reviews</NavLink>
     <a onClick={logoutUser}>Logout</a>
    </nav>
    )
  }
  return(
    <nav>
      <NavLink to="/">Home</NavLink>
     <NavLink to="/register">Register</NavLink>
     <NavLink to="/login">Login</NavLink>
     <NavLink to="/items">Read Reviews</NavLink>
    </nav>
  );
  
}

export default NavBar;