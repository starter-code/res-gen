import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div>
      <Link to="/">Home Page</Link>
      <Link to="cascade">Cascade Template</Link>
      <Link to="crip">Crisp Template</Link>
    </div>
  );
};
