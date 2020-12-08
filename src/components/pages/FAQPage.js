import React from 'react';
import { Link } from 'react-router-dom';

export const FAQPage = () => {
  return (
    <div className="faq-page">
      <nav className="navbar">
        <Link className="title" to="/">
          ResGenie
        </Link>
        <Link className="nav-link" to="editor-page">
          Get Started!
        </Link>
      </nav>
      <main className="faq-section">
        <section className="faq-one">
          <h1 className="faq-title">Frequently Asked Questions</h1>
          <div className="faq-content">
            <h1>Why use us?</h1>
            <div className="hidden">
              <p>
                akfnalgnasdlv dfnsadglsdngs sdgklnsdglsndg
                sdgklnsdglsndgdsfsmdngssdgs asdfnsdfg sdfsd
              </p>
            </div>
          </div>
          <div className="faq-content">
            <h1>Why we made this app?</h1>
            <div className="hidden">
              <p>
                akfnalgnasdlv dfnsadglsdngs sdgklnsdglsndg
                sdgklnsdglsndgdsfsmdngssdgs asdfnsdfg sdfsd
              </p>
            </div>
          </div>
          <div className="faq-content">
            <h1>Who we are?</h1>
            <div className="hidden">
              <p>
                akfnalgnasdlv dfnsadglsdngs sdgklnsdglsndg
                sdgklnsdglsndgdsfsmdngssdgs asdfnsdfg sdfsd
              </p>
            </div>
          </div>
          <div className="faq-content">
            <h1>More Questions?</h1>
            <div className="hidden">
              <p>
                akfnalgnasdlv dfnsadglsdngs sdgklnsdglsndg
                sdgklnsdglsndgdsfsmdngssdgs asdfnsdfg sdfsd
              </p>
            </div>
          </div>
        </section>
        <section className="faq-two">
          <div className="contact-form">
            <h1>Contact us:</h1>
            <h3>linkedIn</h3>
            <h3>linkedIn</h3>
          </div>
        </section>
      </main>
    </div>
  );
};
