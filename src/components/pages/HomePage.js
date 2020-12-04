import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div className="home-page">
      <nav className="navbar">
        <h1 className="title">ResGenie</h1>
        <Link className="nav-link" to="editor-page">
          Get Started!
        </Link>
      </nav>
      <div className="hero-section">
        <div className="hero-one">this is hero</div>
        <div className="hero-two">this is hero</div>
      </div>
      <div className="triple-column-section">
        <div className="triple-one">this is hero</div>
        <div className="triple-two">this is hero</div>
        <div className="triple-three">this is hero</div>
      </div>
      <div className="choose-template-section">
        <div>
          <h2 className="">Pick your template here!!</h2>
        </div>
        <div className="template-pick">template choice</div>
      </div>
      <div className="youtube-how-to-section">
        <div className="video-demo">This is video demo</div>
      </div>
      <div className="footer-section">This is footer</div>
    </div>
  );
};
