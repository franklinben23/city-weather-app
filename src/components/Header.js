import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="app-header">
    <nav className="app-navbar">
      {/* maybe put an icon here later */}
      <NavLink to="/"> Home </NavLink>
    </nav>
    <div className="nav-icon">
      {/* import an icon later */}
    </div>
  </header>
);

export default Header;
