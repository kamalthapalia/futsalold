import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const menuItems = [
    {
      menu: "Dashboard",
      path: "/dashboard",
    },
    {
      menu: "Upcomings",
      path: "/upcomings",
    },
    {
      menu: "Another",
      path: "/another",
    },
    {
      menu: "Moer",
      path: "/moer",
    },
  ];

  return (
    <div className="side-menu">
      <h5 className="side-menu-items">welcome henc</h5>
      {menuItems.map((mi) => (
        <Link to={mi.path}>
          <div className="side-menu-items">{mi.menu}</div>
        </Link>
      ))}
    </div>
  );
};
