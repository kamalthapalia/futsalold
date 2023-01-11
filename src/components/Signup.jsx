import React from "react";
import "./css/SignUp.css";
import { useState, useRef, useEffect } from "react";

export const Signup = () => {
  const pwmatch = document.querySelector(".form-warn");
  const pwlength = document.querySelector(".form-warn2");




  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const checkPwMatch = () => {
    if (password?.length > 0 && repassword?.length > 0) {
      password?.length < 1
        ? pwmatch.classList.add("dum")
        : pwmatch.classList.add("form-block");
      password === repassword
        ? pwmatch.classList.remove("form-block")
        : pwmatch.classList.add("form-block");
    }
  };
  if (password?.length > 0) {
    password.length < 8
      ? pwlength.classList.add("form-block")
      : pwmatch.classList.remove("form-block");
    password.length >= 8
      ? pwlength.classList.remove("form-block")
      : pwmatch.classList.remove("form-block");
  } 
  let finalUploadData = {
    username: username,
    fullname: fullname,
    phone: phone,
    password: password
}
  const submitData = async () => {

    fetch("http://192.168.1.74:8000/Client/Auth/Register", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( finalUploadData),
    })
      .then((res) => res.json())
      .then((data) =>{

        console.log(data)
        localStorage.setItem("token",data.token)
      })
      .catch((err) => console.log(err));
    
  }
  useEffect(() => {
    checkPwMatch();
  }, [repassword, password]);
  return (
    <div className="container">
      <h3 style={{ textAlign: "center" }}>signup to book the match</h3>

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="form-inp-main">
              <label htmlFor="name">Enter your fullname</label>
              <input
                className="form-inp"
                name="name"
                type="text"
                onChange={(e)=>{
                  setFullname(e.target.value);
                }}
                autoComplete="off"
                required
              ></input>
            </div>
            <div className="form-inp-main">
              <label htmlFor="username">Enter your username</label>
              <input
                className="form-inp"
                name="nusername"
                type="text"
                onChange={(e)=>{
                  setUsername(e.target.value);
                }}
                autoComplete="off"
                required
              ></input>
            </div>
            <div className="form-inp-main">
              <label htmlFor="phone">Enter your phone no.</label>
              <input
                className="form-inp"
                name="phone"
                onChange={(e)=>{
                  setPhone(e.target.value);
                }}
                type="tel"
                required
                autoComplete="off"
              ></input>
            </div>
            <div className="form-inp-main">
              <label htmlFor="email">Enter your email address (optional)</label>
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
              <div className=" form-warn2">
                password must be more than 8 characters
              </div>
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

            <div className="form-sub-1">
              <button className="form-submit" onClick={ (email) =>{
              email.preventDefault();
              submitData();
              }}>Submit</button>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
    </div>
  );
};
