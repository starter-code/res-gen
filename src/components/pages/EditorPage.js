import React, { useState } from 'react';
import Split from 'react-split';
import { EditorCustomizer } from 'src/customizers/EditorCustomizer';
import { FolesTemplate } from 'src/templates/FolesTemplate';
import { MahomesTemplate } from 'src/templates/MahomesTemplate';
import { style as defaultFolesCss } from '../templates/FolesTemplate/Styles';
import { style as defaultMahomesCss } from '../templates/MahomesTemplate/Styles';
import defaultResumeData from '../../example-json/john_smith.json';
import FolesCoverImg from '../../images/FolesCoverImg.png';
import MahomesCoverImg from '../../images/MahomesCoverImg.png';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '75%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const EditorPage = () => {
  const templateStyles = [defaultFolesCss, defaultMahomesCss];
  const [resumeData, setResumeData] = useState(defaultResumeData);
  const [componentIndex, setComponentIndex] = useState(0);
  const [resumeIndex, setResumeIndex] = useState(0);
  const [cssData, setCssData] = useState(templateStyles[resumeIndex]);
  const [modalIsOpen, setIsOpen] = useState(false);
  templateStyles[resumeIndex] = cssData;

  const switchResume = [
    {
      resume: (
        <FolesTemplate
          key="foles"
          data={resumeData}
          style={templateStyles[0]}
        />
      ),
      title: 'Foles',
      image: FolesCoverImg,
    },
    {
      resume: (
        <MahomesTemplate
          key="mahomes"
          data={resumeData}
          style={templateStyles[1]}
        />
      ),
      title: 'Mahomes',
      image: MahomesCoverImg,
    },
  ];

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

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const renderTemplate = (index) => {
    return switchResume[index].resume;
  };

  const renderEditorComponent = (index) => {
    return switchEditor[index].component;
  };

  return (
    <Split
      className="split-screen"
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
        <button onClick={openModal}>Open Modal</button>
        {renderTemplate(resumeIndex)}
      </div>

      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Template Switcher"
        >
          <h2>Select a template</h2>
          <button onClick={closeModal}>Exit</button>
          <div>
            {switchResume.map((resume, resumeIndex) => (
              <button
                className="img-button"
                key={resumeIndex}
                onClick={() => setResumeIndex(resumeIndex)}
              >
                <img className="cover-img" src={resume.image} />
              </button>
            ))}
          </div>
        </Modal>
      </div>
    </Split>
  );
};
