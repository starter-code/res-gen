import React, { useState } from 'react';
import Split from 'react-split';
import { EditorCustomizer } from 'src/customizers/EditorCustomizer';
import { FolesTemplate } from 'src/templates/FolesTemplate';
import { style as defaultCssData } from '../templates/FolesTemplate/Styles';
import defaultResumeData from '../../example-json/john_smith.json';

export const EditorPage = () => {
  const [cssData, setCssData] = useState(defaultCssData);
  const [resumeData, setResumeData] = useState(defaultResumeData);

  const switchEditor = [
    {
      component: (
        <EditorCustomizer
          setData={setResumeData}
          defaultData={resumeData}
          type="JSON"
          key="JSON"
        />
      ),
      title: 'Resume JSON',
    },
    {
      component: (
        <EditorCustomizer
          setData={setCssData}
          defaultData={cssData}
          type="CSS"
          key="CSS"
        />
      ),
      title: 'CSS',
    },
  ];

  const [componentIndex, setComponentIndex] = useState(0);

  const renderEditorComponent = (index) => {
    return switchEditor[index].component;
  };

  return (
    <Split
      className="splitScreen"
      sizes={[50, 50]}
      minSize={100}
      gutterSize={2}
      gutterAlign="center"
      snapOffset={30}
      dragInterval={1}
      direction="horizontal"
      cursor="col-resize"
    >
      <div className="container">
        <div className="customizer">
          {switchEditor.map((editor, editorIndex) => (
            <button
              key={editorIndex}
              onClick={() => setComponentIndex(editorIndex)}
            >
              {editor.title}
            </button>
          ))}
        </div>
        {renderEditorComponent(componentIndex)}
      </div>
      <div className="template">
        <FolesTemplate data={resumeData} style={cssData} />
      </div>
    </Split>
  );
};
