import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // Presentational only — wire this up to real auth later.
  }

  return (
    <div className="login-page">
      <div className="login-illustration">
        <div className="login-deco deco-circle" />
        <div className="login-deco deco-square" />
        <div className="login-deco deco-circle-two" />

        <div className="login-plane">
          <span className="login-plane-line" />
          <span className="login-plane-icon">✈</span>
        </div>

        <Link to="/" className="logo login-logo">
          <span className="logo-mark">
            <span className="logo-wing logo-wing-one" />
            <span className="logo-wing logo-wing-two" />
            <span className="logo-wing logo-wing-three" />
          </span>
          CampusCare
        </Link>

        <div className="login-illustration-text">
          <h2>
            Your campus clinic,
            <br />
            a couple of taps away.
          </h2>
          <p>Book visits, track appointments and message your doctor.</p>
        </div>
      </div>

      <div className="login-form-side">
        <form className="login-form" onSubmit={handleSubmit}>
          <span className="eyebrow">WELCOME BACK</span>
          <h1>Sign in</h1>
          <p className="login-subtext">Enter your name to continue to your account.</p>

          <label className="form-field">
            <span>Full name</span>
            <input
              type="text"
              placeholder="e.g. Liya Tadesse"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <button type="submit" className="btn btn-primary btn-block">Login</button>
        </form>
      </div>
    </div>
  );
}
