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
          </aside>

          <div className="doctors-list">
            {filtered.length === 0 ? (
              <div className="empty-state">
                No doctors match those filters. Try clearing a filter above.
              </div>
            ) : (
              filtered.map((doctor) => (
                <div key={doctor.id} className="doctor-card">
                  <div
                    className="doctor-photo"
                    style={{
                      background: doctor.color,
                      backgroundImage: doctor.image
                        ? `url(${doctor.image})`
                        : undefined,
                      backgroundSize: "cover",
                    }}
                  >
                    {!doctor.image && doctor.initials}
                  </div>

                  <div className="doctor-content">
                    <div className="doctor-header">
                      <div className="doctor-name-row">
                        <h4>{doctor.name}</h4>
                      </div>
                    </div>

                    <div className="doctor-meta">
                      <span>👤 {doctor.department}</span>
                    </div>

                    <p className="doctor-description">
                      {doctor.description ||
                        "Experienced healthcare professional providing quality care and support to students."}
                    </p>

                    <div className="doctor-actions">
                      <Link
                        to={`/doctor/${doctor.id}`}
                        className="doctor-profile-btn"
                      >
                        View profile
                        <span>›</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
