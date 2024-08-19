import { NavLink } from "react-router-dom";

function NavBar() {
  return(
    <nav>
     <NavLink to="/register">Register</NavLink>
     <NavLink to="/login">Login</NavLink>
     <NavLink to="/items">Items</NavLink>
    </nav>
  );
  
}

export default NavBar;