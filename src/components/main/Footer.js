import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-header">
        <h3>Get going!</h3>
        <Link to="editor-page" className="btn-one">
          Create your Resume!
        </Link>
      </div>
      <div className="footer-content">
        <div className="footer-content-section">
          <Link to="/" className="footer-title">
            ResGenie
          </Link>
        </div>
        <div className="footer-content-section">
          <h3>Check out this project on GitHub</h3>
          <a
            className="footer-link"
            href="https://github.com/starter-code/res-gen"
          >
            GitHub
          </a>
        </div>
        <div className="footer-content-section">
          <h3>Information</h3>
          <Link className="footer-link" to="faq-page">
            FAQ
          </Link>
        </div>
        <div className="footer-content-section">
          <h3>Made by:</h3>
          <a className="footer-link" href="https://github.com/davidholyko">
            David Ko
          </a>
          <a
            className="footer-link"
            href="https://www.linkedin.com/in/patrick-dohn/"
          >
            Patrick Dohn
          </a>
        </div>
      </div>
      <div className="footer-foot">
        <h6>Copyright stuff can go here if we need it??</h6>
      </div>
    </footer>
  );
};
