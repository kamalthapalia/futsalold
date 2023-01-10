import React from "react";
import "./css/SignUp.css";
import { useState, useRef ,useEffect } from "react";

export const Signup = () => {
  const pwmatch = document.querySelector(".form-warn");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const checkPwMatch = () => {

    if(password?.length>0&&repassword?.length>0){
    password?.length < 1
      ? pwmatch.classList.add("dum")
      : pwmatch.classList.add("form-block");
    password === repassword
      ? pwmatch.classList.remove("form-block")
      : pwmatch.classList.add("form-block");
    }
  };

  useEffect(()=>{
    checkPwMatch();
    
  },[repassword , password])
  return (
    <div className="container">
      <h3 style={{textAlign:"center"}}>signup to book the match</h3>
      <form>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="form-inp-main">
              <label htmlFor="name">Enter your name</label>
              <input
                className="form-inp"
                name="name"
                type="text"
                autoComplete="off"
                required
              ></input>
            </div>
            <div className="form-inp-main">
              <label htmlFor="phone">Enter your phone no.</label>
              <input
                className="form-inp"
                name="phone"
                s
                type="tel"
                required
                autoComplete="off"
              ></input>
            </div>
            <div className="form-inp-main">
              <label htmlFor="email">Enter your email address</label>
              <input
                className="form-inp"
                name="email"
                type="email"
                required
                autoComplete="on"
              ></input>
            </div>

            <div className="form-inp-main">
              <label htmlFor="password">Enter your password</label>
              <input
                className="form-inp"
                name="password"
                type="password"
                required
                autoComplete="off"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
            </div>
            <div className="form-inp-main">
              <label htmlFor="password">Confirm your password</label>
              <input
                className="form-inp"
                name="password"
                required
                onChange={(e) => {
                  setRePassword(e.target.value);
                }}
                type="password"
                autoComplete="off"
              ></input>
              <div className="form-warn">password donot match</div>
            </div>
            <div className="form-inp-main">
              <label htmlFor="image">Upload your image</label>
              <input
                className="form-inp form-img"
                name="image"
                type="file"
                accept=".jpg , .png, ,jpeg"
              ></input>
            </div>
            <div className="form-sub-1">
              
            <input type="submit" className="form-submit"/>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </form>
    </div>
  );
};
