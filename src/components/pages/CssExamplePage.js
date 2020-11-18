import React, { useState } from 'react';
import { CssCustomizer } from 'src/components/customizers/CssCustomizer';
import { FolesTemplate } from 'src/templates/FolesTemplate';
import data from '../../example-json/john_smith.json';
import { style as defaultStyle } from '../templates/FolesTemplate/Styles';

export const CssExamplePage = () => {
  const [style, setStyle] = useState(defaultStyle);
  return (
    <div>
      <CssCustomizer setStyle={setStyle} />
      <FolesTemplate data={data} style={style} />
    </div>
  );
};
