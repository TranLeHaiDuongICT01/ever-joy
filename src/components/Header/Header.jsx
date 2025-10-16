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
              <a href="/ever-joy">Home</a>
            </li>
            <li>
              <a href="/ever-joy/about">About Us</a>
            </li>
            <li>
              <a href="/ever-joy/competition">Competition</a>
            </li>
            <li>
              <a href="/ever-joy/news-gallery">News & Gallery</a>
            </li>
            <li>
              <a href="/ever-joy/partners">Partners</a>
            </li>
            <li>
              <a href="/ever-joy/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
