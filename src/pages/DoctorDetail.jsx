import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import { doctors } from "../data/doctors";
import "./DoctorDetail.css";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
  const [error, setError] = useState(null);
  const { id } = useParams();

  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        //     const res = await fetch("/src/data/data.json");

        // const doctors = await res.json();

        // console.log(doctors, Number(id));

        // const hi = doctors.filter((d) => d.id == 1);

        // console.log(hi);

        // const doctorData = doctors.find((d) => d.id == Number(id));
        const res = await fetch("/src/data/data.json");

        if (!res.ok) {
          throw new Error("Failed to load doctors");
        }

        const doctors = await res.json();

        console.log(doctors, Number(id));
        const hi = doctors.filter((d) => d.id == Number(id));
        console.log(hi[0]);

        const doctorData = doctors.find((d) => d.id == Number(id));
        // const doctorData = hi[0];
        // console.log(doctorData);

        if (!doctorData) {
          setError("doctor-not-found");
          return;
        }

        setDoctor(doctorData);
      } catch (e) {
        console.error(e);
        setError("fetch-error");
      }
    }

    setTimeout(() => {
      load();
    }, 3000);
  }, [id]);

  const handleDayClick = (day) => {
    setSelectedDay((current) => (current === day ? null : day));
  };

  const handleTimeClick = (time) => {
    setSelectedTime((current) => (current === time ? null : time));
  };

  if (!doctor && !error) {
    return <DoctorDetailSkeleton />;
  }

  if (error === "doctor-not-found") {
    return (
      <section className="doctor-error">
        <div className="doctor-error-card">
          <div className="doctor-error-icon">🩺</div>

          <h2>Doctor not found</h2>

          <p>
            We couldn't find the doctor you're looking for. They may have been
            removed or the profile doesn't exist.
          </p>

          {/* <Link to="/doctorlist" className="btn btn-primary">
            Back to doctors
          </Link> */}
        </div>
      </section>
    );
  }

  if (error === "fetch-error") {
    return (
      <section className="doctor-error">
        <div className="doctor-error-card">
          <div className="doctor-error-icon">⚠️</div>

          <h2>Something went wrong</h2>

          <p>We couldn't load this doctor's profile. Please try again later.</p>

          <Link to="/doctorlist" className="btn btn-primary">
            Back to doctors
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="detail-hero">
        <div className="detail-hero-decoration deco-circle" />
        <div className="detail-hero-decoration deco-square" />

        <div className="container">
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
              state={{
                doctor,
                selectedDay,
                selectedTime,
              }}
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

function DoctorDetailSkeleton() {
  return (
    <>
      <section className="detail-hero">
        <div className="detail-hero-decoration deco-circle" />
        <div className="detail-hero-decoration deco-square" />

        <div className="container">
          <div className="detail-hero-row">
            <Skeleton
              width={96}
              height={96}
              borderRadius="30% 70% 70% 30% / 30% 30% 70% 70%"
            />

            <div className="detail-heading">
              <Skeleton width={110} height={13} />

              <div style={{ marginTop: "10px" }}>
                <Skeleton width={230} height={35} />
              </div>

              <div style={{ marginTop: "8px" }}>
                <Skeleton width={120} height={15} />
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "14px",
                }}
              >
                <Skeleton width={70} height={25} borderRadius={20} />

                <Skeleton width={110} height={25} borderRadius={20} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section detail-body">
        <div className="container detail-layout">
          {/* LEFT SIDE */}
          <div className="detail-main">
            <div className="detail-card">
              <Skeleton width={60} height={20} />

              <div style={{ marginTop: "15px" }}>
                <Skeleton count={4} height={13} />
              </div>
            </div>

            <div className="detail-card">
              <Skeleton width={80} height={20} />

              <div style={{ marginTop: "15px" }}>
                <Skeleton width="90%" height={14} />

                <div style={{ marginTop: "10px" }}>
                  <Skeleton width="80%" height={14} />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <aside className="booking-card">
            <Skeleton width={180} height={20} />

            <div style={{ marginTop: "8px" }}>
              <Skeleton width={220} height={14} />
            </div>

            {/* Date label */}
            <div style={{ marginTop: "22px" }}>
              <Skeleton width={40} height={13} />
            </div>

            {/* Dates */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: "8px",
                marginTop: "8px",
              }}
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} height={38} borderRadius={9} />
              ))}
            </div>

            {/* Time label */}
            <div style={{ marginTop: "22px" }}>
              <Skeleton width={40} height={13} />
            </div>

            {/* Time slots */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "9px",
                marginTop: "8px",
              }}
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} height={38} borderRadius={8} />
              ))}
            </div>

            {/* Continue button */}
            <div style={{ marginTop: "20px" }}>
              <Skeleton width="100%" height={48} borderRadius={8} />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
