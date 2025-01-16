import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import Customer from "./pages/Customer";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

import ProtectedRoute from "./components/protection/ProtectedRoute";
import PublicRoute from "./components/protection/PublicRoute";

import { UserProvider } from "./components/context/UserProvider";

function App() {
  const url = window.location.href;

  const isAdminPage = url.includes("/admin");

  return (
    <UserProvider>
      <Router>
        {!isAdminPage && <Navbar />}
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          />
          <Route
            path="/about"
            element={
              <PublicRoute>
                <About />
              </PublicRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <PublicRoute>
                <Contact />
              </PublicRoute>
            }
          />
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/customer"
            element={
              <ProtectedRoute>
                <Customer />
              </ProtectedRoute>
            }
          />
        </Routes>
        {!isAdminPage && <Footer />}
      </Router>
    </UserProvider>
  );
}

export default App;
