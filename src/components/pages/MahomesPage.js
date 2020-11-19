import React from 'react';
import { MahomesTemplate } from 'src/templates/MahomesTemplate';
import data from '../../example-json/john_smith.json';
import { style } from '../templates/MahomesTemplate/Styles';

export const MahomesPage = () => {
  return (
    <div className="mahomes-page">
      <h1>Template</h1>
      <MahomesTemplate data={data} style={style} />
    </div>
  );
};
