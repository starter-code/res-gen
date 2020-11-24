import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div className="home-page">
      <Link to="/">Home Page</Link>
      <Link to="editor-page">Editor</Link>
    </div>
  );
};
