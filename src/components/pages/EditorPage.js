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
import _ from 'lodash';

Modal.setAppElement('#root');

export const EditorPage = () => {
  const templateStyles = [defaultFolesCss, defaultMahomesCss];
  const [resumeData, setResumeData] = useState(defaultResumeData);
  const [editorIndex, setEditorIndex] = useState(0);
  const [resumeIndex, setResumeIndex] = useState(0);
  const [cssData, setCssData] = useState(templateStyles[resumeIndex]);
  const [modalIsOpen, setIsOpen] = useState(false);

  const templates = [
    {
      component: (
        <FolesTemplate key="foles" data={resumeData} style={cssData} />
      ),
      title: 'Foles',
      image: FolesCoverImg,
    },
    {
      component: (
        <MahomesTemplate key="mahomes" data={resumeData} style={cssData} />
      ),
      title: 'Mahomes',
      image: MahomesCoverImg,
    },
  ];

  const editors = [
    {
      component: (
        <EditorCustomizer
          setData={setResumeData}
          defaultData={resumeData}
          type="Content"
          key={Math.random()}
        />
      ),
      title: 'Resume Content',
    },
    {
      component: (
        <EditorCustomizer
          setData={setCssData}
          defaultData={cssData}
          type="Resume Styles"
          key={Math.random()}
        />
      ),
      title: 'Resume Styles',
    },
  ];

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const renderComponent = (type, index) => {
    return type[index].component;
  };

  const onHandleSwitchEditor = (index) => {
    setEditorIndex(index);
  };

  const onHandleSwitchTemplate = (index) => {
    setResumeIndex(index);
    setCssData(templateStyles[index]);
  };

  return (
    <div className="editor-page">
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
            {_.map(editors, (editor, editorIndex) => (
              <button
                key={editorIndex}
                onClick={() => onHandleSwitchEditor(editorIndex)}
              >
                {editor.title}
              </button>
            ))}
          </div>
          {renderComponent(editors, editorIndex)}
        </div>
        <div className="template">
          <button onClick={openModal}>Open Modal</button>
          {renderComponent(templates, resumeIndex)}
        </div>
      </Split>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="template-switcher-modal"
        overlayClassName="template-switcher-overlay"
        contentLabel="Template Switcher"
      >
        <h2>Select a template</h2>
        <button onClick={closeModal}>Exit</button>
        <div>
          {_.map(templates, (template, templateIndex) => (
            <button
              className="img-button"
              key={templateIndex}
              onClick={() => onHandleSwitchTemplate(templateIndex)}
            >
              <img className="cover-img" src={template.image} />
            </button>
          ))}
        </div>
      </Modal>
    </div>
  );
};
