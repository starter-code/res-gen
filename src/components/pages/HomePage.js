import React from 'react';
import { Link } from 'react-router-dom';
import FolesCoverImg from '../../images/FolesCoverImg.png';
import MahomesCoverImg from '../../images/MahomesCoverImg.png';
import { NavBar, Footer } from 'src/components/main';

export const HomePage = () => {
  return (
    <main className="home-page">
      <NavBar />
      <section className="hero-section">
        <div className="hero-one">
          <h3>Generate your resume with ResGenie</h3>
          <ul className="hero-list">
            <li className="hero-items">Made by developers for developers.</li>
            <li className="hero-items">Preview your resume as a real PDF.</li>
          </ul>
          <Link to="editor-page" className="btn-one">
            Create your Resume!
          </Link>
        </div>
        <div className="hero-two">
          <img className="hero-image" src={FolesCoverImg} />
        </div>
      </section>
      {/* TODO: restore this section with meaningful content */}
      <section className="hidden triple-column-section">
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
        <h2>Choose your resume template</h2>
        <div className="template-picker">
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
        </div>
      </section>
      {/* TODO: restore this section with meaningful content */}
      <section className="hidden youtube-how-to-section">
        <div className="video-demo">This is video demo</div>
      </section>
      <Footer />
    </main>
  );
};
