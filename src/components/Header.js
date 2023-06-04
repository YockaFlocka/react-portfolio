import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";
import { AiOutlineMenu } from "react-icons/ai";

function Header() {
  const [dropNav, setDropNav] = useState(false);

  const location = useLocation();
  
  useEffect(() => {
    setDropNav(false);
  }, [location]);

  return (
    <div className="navbar" id={dropNav ? "open" : "close"}>
      <div className="toggleButton">
        <button onClick={() => {setDropNav((prev) => !prev)}}> 
          <AiOutlineMenu /> 
        </button>
      </div>
      <div className="links">
        <Link to="/"> About Me </Link>
        <Link to="/portfolio"> Portfolio </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/resume"> Resume </Link>
      </div>
    </div>
  )  
}

export default Header;