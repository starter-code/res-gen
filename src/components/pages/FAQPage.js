import React from 'react';
import { Link } from 'react-router-dom';

import { NavBar, Footer } from 'src/components/main';

export const FAQPage = () => {
  return (
    <main className="faq-page">
      <NavBar />
      <div className="faq">
        <section className="faq-section">
          <h1 className="faq-title">FAQ</h1>
          <div className="faq-questions">
            <h1>Who is the target audience of ResGenie?</h1>
            <h3>
              Software engineers coming out of a bootcamp who know some CSS and
              JSON
            </h3>
          </div>
          <div className="faq-questions">
            <h1>What technologies are used to build this project</h1>
            <h3>
              Its made with React with a custom webpack config. The editor page
              is made from codemirror to make the editor and React PDF to render
              the PDF.
            </h3>
          </div>
          <div className="faq-questions">
            <h1>Who is the project for?</h1>
            <h3>
              Software engineers coming out of a bootcamp who know some CSS and
              JSON
            </h3>
          </div>
          <div className="faq-questions">
            <h1>How do i find the code for this project?</h1>
            <h3>
              <Link>
                <h3>Great question click here!</h3>
              </Link>
            </h3>
          </div>
          <div className="faq-questions">
            <h1>How do i find the code for this project?</h1>
            <h3>
              <Link>
                <h3>Great question click here!</h3>
              </Link>
            </h3>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};
