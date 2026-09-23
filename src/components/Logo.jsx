import "./Logo.css";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="logo">
      <span className="logo-mark">
        <span className="logo-wing logo-wing-one" />
        <span className="logo-wing logo-wing-two" />
        <span className="logo-wing logo-wing-three" />
      </span>
      CampusCare
    </Link>
  );
}
