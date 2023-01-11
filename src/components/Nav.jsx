import React, { useEffect } from "react";
import "./css/Nav.css";
import { useState } from "react";

export const Nav = () => {
  
  const [logged, setLogged] = useState(false);
  useEffect(()=>{
    const token = localStorage.getItem("token")
    token == "user"? setLogged(true):setLogged(false);
  })
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
            <div
              className="menu"
              onClick={() => {
                localStorage.setItem("token", "user");
              }}
            >
              login
            </div>
            <div
              className="menu"
              onClick={() => {
                localStorage.setItem("token", "admin");
              }}
            >
              login as admin
            </div>
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
