import React from 'react';
import { Link } from 'react-router-dom';
import FolesCoverImg from '../../images/FolesCoverImg.png';
import MahomesCoverImg from '../../images/MahomesCoverImg.png';

export const HomePage = () => {
  return (
    <main className="home-page">
      <nav className="navbar">
        <Link className="title" to="/">
          ResGenie
        </Link>
        <Link className="nav-link" to="editor-page">
          Get Started!
        </Link>
        <Link className="nav-link" to="faq-page">
          FAQ
        </Link>
      </nav>
      <section className="hero-section">
        <div className="hero-one">
          <h3>Resumes made simple!</h3>
          <ul className="hero-list">
            <li className="hero-items">point one</li>
            <li className="hero-items">point two</li>
            <li className="hero-items">point three</li>
          </ul>
          <Link to="editor-page" className="btn-one">
            Create your Resume!
          </Link>
        </div>
        <div className="hero-two">
          <img className="hero-image" src={FolesCoverImg} />
        </div>
      </section>
      <section className="triple-column-section">
        <div className="triple-header">
          <h1>Create resumes that get results! In 3 easy steps!</h1>
        </div>
        <div className="triple-content">
          <article className="triplet">
            <div className="design"> </div>
            <h3>title</h3>
            <p>content can go here put whatever you want</p>
          </article>
          <article className="triplet">
            <div className="design"> </div>
            <h3>title</h3>
            <p>content can go here put whatever you want</p>
          </article>
          <article className="triplet">
            <div className="design"> </div>
            <h3>title</h3>
            <p>content can go here put whatever you want</p>
          </article>
        </div>
      </section>
      <section className="choose-template-section">
        <div>
          <h2 className="">Pick your template here!!</h2>
        </div>
        <div className="template-pick">
          <Link to="editor-page">
            <img className="template-pick-image" src={MahomesCoverImg} />
          </Link>
        </div>
        <div className="template-pick">
          <Link to="editor-page">
            <img className="template-pick-image" src={FolesCoverImg} />
          </Link>
        </div>
      </section>
      <section className="youtube-how-to-section">
        <div className="video-demo">This is video demo</div>
      </section>
      <footer className="footer-section">
        <div className="footer-header">
          <h3>Get going!</h3>
          <Link to="editor-page" className="btn-one">
            Create your Resume!
          </Link>
        </div>
        <div className="footer-content">
          <div className="footer-content-section">
            <h2 className="footer-title">ResGenie</h2>
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
    </main>
  );
};
