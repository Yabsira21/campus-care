import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import { doctors } from "../data/doctors";
import "./DoctorList.css";

export default function DoctorList() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("all");
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [minRating, setMinRating] = useState(0);

  const departments = useMemo(
    () => ["all", ...new Set(doctors.map((d) => d.department))],
    [],
  );

  const filtered = useMemo(() => {
    return doctors.filter((d) => {
      if (search && !d.name.toLowerCase().includes(search.toLowerCase()))
        return false;
      if (department !== "all" && d.department !== department) return false;
      if (onlyAvailable && d.status !== "available") return false;
      if (minRating && d.rating < minRating) return false;
      return true;
    });
  }, [search, department, onlyAvailable, minRating]);

  return (
    <>
      {/* <Navbar /> */}

      <section className="doctors-hero">
        <div className="doctors-hero-decoration deco-circle" />
        <div className="doctors-hero-decoration deco-square" />
        <div className="doctors-hero-decoration deco-circle-two" />

        <div className="container centered">
          <span className="eyebrow">FIND A DOCTOR</span>
          <h1>
            Browse campus doctors and
            <br />
            book a visit in <span>minutes</span>
          </h1>
          <p>
            Filter by department, check who's free today and pick a time that
            fits your schedule.
          </p>

          <div className="search-card">
            <input
              type="text"
              placeholder="Search by doctor name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            >
              {departments.map((dep) => (
                <option key={dep} value={dep}>
                  {dep === "all" ? "All departments" : dep}
                </option>
              ))}
            </select>

            <button type="button" className="search-button">
              Search
            </button>
          </div>
        </div>
      </section>

      <section className="section doctors-body">
        <div className="container doctors-layout">
          <aside className="filters-card">
            <h3>Filters</h3>

            <div className="filter-group">
              <span className="filter-label">Department</span>
              {departments
                .filter((d) => d !== "all")
                .map((dep) => (
                  <label key={dep} className="filter-check">
                    <input
                      type="radio"
                      name="department"
                      checked={department === dep}
                      onChange={() => setDepartment(dep)}
                    />
                    {dep}
                  </label>
                ))}
              <label className="filter-check">
                <input
                  type="radio"
                  name="department"
                  checked={department === "all"}
                  onChange={() => setDepartment("all")}
                />
                All departments
              </label>
            </div>

            <div className="filter-group">
              <span className="filter-label">Availability</span>
              <label className="filter-check">
                <input
                  type="checkbox"
                  checked={onlyAvailable}
                  onChange={(e) => setOnlyAvailable(e.target.checked)}
                />
                Available today only
              </label>
            </div>

            <div className="filter-group">
              <span className="filter-label">Minimum rating</span>
              <div className="rating-select">
                {[4, 4.5, 4.8].map((r) => (
                  <button
                    key={r}
                    type="button"
                    className={
                      minRating === r
                        ? "rating-pill rating-pill-active"
                        : "rating-pill"
                    }
                    onClick={() => setMinRating(minRating === r ? 0 : r)}
                  >
                    ★ {r}+
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="clear-link"
              onClick={() => {
                setSearch("");
                setDepartment("all");
                setOnlyAvailable(false);
                setMinRating(0);
              }}
            >
              Clear all filters
            </button>
          </aside>

          <div className="doctors-list">
            <div className="list-header">
              <span>
                Showing {filtered.length} of {doctors.length} doctors
              </span>
            </div>

            {filtered.length === 0 ? (
              <div className="empty-state">
                No doctors match those filters. Try clearing a filter above.
              </div>
            ) : (
              filtered.map((doctor) => (
                <div key={doctor.id} className="doctor-row">
                  <div
                    className="doctor-avatar"
                    style={{ background: doctor.color }}
                  >
                    {doctor.initials}
                  </div>

                  <div className="doctor-info">
                    <h4>{doctor.name}</h4>
                    <p className="doctor-department">{doctor.department}</p>

                    <div className="doctor-tags">
                      <span className="rating">
                        ★ {doctor.rating.toFixed(1)}
                      </span>
                      <span className="pill-tag">
                        {doctor.experience} experience
                      </span>
                      {doctor.status === "available" ? (
                        <span className="badge-available">
                          <i /> Available today
                        </span>
                      ) : (
                        <span className="badge-busy">Fully booked</span>
                      )}
                    </div>
                  </div>

                  <div className="doctor-actions">
                    <Link
                      to={`/doctors/${doctor.id}`}
                      className="btn btn-outline"
                    >
                      View profile
                    </Link>
                    <Link
                      to={`/doctors/${doctor.id}`}
                      className="btn btn-primary"
                    >
                      Book appointment
                    </Link>
                  </div>
                </div>
              ))
            )}

            <div className="pagination">
              <span className="page-dot page-dot-active">1</span>
              <span className="page-dot">2</span>
              <span className="page-dot">3</span>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
}
