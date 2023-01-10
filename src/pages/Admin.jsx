import React from "react";
import { Sidebar } from "../admincomponents/Sidebar";
import { Route , Routes } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Admin() {
  return (
    <>
      <Sidebar />
      <div>

      <Outlet />
      </div>
    </>
  );
}

export default Admin;
