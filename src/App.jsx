import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import DoctorList from "./pages/DoctorList";
import DoctorDetail from "./pages/DoctorDetail";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import Layout from "./pages/Layout";
// import Last from "./components/Last";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/doctorlist" element={<DoctorList />} />
      </Route>
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/doctor" element={<DoctorDetail />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
