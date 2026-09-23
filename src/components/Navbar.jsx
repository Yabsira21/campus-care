function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-inner">
        <Logo />

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About us
          </a>
          <a href="#hospitals" onClick={() => setMenuOpen(false)}>
            Find hospitals
          </a>
          <a href="#nurses" onClick={() => setMenuOpen(false)}>
            Find nurses
          </a>
        </nav>

        <div className="nav-actions">
          <a href="#signup" className="signup-link hidden">
            Sign up
          </a>
          <a href="#login" className="login-button">
            Login
          </a>
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
