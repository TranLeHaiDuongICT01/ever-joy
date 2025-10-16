import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav-bar">
        <div className="mobile-header">
          <div className="mobile-logo">
            <img src={logo} alt="Road to Essen" />
          </div>

          <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div className={`nav-content ${menuOpen ? "open" : ""}`}>
          <div className="logo desktop-only">
            <img src={logo} alt="Road to Essen" />
          </div>
          <ul className="nav-left">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/competition">Competition</a>
            </li>
            <li>
              <a href="/news">News & Gallery</a>
            </li>
            <li>
              <a href="/partners">Partners</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
