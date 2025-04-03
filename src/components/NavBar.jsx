import React from "react";
import "../styles.css";

function NavBar() {
  return (
    <nav className="navbar">
  <h1>VIT Film Society Archive.</h1>
  <div className="social-buttons">
    <a href="https://www.instagram.com/vitfilmsociety/" target="_blank" className="social-button">
      <img src="https://img.freepik.com/free-vector/instagram-logo_1199-122.jpg?semt=ais_hybrid" alt="Instagram" />
    </a>
    <a href="https://www.youtube.com/@VITFilmSociety" target="_blank" className="social-button">
      <img src="https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-512.png" alt="YouTube" />
    </a>
  </div>
</nav>

  );
}

export default NavBar;
