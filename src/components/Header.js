import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="app-header">
    <nav className="app-navbar">
      {/* maybe put an icon here later */}
      <NavLink to="/"> Home </NavLink>
    </nav>
    <div className="nav-branding">
      <div className="nav-brand-title"><h2>City Weather</h2></div>
      <div className="nav-brand-icon"></div>
    </div>
  </header>
);

export default Header;
