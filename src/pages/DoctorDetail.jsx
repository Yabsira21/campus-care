import { Link } from "react-router-dom";
// import Navbar from '../components/Navbar';
// import Footer from "../components/Footer";
import { doctors } from "../data/doctors";
import "./DoctorDetail.css";

// Presentational only — the real page will read the :id route param
// and fetch the matching doctor. Shown here with a static example.
const doctor = doctors[0];
const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "11:00 AM",
  "1:30 PM",
  "3:00 PM",
  "4:15 PM",
];

export default function DoctorDetail() {
  return (
    <>
      <section className="detail-hero">
        <div className="detail-hero-decoration deco-circle" />
        <div className="detail-hero-decoration deco-square" />

        <div className="container">
          <Link to="/doctors" className="back-link">
            <span>←</span> Back to all doctors
          </Link>

          <div className="detail-hero-row">
            <div className="detail-avatar" style={{ background: doctor.color }}>
              {doctor.initials}
            </div>

            <div className="detail-heading">
              <span className="eyebrow">DOCTOR PROFILE</span>
              <h1>{doctor.name}</h1>
              <p className="detail-department">{doctor.department}</p>

              <div className="detail-badges">
                <span className="rating">★ {doctor.rating.toFixed(1)}</span>
                <span className="pill-tag">{doctor.experience} experience</span>
                {doctor.status === "available" ? (
                  <span className="badge-available">
                    <i /> Available today
                  </span>
                ) : (
                  <span className="badge-busy">Fully booked</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section detail-body">
        <div className="container detail-layout">
          <div className="detail-main">
            <div className="detail-card">
              <h3>About</h3>
              <p>
                {doctor.name} sees students for general check-ups, minor illness
                and referrals to campus specialists. Known for short wait times
                and walk-in flexibility during morning shifts.
              </p>
            </div>

            <div className="detail-card">
              <h3>Education</h3>
              <ul className="detail-list">
                <li>MD, Addis Ababa University School of Medicine</li>
                <li>
                  Residency, St. Paul's Hospital Millennium Medical College
                </li>
              </ul>
            </div>
          </div>

          <aside className="booking-card">
            <h3>Book an appointment</h3>
            <p className="booking-subtext">Pick a time that works for you.</p>

            <span className="field-label">Date</span>
            <div className="date-row">
              {["Mon 22", "Tue 23", "Wed 24", "Thu 25"].map((d, i) => (
                <button
                  key={d}
                  className={`date-pill ${i === 0 ? "date-pill-active" : ""}`}
                >
                  {d}
                </button>
              ))}
            </div>

            <span className="field-label">Time</span>
            <div className="slot-grid">
              {timeSlots.map((slot, i) => (
                <button
                  key={slot}
                  className={`slot ${i === 1 ? "slot-active" : ""}`}
                >
                  {slot}
                </button>
              ))}
            </div>

            <Link to="/checkout" className="btn btn-primary btn-block">
              Continue to booking
            </Link>
          </aside>
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
}
