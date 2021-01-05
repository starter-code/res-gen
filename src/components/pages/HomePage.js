import React from 'react';
import { Link } from 'react-router-dom';
import FolesCoverImg from '../../images/FolesCoverImg.png';
import MahomesCoverImg from '../../images/MahomesCoverImg.png';
import { NavBar, Footer } from 'src/components/main';
import { GrMultiple, GrDocumentText, GrEdit } from 'react-icons/gr';

export const HomePage = () => {
  return (
    <main className="home-page">
      <NavBar />
      <section className="hero-section">
        <div className="hero-one">
          <h3 className="m-0">Generate your resume with ResGenie</h3>
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
      <section className="triple-column-section">
        <div className="triple-header">
          <h2 className="section-title">Create resumes that get results!</h2>
          <p>
            Res-Genie is designed for developers to give them a platform to
            create and customize their resume using their skills in JSON and
            CSS.
          </p>
        </div>
        <div className="triple-content">
          <article className="triplet">
            <GrMultiple className="triplet-icon" />
            <h3>Choose your template</h3>
            <p className="triplet-text">
              Pick from our templates to find the one that best fits you.
            </p>
          </article>
          <article className="triplet">
            <GrEdit className="triplet-icon" />
            <h3>Modify content and styles</h3>
            <p className="triplet-text">
              Use your knowledge of JSON and CSS to build your resume.
            </p>
          </article>
          <article className="triplet">
            <GrDocumentText className="triplet-icon" />
            <h3>Download your resume</h3>
            <p className="triplet-text">
              Complete your resume and get on the job search!
            </p>
          </article>
        </div>
      </section>
      <section className="choose-template-section">
        <h2 className="section-title">Choose your resume template</h2>
        <div className="template-picker">
          <div className="template-pick">
            <Link to={{ pathname: 'editor-page', hash: '#mahomes' }}>
              <img className="template-pick-image" src={MahomesCoverImg} />
            </Link>
          </div>
          <div className="template-pick">
            <Link to={{ pathname: 'editor-page', hash: '#foles' }}>
              <img className="template-pick-image" src={FolesCoverImg} />
            </Link>
          </div>
        </div>
      </section>
      <section className="youtube-how-to-section">
        <h2 className="section-title">Video Demo Section</h2>
        <div className="video-demo">Video demo coming soon.</div>
      </section>
      <Footer />
    </main>
  );
};
