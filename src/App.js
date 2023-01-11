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
import HomePage from "./pages/HomePage";

function App() {
  const token = localStorage.getItem("token");

 const [userloginstatus , setUserloginstatus] = useState(false);
 const adminloginstatus = false;

  const [yourDate, setYourDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const [data, setData] = useState();
  useEffect(()=>{

  },[HomePage])

  useEffect(() => {
    async function checkUserToken() {
      let response = await fetch(`http://192.168.1.74:8000/Client/Dashboard/getPastBookings` ,{
        headers: {
          'Authorization': 'Bearer ' + token,
        }
      });
      const data = await response.json();
      setData(data);
      data.count>-1?setUserloginstatus(true): setUserloginstatus(false);
      };
    
    checkUserToken();
  }, [userloginstatus]);

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

  if (adminloginstatus)
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
      <Routes>
        <Route path="/" element={<HomePage loginstatus={userloginstatus} />}>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/book" element={<Book date2={yourDate} books={data} setYourDate={setYourDate} />} />
          <Route path="/signup" element={<Signup />}/>
        </Route>
      </Routes>
    
      
    </div>
  );
}

export default App;
