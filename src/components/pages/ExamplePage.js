import React, { useState } from 'react';
import { JsonCustomizer } from 'src/customizers/JsonCustomizer';
import { FolesTemplate } from 'src/templates/FolesTemplate';

export const ExamplePage = () => {
  const [data, setData] = useState();
  return (
    <div>
      <JsonCustomizer setData={setData} />
      <FolesTemplate data={data} />
    </div>
  );
};
