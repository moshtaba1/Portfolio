import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [btnActive, setBtnActive] = useState(1);

  return (
    <div className="navbar">
      <div className="container">
        <div className="nav-wraper">
          <a href="#home">
            <div
              onClick={() => setBtnActive(1)}
              className={`nav-btn ${btnActive === 1 ? "active" : ""}`}
            >
              Home
            </div>
          </a>
          <a href="#project"><div
            onClick={() => setBtnActive(2)}
            className={`nav-btn ${btnActive === 2 ? "active" : ""}`}
          >
            Project
          </div></a>
          <a href="#contact"><div
            onClick={() => setBtnActive(3)}
            className={`nav-btn ${btnActive === 3 ? "active" : ""}`}
          >
            Contact
          </div></a>
        </div>
      </div>
    </div>
  );
}
