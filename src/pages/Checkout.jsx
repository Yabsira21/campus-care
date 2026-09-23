import "./Checkout.css";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();

  const { doctor, selectedDay, selectedTime } = location.state || {};

  useEffect(() => {
    if (!doctor || !selectedDay || !selectedTime) {
      toast.info("Please select a doctor and appointment time first.");

      navigate("/");
    }
  }, [doctor, selectedDay, selectedTime, navigate]);

  if (!doctor || !selectedDay || !selectedTime) {
    return null;
  }
  return (
    <>
      {/* <Navbar /> */}

      <section className="section checkout-section">
        <div className="checkout-eyebrow-row">
          <span className="eyebrow">ALMOST THERE</span>
          <h2>Confirm your appointment</h2>
        </div>

        <div className="checkout-layout">
          <div className="checkout-summary">
            <div className="summary-card">
              <div className="summary-doctor">
                <div
                  className="summary-avatar"
                  style={{ background: doctor.color }}
                >
                  {doctor.initials}
                </div>
                <div>
                  <h4>{doctor.name}</h4>
                  <p>{doctor.department}</p>
                </div>
              </div>

              <div className="summary-line">
                <span>Date</span>
                <span>{selectedDay}</span>
              </div>

              <div className="summary-line">
                <span>Time</span>
                <span>{selectedTime}</span>
              </div>
            </div>

            <div className="summary-note">
              <p>
                You'll get a confirmation with a check-in code once your booking
                is submitted.
              </p>
            </div>
          </div>

          <div className="checkout-form">
            <h3>Your details</h3>

            <form>
              <div className="form-row">
                <label className="form-field">
                  <span>Full name</span>
                  <input type="text" placeholder="e.g. Liya Tadesse" />
                </label>
                <label className="form-field">
                  <span>Student ID</span>
                  <input type="text" placeholder="e.g. AAU-2023-0456" />
                </label>
              </div>

              <div className="form-row">
                <label className="form-field">
                  <span>Email</span>
                  <input type="email" placeholder="you@university.edu" />
                </label>
                <label className="form-field">
                  <span>Phone number</span>
                  <input type="tel" placeholder="+251 9xx xxx xxx" />
                </label>
              </div>

              <label className="form-field">
                <span>Reason for visit (optional)</span>
                <textarea
                  rows="4"
                  placeholder="Briefly describe what's going on"
                ></textarea>
              </label>

              <button type="submit" className="btn btn-primary btn-block">
                Confirm booking
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
