import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

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
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/about"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/competition"
              >
                Competition
              </NavLink>
            </li>
            <li>
              <NavLink
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/news-gallery"
              >
                News & Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/partners"
              >
                Partners
              </NavLink>
            </li>
            <li>
              <NavLink
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
