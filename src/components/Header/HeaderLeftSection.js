import React from "react";
import { Link } from "react-router-dom";

export default function HeaderLeftSection() {
  const handleLogout = () => {
    // Implement logout logic here
    // For example, clear local storage and redirect to the login page
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="logo-location-content">
      <Link to="/" className="website-name">
        Recipes App
      </Link>
      <Link to="/FavoriteRecepies" className="fav-receipies">
        Fav Recipes
      </Link>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
