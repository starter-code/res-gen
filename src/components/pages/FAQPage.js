import React from 'react';

import { NavBar, Footer } from 'src/components/main';

export const FAQPage = () => {
  return (
    <main className="faq-page">
      <NavBar />
      <div className="faq">
        <section className="faq-section">
          <h1 className="faq-title">FAQ</h1>
          <div className="faq-questions">
            <h1>What technologies are used to build this project</h1>
            <h3>
              ResGenie is built with React. It&#39;s JSON editor is made from{' '}
              <a className="faq-link" href="https://codemirror.net/">
                codemirror
              </a>{' '}
              and the PDF iframe is built with{' '}
              <a className="faq-link" href="https://react-pdf.org/">
                react-pdf
              </a>
              . Please check out a more comprehensive list{' '}
              <a
                className="faq-link"
                href="https://github.com/starter-code/res-gen#technology"
              >
                here
              </a>
            </h3>
          </div>
          <div className="faq-questions">
            <h1>Who is the project for?</h1>
            <h3>
              Software engineers coming out of a bootcamp who know some CSS and
              JSON.
            </h3>
          </div>
          <div className="faq-questions">
            <h1>How do I find the code for this project?</h1>
            <h3>
              Great question click{' '}
              <a
                href="https://github.com/starter-code/res-gen"
                className="faq-link"
              >
                here!
              </a>
            </h3>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};
