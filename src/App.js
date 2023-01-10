import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Nav } from "./components/Nav";
import Hero from "./components/Hero";
import Reviews from "./components/Reviews";
import { Book } from "./components/Book";
import { Profile } from "./components/Profile";
import { Signup } from "./components/Signup";
import Admin from "./pages/Admin";
import { Routes, Route , Navigate } from "react-router-dom";

function App() {
  let loggedIn = false;
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Book />
      <Profile />
      <Reviews/>
      <Signup />

      {/* <Routes>
        <Route path="/" element={<Admin />} >
          <Route path="/" element={<Signup />} />
          <Route path="/dashboard" element={<Signup />} />

          <Route path="/another" element={<Profile />} />
          <Route path="*" element={<Navigate to={'/'}/> } />
        </Route>
      </Routes> */}
    </div>
  );
}

export default App;
