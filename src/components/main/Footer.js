import React from 'react';
import { Link } from 'react-router-dom';
import { HiExternalLink } from 'react-icons/hi';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-header">
        <Link to="editor-page" className="btn-one">
          Create your Resume
        </Link>
      </div>
      <div className="footer-content">
        <section className="footer-content-section">
          <h3>
            <Link to="/" className="footer-link text-bold">
              ResGenie
              <HiExternalLink className="external-link-icon" />
            </Link>
          </h3>
        </section>
        <section className="footer-content-section">
          <h3>Source Code</h3>
          <a className="footer-link" href="https://github.com/starter-code/res-gen">
            GitHub
            <HiExternalLink className="external-link-icon" />
          </a>
        </section>
        <section className="footer-content-section">
          <h3>Information</h3>
          <Link className="footer-link" to="faq-page">
            FAQ
          </Link>
        </section>
        <section className="footer-content-section">
          <h3>Developers</h3>
          <a
            className="footer-link"
            href="https://github.com/davidholyko"
            target="_blank"
            rel="noreferrer"
          >
            David Ko
            <HiExternalLink className="external-link-icon" />
          </a>
          <a
            className="footer-link"
            href="https://www.linkedin.com/in/patrick-dohn/"
            target="_blank"
            rel="noreferrer"
          >
            Patrick Dohn
            <HiExternalLink className="external-link-icon" />
          </a>
        </section>
      </div>
      <div className="footer-bottom">
        <h6>
          Copyright ©2020 Created by
          <a
            className="footer-link"
            href="https://github.com/starter-code/"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            Starter Code
            <HiExternalLink className="external-link-icon" />
          </a>
        </h6>
      </div>
    </footer>
  );
};
