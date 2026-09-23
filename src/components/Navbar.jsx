import { useState } from "react";
import "./Navbar.css";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isLoggedin = useAuth((s) => s.isLoggedIn);
  const username = useAuth((s) => s.name);

  return (
    <header className="navbar">
      <div className="nav-inner">
        <Logo />

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {/* <a href="#about" onClick={() => setMenuOpen(false)}>
          
          </a> */}
          <Link to={"/#about"}>
            <p onClick={() => setMenuOpen(false)}>About us</p>
          </Link>
          {/* <a href="#hospitals" onClick={() => setMenuOpen(false)}>
            Find Doctors
          </a> */}
          <Link to={"/doctorlist"}>
            <p onClick={() => setMenuOpen(false)}>Find Doctors</p>
          </Link>
          <Link to={"/#footer"}>
            <p onClick={() => setMenuOpen(false)}>Contact Us</p>
          </Link>
          {/* <a href="#footer" onClick={() => setMenuOpen(false)}>
            Contact Us
          </a> */}
        </nav>

        <div className="nav-actions">
          <p className="signup-link hidden">Sign up</p>
          {isLoggedin ? (
            <div
              className="user-avatar"
              title={username}
              aria-label={`Logged in as ${username}`}
            >
              {username?.charAt(0).toUpperCase()}
            </div>
          ) : (
            <Link to={"/login"} className="login-button">
              Login
            </Link>
          )}
        </div>

        <button
          className={menuOpen ? "hamburger active" : "hamburger"}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
