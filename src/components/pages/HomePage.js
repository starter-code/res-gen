import React from 'react';
import { Link } from 'react-router-dom';
import FolesCoverImg from '../../images/FolesCoverImg.png';
import MahomesCoverImg from '../../images/MahomesCoverImg.png';

export const HomePage = () => {
  return (
    <div className="home-page">
      <nav className="navbar">
        <h1 className="title">ResGenie</h1>
        <Link className="nav-link" to="editor-page">
          Get Started!
        </Link>
        <Link className="nav-link" to="editor-page">
          FAQ
        </Link>
      </nav>
      <div className="hero-section">
        <div className="hero-one">
          <h3>Resumes made simple!</h3>
          <ul className="hero-list">
            <li className="hero-items">point one</li>
            <li className="hero-items">point two</li>
            <li className="hero-items">point three</li>
          </ul>
          <button className="btn-one">Create your Resume!</button>
        </div>
        <div className="hero-two">
          <img className="hero-image" src={FolesCoverImg} />
        </div>
      </div>
      <div className="triple-column-section">
        <div className="triple-header">
          <h1>Create reusmes that get results! In 3 easy steps!</h1>
        </div>
        <div className="triple-content">
          <div className="triple-one">Pick a template</div>
          <div className="triple-two">Update some JSON</div>
          <div className="triple-three">Download and land your dream job</div>
        </div>
      </div>
      <div className="choose-template-section">
        <div>
          <h2 className="">Pick your template here!!</h2>
        </div>
        <div className="template-pick">
          <img className="template-pick-image" src={MahomesCoverImg} />
        </div>
        <div className="template-pick">
          <img className="template-pick-image" src={FolesCoverImg} />
        </div>
      </div>
      <div className="youtube-how-to-section">
        <div className="video-demo">This is video demo</div>
      </div>
      <div className="footer-section">
        <div className="footer-header">
          <h3>Get going!</h3>
          <button className="btn-one">Create your Resume!</button>
        </div>
        <div className="footer-content">
          <div className="footer-content-section">
            <h2>ResGenie</h2>
          </div>
          <div className="footer-content-section">
            <h3>Check out this project on GitHub</h3>
            <Link
              className="footer-link"
              src="https://github.com/starter-code/res-gen"
            >
              GitHub
            </Link>
            <Link
              className="footer-link"
              src="https://github.com/starter-code/res-gen"
            >
              GitHub
            </Link>
          </div>
          <div className="footer-content-section">
            <h3>Information</h3>
            <Link
              className="footer-link"
              src="https://github.com/starter-code/res-gen"
            >
              FAQ
            </Link>
            <Link
              className="footer-link"
              src="https://github.com/starter-code/res-gen"
            >
              FAQ
            </Link>
          </div>
          <div className="footer-content-section">
            <h3>Column three</h3>
          </div>
        </div>
        <div className="footer-foot">
          <h6>Copyright stuff can go here if we need it??</h6>
        </div>
      </div>
    </div>
  );
};
