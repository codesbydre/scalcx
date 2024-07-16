import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactInfoPage from "./pages/ContactInfoPage";
import CertificationsPage from "./pages/CertificationsPage";
import RequestProposalPage from "./pages/RequestProposalPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container-lg">
            <NavLink className="navbar-brand" to="/">
              <img
                className="navbar-brand-logo"
                src={`${process.env.PUBLIC_URL}/scalcx-logo.png`}
                alt="SCALX Logo"
                style={{ height: "60px" }}
              />
              Southern California Commissioning
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item px-3">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item px-3">
                  <NavLink className="nav-link" to="/contact-info">
                    Contact Info
                  </NavLink>
                </li>
                <li className="nav-item px-3">
                  <NavLink className="nav-link" to="/certifications">
                    Certifications and Affiliations
                  </NavLink>
                </li>
                <li className="nav-item px-3">
                  <NavLink className="nav-link" to="/request-proposal">
                    Request a Proposal
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <hr />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact-info" element={<ContactInfoPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/request-proposal" element={<RequestProposalPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
