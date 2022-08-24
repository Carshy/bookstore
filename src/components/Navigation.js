import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

function Navigation() {
  return (
    <nav className="nav-section">
      <a href="/" className="bookstore-logo">
        Bookstore CMS
      </a>
      <ul className="nav-group">
        <li>
          <Link to="/" className="nav-items">
            BOOKS
          </Link>
        </li>
        <li>
          <Link to="/categories" className="nav-items">
            CATEGORIES
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
