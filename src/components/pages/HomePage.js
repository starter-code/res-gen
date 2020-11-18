import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div className="home-page">
      <Link to="/">Home Page</Link>
      <Link to="foles">Foles Template</Link>
      <Link to="mahomes">Mahomes Template</Link>
      <Link to="json-customizer-example">Example</Link>
      <Link to="css-customizer-example">Css Example</Link>
    </div>
  );
};
