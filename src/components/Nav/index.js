import React from 'react';
import { NavLink } from 'react-router-dom';
import { CATEGORIES } from '../../data/photos';

function Nav() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#/" className="site-logo">
          <span className="logo-icon" role="img" aria-label="camera">
            📸
          </span>
          <span className="logo-text">Photo Port</span>
        </a>
        <nav aria-label="Primary">
          <ul className="nav-list">
            {CATEGORIES.map((cat) => (
              <li key={cat.name}>
                <NavLink
                  to={`/${cat.name}`}
                  className={({ isActive }) => (isActive ? 'nav-link nav-link--active' : 'nav-link')}
                >
                  {cat.name.charAt(0).toUpperCase() + cat.name.slice(1)}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? 'nav-link nav-link--active' : 'nav-link')}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
