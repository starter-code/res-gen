import React, { useState } from 'react';
import Split from 'react-split';
import { JsonCustomizer } from 'src/customizers/JsonCustomizer';
import { CssCustomizer } from 'src/customizers/CssCustomizer';
import { FolesTemplate } from 'src/templates/FolesTemplate';
import { style as defaultStyle } from '../templates/FolesTemplate/Styles';

export const EditorPage = () => {
  const [style, setStyle] = useState(defaultStyle);
  const [data, setData] = useState();

  const switchEditor = [
    { component: <JsonCustomizer setData={setData} />, title: 'Json' },
    { component: <CssCustomizer setStyle={setStyle} />, title: 'Css' },
  ];

  const [component, setComponent] = useState(switchEditor[0].component);

  return (
    <Split
      style={{ display: 'flex', height: 'calc(100%)' }}
      sizes={[10, 45, 45]}
      minSize={100}
      gutterSize={3}
      gutterAlign="center"
      snapOffset={30}
      dragInterval={1}
      direction="horizontal"
      cursor="col-resize"
    >
      <div className="customizer" style={{ height: '100vh' }}>
        {switchEditor.map((item, i) => (
          <button key={i} onClick={() => setComponent(item.component)}>
            {item.title}
          </button>
        ))}
      </div>
      <div className="container">{component}</div>

      <div className="template">
        <FolesTemplate data={data} style={style} />
      </div>
    </Split>
  );
};
