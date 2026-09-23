import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./DoctorList.css";
import { useSearchParams } from "react-router-dom";

export default function DoctorList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dep = searchParams.get("department") || "all";
  const searchTerm = searchParams.get("search") || "";
  const [search, setSearch] = useState(searchTerm);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const departments = ["a", "b"];

  useEffect(() => {
    // const ctrl = new AbortController();
    async function load() {
      try {
        setLoading(true);
        const res = await fetch("/src/data/data.json", {
          // signal: ctrl.signal,
        });
        if (!res.ok) throw new Error("Could not load the menu");
        setDoctors(await res.json());
      } catch (e) {
        setError(e.message);
        console.log(e);
      } finally {
        setLoading(false);
      }
    }
    setTimeout(() => {
      load();
    }, 3000);
  }, []);

  const shown =
    dep == "all" ? doctors : doctors.filter((d) => d.department === dep);

  const shownWithSearchterm = shown.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (loading)
    return (
      <>
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

              <button
                type="button"
                className="search-button"
                onClick={() => {
                  console.log("Hi");
                  setSearchParams({
                    department: dep,
                    search: search,
                  });
                }}
              >
                Search
              </button>
            </div>
          </div>
        </section>
        <section className="section doctors-body skeleton-body">
          <div className="container doctors-layout">
            {/* Filter skeleton */}
            <aside className="filters-card skeleton-filter">
              <Skeleton
                width={75}
                height={20}
                baseColor="#eeeeef"
                highlightColor="#f8f8f9"
              />

              <div className="skeleton-filter-group">
                <Skeleton
                  width={90}
                  height={14}
                  baseColor="#eeeeef"
                  highlightColor="#f8f8f9"
                />

                {Array.from({ length: 4 }).map((_, i) => (
                  <div className="skeleton-filter-item" key={i}>
                    <Skeleton
                      circle
                      width={15}
                      height={15}
                      baseColor="#eeeeef"
                      highlightColor="#f8f8f9"
                    />

                    <Skeleton
                      width={80 + i * 8}
                      height={13}
                      baseColor="#eeeeef"
                      highlightColor="#f8f8f9"
                    />
                  </div>
                ))}
              </div>
            </aside>

            {/* Doctor cards */}
            <div className="doctors-list">
              {Array.from({ length: 4 }).map((_, i) => (
                <div className="doctor-card doctor-skeleton" key={i}>
                  {/* Doctor photo */}
                  <Skeleton
                    width={130}
                    height={165}
                    borderRadius={10}
                    baseColor="#eeeeef"
                    highlightColor="#f8f8f9"
                  />

                  {/* Doctor information */}
                  <div className="doctor-content">
                    {/* Name */}
                    <div className="skeleton-doctor-header">
                      <Skeleton
                        width={145}
                        height={19}
                        baseColor="#eeeeef"
                        highlightColor="#f8f8f9"
                      />

                      <Skeleton
                        width={48}
                        height={20}
                        borderRadius={20}
                        baseColor="#eeeeef"
                        highlightColor="#f8f8f9"
                      />
                    </div>

                    {/* Department */}
                    <div className="skeleton-meta">
                      <Skeleton
                        width={100}
                        height={13}
                        baseColor="#eeeeef"
                        highlightColor="#f8f8f9"
                      />
                    </div>

                    {/* Description */}
                    <div className="skeleton-description">
                      <Skeleton
                        width="92%"
                        height={12}
                        baseColor="#eeeeef"
                        highlightColor="#f8f8f9"
                      />

                      <Skeleton
                        width="78%"
                        height={12}
                        baseColor="#eeeeef"
                        highlightColor="#f8f8f9"
                      />

                      <Skeleton
                        width="55%"
                        height={12}
                        baseColor="#eeeeef"
                        highlightColor="#f8f8f9"
                      />
                    </div>

                    {/* Button */}
                    <div className="skeleton-actions">
                      <Skeleton
                        width={115}
                        height={36}
                        borderRadius={7}
                        baseColor="#eeeeef"
                        highlightColor="#f8f8f9"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  if (error) return <p className="err mt-2">Something went wrong!</p>;

  return (
    <>
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

            <button
              type="button"
              className="search-button"
              onClick={() => {
                setSearchParams({
                  department: dep,
                  search: search,
                });
              }}
            >
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
                .map((dept) => (
                  <label key={dept} className="filter-check">
                    <input
                      type="radio"
                      name="department"
                      checked={dep === dept}
                      onChange={() => setSearchParams({ department: dept })}
                    />
                    {dept}
                  </label>
                ))}
              <label className="filter-check">
                <input
                  type="radio"
                  name="department"
                  checked={dep === "all"}
                  onChange={() => setSearchParams({ department: "all" })}
                />
                All departments
              </label>
            </div>
          </aside>

          <div className="doctors-list">
            {shownWithSearchterm.length === 0 ? (
              <div className="empty-state">
                No doctors match those filters. Try clearing a filter above.
              </div>
            ) : (
              shownWithSearchterm.map((doctor) => (
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
