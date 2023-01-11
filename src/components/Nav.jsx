import React, { useEffect } from "react";
import "./css/Nav.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Nav = ({ loginstatus }) => {
  useEffect(() => {});
  return (
    <nav className="nav-main">
      <span>
        <h1>
          <a className="nav-logo" href="/">
            logo
          </a>
        </h1>
      </span>
      <div className="menu-left">
        <Link to="/book">
          <div className="menu">book</div>
        </Link>

        {!loginstatus ? (
          <>
            <Link to="/login">
              <div className="menu">login</div>
            </Link>
            <Link to="/adminlogin">
              <div className="menu">login as admin</div>
            </Link>
            <Link to="/signup">
              <div className="menu">signup</div>
            </Link>
          </>
        ) : (
          <>
            <Link to="/profile">
              {" "}
              <div className="menu">profile</div>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};
