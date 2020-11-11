import React from 'react';
import { FolesTemplate } from 'src/templates/FolesTemplate';
import data from '../../example-json/john_smith.json';

export const FolesPage = () => {
  return (
    <div className="foles-page">
      <h1>Template</h1>
      <FolesTemplate data={data} />
    </div>
  );
};
