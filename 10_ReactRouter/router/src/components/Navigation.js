import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <ul>
      <li>
        <NavLink to="/" activeStyle={{ color: "green" }}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" activeStyle={{ color: "green" }}>
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeStyle={{ color: "green" }}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/student/jim smith" activeStyle={{ color: "green" }}>
          Student: Jim Smith
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/student/jane smith/50001"
          activeStyle={{ color: "green" }}
        >
          Student: Jane Smith, Student No: 50001
        </NavLink>
      </li>
      <li>
        <NavLink to="/redirect" activeStyle={{ color: "green" }}>
          Redirect
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
