import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import DoctorList from "./pages/DoctorList";
import DoctorDetail from "./pages/DoctorDetail";
// import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import Layout from "./pages/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./components/RequireAuth";
import { useAuth } from "./store/auth";
import Appointment from "./pages/Appointments";
import NotFound from "./pages/NotFound";
import LoginLoading from "./components/LoginLoading";
import ErrorBoundary from "./components/ErrorBoundary";
import { lazy, Suspense } from "react";

export default function App() {
  const isLoggedin = useAuth((s) => s.isLoggedIn);
  // const Login = lazy(() => import("./pages/Login"));
  const Login = lazy(
    () =>
      new Promise((resolve) =>
        setTimeout(() => resolve(import("./pages/Login")), 3000),
      ),
  );
  return (
    <>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<Landing />} />
            <Route path="/doctorlist" element={<DoctorList />} />
            <Route path="/doctor/:id" element={<DoctorDetail />} />
            <Route path="/appointments" element={<Appointment />} />
          </Route>
          <Route
            path="/checkout"
            element={
              <RequireAuth isLoggedIn={isLoggedin}>
                <Checkout />
              </RequireAuth>
            }
          />
          <Route
            path="/login"
            element={
              <Suspense fallback={<LoginLoading />}>
                <Login />
              </Suspense>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer
          position="top-center"
          hideProgressBar
          theme="dark"
          // transition={Slide}
        />
      </ErrorBoundary>
    </>
  );
}
