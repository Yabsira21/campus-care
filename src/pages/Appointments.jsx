import { useEffect, useState } from "react";
import { useAppointment } from "../store/appointment";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import "./Appointments.css";

export default function Appointment() {
  const items = useAppointment((s) => s.items);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <main className="appointments-page">
        <section className="appointments-hero">
          <div className="container">
            <span className="eyebrow">MY APPOINTMENTS</span>

            <h1>
              Your appointments,
              <br />
              all in <span>one place.</span>
            </h1>

            <p>
              Keep track of your upcoming visits, previous appointments, and
              your campus healthcare journey.
            </p>
          </div>
        </section>

        <section className="appointments-section">
          <div className="container">
            <div className="appointments-header">
              <div>
                <h2>Appointments</h2>
                <p>Manage your scheduled and previous visits.</p>
              </div>
            </div>

            <div className="appointments-list">
              {Array.from({ length: 3 }).map((_, index) => (
                <article
                  key={index}
                  className="appointment-card appointment-skeleton"
                >
                  <div className="appointment-doctor">
                    <Skeleton circle width={52} height={52} />

                    <div className="appointment-skeleton-doctor">
                      <Skeleton width={140} height={16} />
                      <Skeleton width={100} height={12} />
                    </div>
                  </div>

                  <div className="appointment-details">
                    <div className="appointment-detail">
                      <Skeleton width={45} height={11} />
                      <Skeleton width={100} height={14} />
                    </div>

                    <div className="appointment-detail">
                      <Skeleton width={45} height={11} />
                      <Skeleton width={75} height={14} />
                    </div>

                    <div className="appointment-detail">
                      <Skeleton width={55} height={11} />
                      <Skeleton width={120} height={14} />
                    </div>
                  </div>

                  <div className="appointment-right">
                    <Skeleton width={70} height={24} borderRadius={20} />
                    <Skeleton width={80} height={13} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="appointments-page">
      <section className="appointments-hero">
        <div className="container">
          <span className="eyebrow">MY APPOINTMENTS</span>

          <h1>
            Your appointments,
            <br />
            all in <span>one place.</span>
          </h1>

          <p>
            Keep track of your upcoming visits, previous appointments, and your
            campus healthcare journey.
          </p>
        </div>
      </section>

      <section className="appointments-section">
        <div className="container">
          <div className="appointments-header">
            <div>
              <h2>Appointments</h2>
              <p>Manage your scheduled and previous visits.</p>
            </div>
          </div>

          {items.length === 0 ? (
            <div className="appointments-empty">
              <div className="appointments-empty-icon">+</div>

              <h2>No appointments yet</h2>

              <p>
                You don't have any appointments scheduled. When you book a
                visit, it will appear here.
              </p>
            </div>
          ) : (
            <div className="appointments-list">
              {items.map((appointment) => (
                <article key={appointment.id} className="appointment-card">
                  <div className="appointment-doctor">
                    <div className="appointment-avatar">
                      {appointment.initials}
                    </div>

                    <div>
                      <h3>{appointment.doctor}</h3>
                      <span>{appointment.department}</span>
                    </div>
                  </div>

                  <div className="appointment-details">
                    <div className="appointment-detail">
                      <span className="detail-label">Date</span>
                      <strong>{appointment.date}</strong>
                    </div>

                    <div className="appointment-detail">
                      <span className="detail-label">Time</span>
                      <strong>{appointment.time}</strong>
                    </div>

                    <div className="appointment-detail reason">
                      <span className="detail-label">Reason</span>
                      <strong>{appointment.reason || "Not provided"}</strong>
                    </div>
                  </div>

                  <div className="appointment-right">
                    <span
                      className={`appointment-status ${appointment.status.toLowerCase()}`}
                    >
                      {appointment.status}
                    </span>

                    <button
                      className={
                        appointment.status === "Upcoming"
                          ? "appointment-action"
                          : "appointment-action secondary"
                      }
                    >
                      View details
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
