import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <h1 className="logo">DeepShift</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About Us</a>
      </nav>
    </header>
  );
}

export default Navbar;
