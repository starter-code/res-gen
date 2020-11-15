import React from 'react';
import { MahomesTemplate } from 'src/templates/MahomesTemplate';
import data from '../../example-json/patrick_dohn.json';

export const MahomesPage = () => {
  return (
    <div className="mahomes-page">
      <h1>Template</h1>
      <MahomesTemplate data={data} />
    </div>
  );
};
