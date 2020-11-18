import React, { useState } from 'react';
import { JsonCustomizer } from 'src/customizers/JsonCustomizer';
import { FolesTemplate } from 'src/templates/FolesTemplate';
import { style } from '../templates/FolesTemplate/Styles';

export const ExamplePage = () => {
  const [data, setData] = useState();
  return (
    <div>
      <JsonCustomizer setData={setData} />
      <FolesTemplate data={data} style={style} />
    </div>
  );
};
