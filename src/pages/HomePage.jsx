import React from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "../components/Nav";
import Reviews from "../components/Reviews";
import { Book } from "../components/Book";
import Hero from "../components/Hero";
const HomePage = ({ loginstatus }) => {
  
  return (
    <div>
      <Nav loginstatus={loginstatus} />
      <Outlet />
      
      {window.location.pathname !== "/" ? (
        <></>
      ) : (
        <>
          <Hero />
          <Book />
          <Reviews />
        </>
      )}
    </div>
  );
};

export default HomePage;
