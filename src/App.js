import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Nav } from "./components/Nav";
import Hero from "./components/Hero";
import Reviews from "./components/Reviews";
import { Book } from "./components/Book";
import { Profile } from "./components/Profile";
import { Signup } from "./components/Signup";
import Admin from "./pages/Admin";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Login } from "./components/Login";

function App() {
  const token = localStorage.getItem("token");

  let userlginstatus = false;

  const [yourDate, setYourDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const [data, setData] = useState();

  useEffect(() => {
    async function checkUserToken() {
      let response = await fetch(`http://192.168.1.74:8000/Client/Dashboard/getPastBookings` ,{
        headers: {
          'Authorization': 'Bearer ' + token,
        }
      });
      const data = await response.json();
      setData(data);
      data.count?userlginstatus = true: userlginstatus = false;
    }
    checkUserToken();
    console.log(token)
  }, []);

  // useEffect(() => {
  //   async function getMatches() {
  //     let response = await fetch(
  //       `http://192.168.1.74:8000/client/Bookings/getAllBookings?date=${yourDate}`
  //     );
  //     const data = await response.json();
  //     setData(data);
  //     console.log(data);
  //   }
  //   getMatches();
  // }, []);
  if (userlginstatus)
    return (
      <Routes>
        <Route path="/" element={<Admin />}>
          <Route path="/" element={<Signup />} />
          <Route path="/dashboard" element={<Signup />} />

          <Route path="/another" element={<Profile />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Route>
      </Routes>
    );
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Book date2={yourDate} books={data} setYourDate={setYourDate} />
      <Profile />
      <Reviews />
      <Login />
      <Signup />
    </div>
  );
}

export default App;
