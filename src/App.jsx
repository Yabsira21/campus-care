import { Routes, Route } from "react-router-dom";
import Last from "./pages/Last";
import DoctorList from "./pages/DoctorList";
import DoctorDetail from "./pages/DoctorDetail";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
// import Last from "./components/Last";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Last />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/doctorlist" element={<DoctorList />} />
      <Route path="/doctor" element={<DoctorDetail />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
