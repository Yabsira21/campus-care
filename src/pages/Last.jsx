import "./Last.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const nurses = [
  {
    name: "Ashley Johnson",
    role: "Travel Nurse",
    image: "https://picsum.photos/seed/nurse1/180/180",
    side: "left-top",
  },
  {
    name: "Diane Wilson",
    role: "Dream hospital",
    image: "https://picsum.photos/seed/nurse2/180/180",
    side: "left-middle",
  },
  {
    name: "Jake Collins",
    role: "Care hospital",
    image: "https://picsum.photos/seed/nurse3/180/180",
    side: "left-bottom",
  },
  {
    name: "Sarah Smith",
    role: "Travel Nurse",
    image: "https://picsum.photos/seed/nurse4/180/180",
    side: "right-top",
  },
  {
    name: "Chris Adams",
    role: "Care hospital",
    image: "https://picsum.photos/seed/nurse5/180/180",
    side: "right-middle",
  },
  {
    name: "Ryan Brown",
    role: "Care hospital",
    image: "https://picsum.photos/seed/nurse6/180/180",
    side: "right-bottom",
  },
];

function Logo() {
  return (
    <a href="#home" className="logo">
      <span className="logo-mark">
        <span className="logo-wing logo-wing-one" />
        <span className="logo-wing logo-wing-two" />
        <span className="logo-wing logo-wing-three" />
      </span>
      CampusCare
    </a>
  );
}

function FloatingPerson({ person }) {
  return (
    <div className={`floating-person ${person.side}`}>
      <div className="person-photo-wrap">
        <img src={person.image} alt={person.name} />
      </div>
      <div className="person-name">{person.name}</div>
      {person.side.includes("top") ? (
        <span className="available">
          <i />
          Available
        </span>
      ) : (
        <span className="person-role">{person.role}</span>
      )}
    </div>
  );
}

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="navbar">
//       <div className="nav-inner">
//         <Logo />

//         <nav className={menuOpen ? "nav-links open" : "nav-links"}>
//           <a href="#about" onClick={() => setMenuOpen(false)}>
//             About us
//           </a>
//           <a href="#hospitals" onClick={() => setMenuOpen(false)}>
//             Find hospitals
//           </a>
//           <a href="#nurses" onClick={() => setMenuOpen(false)}>
//             Find nurses
//           </a>
//         </nav>

//         <div className="nav-actions">
//           <a href="#signup" className="signup-link hidden">
//             Sign up
//           </a>
//           <a href="#login" className="login-button">
//             Login
//           </a>
//         </div>

//         <button
//           className={menuOpen ? "hamburger active" : "hamburger"}
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle menu"
//         >
//           <span />
//           <span />
//           <span />
//         </button>
//       </div>
//     </header>
//   );
// }

function About() {
  return (
    <section className="about-section section" id="about">
      <div className="about-image-column">
        <div className="rating-card">
          <div className="rating-stars">★ ★ ★ ★ ★</div>
          <strong>4.8</strong>
          <small>
            What people say
            <br />
            about us
          </small>
          <div className="mini-avatars">
            <img src="https://picsum.photos/seed/a1/35/35" alt="" />
            <img src="https://picsum.photos/seed/a2/35/35" alt="" />
            <img src="https://picsum.photos/seed/a3/35/35" alt="" />
          </div>
        </div>

        <div className="about-circle">
          <img src="doctor.jpg" alt="Healthcare professionals" />
        </div>

        <div className="about-plant">✦</div>
      </div>

      <div className="about-content">
        <span className="eyebrow">ABOUT US</span>

        <h2>
          Who we are & how
          <br />
          our team is <strong>working</strong>
          <br />
          on CampusCare
        </h2>

        <p>
          CampusCare is changing the way healthcare professionals and hospitals
          connect. We believe talented nurses shouldn't have to spend their time
          searching through endless job listings.
        </p>

        <p>
          Instead, we make it possible for nurses to discover hospitals they are
          interested in and let hospitals find the right people for their teams.
        </p>

        <a href="#learn-more" className="text-link">
          Learn more <span>→</span>
        </a>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-decoration decoration-circle" />
      <div className="hero-decoration decoration-square" />
      <div className="hero-decoration decoration-circle-two" />

      <div className="plane-drawing">
        <span className="plane-line" />
        <span className="plane-icon">✈</span>
      </div>

      <div className="hero-content">
        <div className="floating-people">
          {nurses.map((person) => (
            <FloatingPerson key={person.name} person={person} />
          ))}
        </div>

        <div className="hero-heading">
          {/* <h1>
            Talented travel <strong>nurses</strong> do
            <br />
            not need <span>recruiters.</span>
          </h1> */}
          <h1>
            See a campus <strong>doctor</strong> without
            <br />
            the waiting room <span>stress.</span>
          </h1>

          <p>
            Browse clinic staff by department, check who's free today and book a
            visit in a couple of minutes — all from your student account.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Last() {
  return (
    <div className="tekkah-page">
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>

      <Footer />
    </div>
  );
}
