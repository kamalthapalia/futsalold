import React, { useEffect, useState } from "react";
import login from "./css/Login.module.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginSubmit = async () => {
    let submitLoginData = {
      username: username,
      password: password,
    };

  await  fetch("http://192.168.1.74:8000/Client/Auth/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submitLoginData),
    }).then((res) => res.json())
    .then((data) =>{

      console.log(data)
      localStorage.setItem("token",data.token)
    })
    .catch((err) => console.log(err));
  };

  useEffect(() => {}, [password?.length > 8]);
  return (
    <div className="row">
      <p className="h3" style={{ textAlign: "center" }}>
        Login to your account.
      </p>
      <div className="col-md-3"></div>
      <div className="col-md-6">
        <div className={login.inputMain}>
          <label htmlFor="username" style={{ textAlign: "left", width: "75%" }}>
            Enter your username
          </label>
          <input
            className={login.input}
            name="nusername"
            type="text"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            autoComplete="off"
            required
          ></input>
        </div>
        <div className={login.inputMain}>
          <label htmlFor="password" style={{ textAlign: "left", width: "75%" }}>
            Enter your password
          </label>
          <input
            className={login.input}
            name="password"
            type="password"
            required
            autoComplete="off"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </div>
        <div className="form-sub-1">
          <button
            className="form-submit"
            onClick={() => {
              loginSubmit();
              alert(1)
            }}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="col-md-3"></div>
    </div>
  );
};
