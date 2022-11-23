import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";
import React from "react";
import { uselogout } from "../../Hooks/useLogout";
import { useAuthContext } from "../../Hooks/useAuthContext";

const Navbar = () => {
  const { user } = useAuthContext();
  const { logout } = uselogout();
  const handleclick = () => {
    logout();
  };
  return (
    <nav>
      <Link to="/">
        <h1>WorkOut Dude</h1>
      </Link>

      {user && (
        <div className="logout">
          <span>{user.email}</span>
        <button onClick={handleclick}>Logout</button>
      </div>
      )}

      {!user && (
        <div className="menu">
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
      </div>
      )}
    </nav>
  );
};

export default Navbar;
