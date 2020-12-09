import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="navbar">
      <Link className="nav-title" to="/">
        ResGenie
      </Link>
      <Link className="nav-link" to="editor-page">
        Get Started!
      </Link>
      <Link className="nav-link" to="faq-page">
        FAQ
      </Link>
    </nav>
  );
};
