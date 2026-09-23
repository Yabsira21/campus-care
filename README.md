# CampusCare UI

Styling-and-markup-only React app for the CampusCare mini-project, styled after
the Tekkah healthcare UI (pink + teal palette, rounded cards, pill buttons).
No booking logic, validation, auth, or data fetching is wired up — every screen
is static JSX + CSS so you can drop in your own state, routes params, and API
calls on top of it.

## Pages

- `/` — Landing page (hero, search card, about section, departments, CTA)
- `/doctors` — Doctor list with a simplified filter sidebar
- `/doctors/:id` — Doctor detail page with a booking sidebar (static example doctor)
- `/checkout` — Booking summary + patient details form
- `/signin` — Sign in only, no sign-up page

## Run it

```bash
npm install
npm run dev
```

## Structure

```
src/
  components/   Navbar, Footer, DoctorCard, DepartmentFilter
  pages/        Home, Doctors, DoctorDetail, Checkout, SignIn
  data/         doctors.js — static placeholder data for rendering
  index.css     design tokens (color/type/radius) + shared button/pill styles
```

## Where to add real logic

- `data/doctors.js` → replace with a fetch/hook once you have an API
- `DoctorDetail.jsx` → read the `:id` route param (`useParams`) instead of `doctors[0]`
- `Checkout.jsx` / `SignIn.jsx` forms → add `useState` + submit handlers + validation
- `DepartmentFilter.jsx` → wire checkboxes to actual filter state
