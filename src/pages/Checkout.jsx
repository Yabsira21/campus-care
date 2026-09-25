import "./Checkout.css";
import confetti from "canvas-confetti";

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppointment } from "../store/appointment";

function validate(form) {
  const errors = {};

  if (!form.name.trim()) {
    errors.name = "Full name is required";
  }

  if (!form.studentId.trim()) {
    errors.studentId = "Student ID is required";
  }

  if (!form.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!form.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!/^(?:\+251|0)9\d{8}$/.test(form.phone)) {
    errors.phone = "Use 09... or +2519...";
  }

  return errors;
}

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();

  const addItem = useAppointment((s) => s.addItem);

  const { doctor, selectedDay, selectedTime } = location.state || {};

  const [form, setForm] = useState({
    name: "",
    studentId: "",
    email: "",
    phone: "",
    reason: "",
  });

  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const errors = validate(form);

  useEffect(() => {
    if (!doctor || !selectedDay || !selectedTime) {
      toast.info("Please select a doctor and appointment time first.");
      navigate("/");
    }
  }, [doctor, selectedDay, selectedTime, navigate]);

  function handleChange(e) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleBlur(e) {
    const { name } = e.target;

    setTouched({
      ...touched,
      [name]: true,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const errors = validate(form);

    if (Object.keys(errors).length > 0) {
      setTouched({
        name: true,
        studentId: true,
        email: true,
        phone: true,
      });

      return;
    }

    setSubmitting(true);

    try {
      // Later this is where you'll call your backend
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Booking:", {
        doctor,
        selectedDay,
        selectedTime,
        ...form,
      });

      const appointment = {
        id: crypto.randomUUID(),
        doctor: doctor.name,
        department: doctor.department,
        date: selectedDay,
        time: selectedTime,
        status: "Upcoming",
        reason: form.reason,
        initials: doctor.initials,
      };

      addItem(appointment);

      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
      });

      toast.success("Appointment booked successfully!");

      navigate("/");
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  }

  if (!doctor || !selectedDay || !selectedTime) {
    return null;
  }

  return (
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

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <label className="form-field">
                <span>Full name</span>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={touched.name && !!errors.name}
                  aria-describedby={
                    touched.name && errors.name ? "name-error" : undefined
                  }
                  placeholder="e.g. Liya Tadesse"
                />

                {touched.name && errors.name && (
                  <p className="error-msg" id="name-error" role="alert">
                    {errors.name}
                  </p>
                )}
              </label>

              <label className="form-field">
                <span>Student ID</span>

                <input
                  type="text"
                  name="studentId"
                  value={form.studentId}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={touched.studentId && !!errors.studentId}
                  aria-describedby={
                    touched.studentId && errors.studentId
                      ? "studentId-error"
                      : undefined
                  }
                  placeholder="e.g. AAU-2023-0456"
                />

                {touched.studentId && errors.studentId && (
                  <p className="error-msg" id="studentId-error" role="alert">
                    {errors.studentId}
                  </p>
                )}
              </label>
            </div>

            <div className="form-row">
              <label className="form-field">
                <span>Email</span>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={touched.email && !!errors.email}
                  aria-describedby={
                    touched.email && errors.email ? "email-error" : undefined
                  }
                  placeholder="you@university.edu"
                />

                {touched.email && errors.email && (
                  <p className="error-msg" id="email-error" role="alert">
                    {errors.email}
                  </p>
                )}
              </label>

              <label className="form-field">
                <span>Phone number</span>

                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={touched.phone && !!errors.phone}
                  aria-describedby={
                    touched.phone && errors.phone ? "phone-error" : undefined
                  }
                  placeholder="+251 9xx xxx xxx"
                />

                {touched.phone && errors.phone && (
                  <p className="error-msg" id="phone-error" role="alert">
                    {errors.phone}
                  </p>
                )}
              </label>
            </div>

            <label className="form-field">
              <span>Reason for visit (optional)</span>

              <textarea
                rows="4"
                name="reason"
                value={form.reason}
                onChange={handleChange}
                placeholder="Briefly describe what's going on"
              />
            </label>

            <button
              type="submit"
              className="btn btn-primary btn-block"
              disabled={submitting || Object.keys(errors).length > 0}
            >
              {submitting ? "Booking..." : "Confirm booking"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
