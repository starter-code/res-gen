import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div>
      <Link to="/">Home Page</Link>
      <Link to="foles">Foles Template</Link>
      <Link to="crisp">Crisp Template</Link>
    </div>
  );
};
