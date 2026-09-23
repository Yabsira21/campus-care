import { Routes, Route } from "react-router-dom";
import Last from "./components/Last";
import DoctorList from "./components/DoctorList";
import DoctorDetail from "./components/DoctorDetail";
import Login from "./components/Login";
import Checkout from "./components/Checkout";
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
