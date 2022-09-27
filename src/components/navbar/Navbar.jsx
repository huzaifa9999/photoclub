import React, { useState } from "react";

import "./navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
export default function Navbar() {
  const [click, setclick] = useState(false);
  const Click = () => setclick(!click);

  return (
    <div className="head">
      <Link to="/">
        <h1 id="sitename">LAMHE</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="list">
          <Link to="/">Home</Link>
        </li>
        <li className="list">
          <Link to="/Gallery" target={"_top"}>Gallery</Link>
        </li>

        <li className="list">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="hamburger" onClick={Click}>
        {click ? (
          <FaTimes size={25} style={{ color: "white" }} />
        ) : (
          <FaBars size={25} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
}
