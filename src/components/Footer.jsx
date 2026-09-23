import Logo from "./Logo";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-decoration footer-plane">✈</div>

      <div className="footer-inner">
        <div className="footer-brand">
          <Logo />

          <p>
            We connect talented healthcare professionals with hospitals looking
            for their next great team member.
          </p>

          <p>
            Making healthcare hiring
            <br />
            simpler, one connection at a time.
          </p>
        </div>

        <div className="footer-column">
          <h4>About CampusCare</h4>
          <a href="#about">About us</a>
          <a href="#terms">Terms of service</a>
          <a href="#privacy">Privacy policy</a>
          <a href="#faq">FAQ</a>
          <a href="#conduct">Code of conduct</a>
        </div>

        <div className="footer-column">
          <h4>For Hospitals</h4>
          <a href="#post-job">Post a Job Opening</a>
          <a href="#search-nurses">Search for nurses</a>

          <h4 className="footer-subheading">For Nurses</h4>
          <a href="#apply">How to apply</a>
          <a href="#benefits">Benefits</a>
          <a href="#jobs">Browse Jobs</a>
          <a href="#conduct">Code of conduct</a>
        </div>

        <div className="footer-column contact-column">
          <h4>Contact us</h4>

          <a href="tel:3085550121">
            <span className="contact-icon">⌕</span>
            (308) 555-0121
          </a>

          <a href="mailto:thuhang.nute@gmail.com">
            <span className="contact-icon">✉</span>
            thuhang.nute@gmail.com
          </a>

          <a href="#location">
            <span className="contact-icon">⌖</span>
            3517 W. Gray St. Utica, 57867
          </a>

          <h4 className="social-title">Social platforms</h4>

          <div className="socials">
            <a href="#facebook" aria-label="Facebook">
              f
            </a>
            <a href="#instagram" aria-label="Instagram">
              ◎
            </a>
            <a href="#linkedin" aria-label="LinkedIn">
              in
            </a>
            <a href="#pinterest" aria-label="Pinterest">
              p
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 CampusCare. All rights reserved.</span>

        <div className="footer-bottom-links">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </div>
      </div>
    </footer>
  );
}
