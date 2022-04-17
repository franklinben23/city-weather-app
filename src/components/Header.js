import React from 'react';
import { NavLink } from 'react-router-dom';
import { GiModernCity } from 'react-icons/gi';
import { FaHome } from 'react-icons/fa';

const Header = () => (
  <header className="app-header">
    <nav className="app-navbar">
      {/* maybe put an icon here later */}
      <NavLink to="/">
        <FaHome size={30} className="home-r" />
      </NavLink>
    </nav>
    <div className="nav-branding">
      <div className="nav-brand-title"><h2>City Weather</h2></div>
      <div className="nav-brand-icon">
        <GiModernCity size={25} />
      </div>
    </div>
  </header>
);

export default Header;
