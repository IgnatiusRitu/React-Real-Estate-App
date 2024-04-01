import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div className="left">
        <Link to={`/`} className="logo">
          <img src="/logo.png" alt="" />
          <span>NatoEstate</span>
        </Link>
        <Link to={`/`}>Home</Link>
        <Link to={`/`}>About</Link>
        <Link to={`/`}>Contacts</Link>
        <Link to={`/`}>Agents</Link>
      </div>
      <div className="right">
        <Link to={`/`}>Sign in</Link>
        <Link to={`/`} className="register">
          Sign up
        </Link>
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt="menu-icon"
            onClick={() => setIsOpen((prev) => !prev)}
          />
        </div>
        <div className={isOpen ? "menu active" : "menu"}>
          <Link to={`/`}>Home</Link>
          <Link to={`/`}>About</Link>
          <Link to={`/`}>Contacts</Link>
          <Link to={`/`}>Agents</Link>
          <Link to={`/`}>Sign in</Link>
          <Link to={`/`}>Sign up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
