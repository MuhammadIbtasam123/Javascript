import React from "react";
import "./style.css";
import mag from "../assets/magnifying-glass (1).png";
import profile from "../assets/user.png";
import cart from "../assets/shopping-cart.png";
import Hero from "./Hero.jsx";
function Header() {
  return (
    <>
      <nav className="navbar">
        <div className="hamburger-menu">&#9776;</div>
        <div className="logo">
          <span className="right">L</span>
          <span className="right">O</span>
          <span className="right">G</span>
          <span>O</span>
        </div>
        <div className="nav-items">
          <div className="nav-item">
            <img src={mag} alt="" width={"25rem"} />
          </div>
          <div className="nav-item">
            <img src={profile} alt="" width={"25rem"} />
          </div>
          <div className="nav-item">
            <img src={cart} alt="" width={"25rem"} />
          </div>
        </div>
      </nav>

      <div
        style={{
          marginTop: "2rem",
        }}
      >
        <Hero />
      </div>
    </>
  );
}

export default Header;
