import { useState } from "react";
import { Link } from "react-router-dom";

// import { doctors } from "../data/doctors";
import "./DoctorDetail.css";

// Presentational only
// const doctor = doctors[0];

const doctor = {};
const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "11:00 AM",
  "1:30 PM",
  "3:00 PM",
  "4:15 PM",
];

export default function DoctorDetail() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDayClick = (day) => {
    setSelectedDay((current) => (current === day ? null : day));
  };

  const handleTimeClick = (time) => {
    setSelectedTime((current) => (current === time ? null : time));
  };

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

                {/* {doctor.status === "available" ? (
                  <span className="badge-available">
                    <i /> Available today
                  </span>
                ) : (
                  <span className="badge-busy">Fully booked</span>
                )} */}
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

          {/* BOOKING */}
          <aside className="booking-card">
            <h3>Book an appointment</h3>

            <p className="booking-subtext">
              Pick a day and time that works for you.
            </p>

            {/* DAYS */}
            <span className="field-label">Date</span>

            <div className="date-row">
              {days.map((day) => (
                <button
                  key={day}
                  type="button"
                  className={`date-pill ${
                    selectedDay === day ? "date-pill-active" : ""
                  }`}
                  onClick={() => handleDayClick(day)}
                >
                  {day}
                </button>
              ))}
            </div>

            {/* TIME */}
            <span className="field-label">Time</span>

            <div className="slot-grid">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  className={`slot ${
                    selectedTime === slot ? "slot-active" : ""
                  }`}
                  onClick={() => handleTimeClick(slot)}
                >
                  {slot}
                </button>
              ))}
            </div>

            {/* SELECTED INFORMATION */}
            {(selectedDay || selectedTime) && (
              <div className="booking-summary">
                {selectedDay && (
                  <span>
                    Day: <strong>{selectedDay}</strong>
                  </span>
                )}

                {selectedTime && (
                  <span>
                    Time: <strong>{selectedTime}</strong>
                  </span>
                )}
              </div>
            )}

            {/* CONTINUE */}
            <Link
              to="/checkout"
              className={`btn btn-primary btn-block ${
                !selectedDay || !selectedTime ? "btn-disabled" : ""
              }`}
              onClick={(e) => {
                if (!selectedDay || !selectedTime) {
                  e.preventDefault();
                }
              }}
            >
              Continue to booking
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
