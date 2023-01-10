import React from "react";
import "./css/Nav.css";
import { useState } from "react";

export const Nav = () => {
  const [logged, setLogged] = useState(false);
  return (
    <nav className="nav-main">
      <span>
        <h1>
          <a className="nav-logo" href="#">
            logo
          </a>
        </h1>
      </span>
      <div className="menu-left">
        <div className="menu">book</div>
        {!logged ? (
          <>
            <div className="menu">login</div>
            <div className="menu">signup</div>
          </>
        ) : (
          <>
            
            <div className="menu">profile</div>
          </>
        )}
      </div>
    </nav>
  );
};
