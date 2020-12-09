import React, { useState } from 'react';
import { Editor } from 'src/editor';
import { FolesTemplate } from 'src/templates/FolesTemplate';
import { MahomesTemplate } from 'src/templates/MahomesTemplate';
import { style as defaultFolesCss } from '../templates/FolesTemplate/Styles';
import { style as defaultMahomesCss } from '../templates/MahomesTemplate/Styles';
import defaultResumeData from '../../example-json/john_smith.json';
import FolesCoverImg from '../../images/FolesCoverImg.png';
import MahomesCoverImg from '../../images/MahomesCoverImg.png';
import Modal from 'react-modal';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { GrDocumentText, GrClose } from 'react-icons/gr';
import { NavBar, Footer } from 'src/components/main';

Modal.setAppElement('#modal');

export const EditorPage = (props) => {
  let defaultResumeIndex = 0;

  if (props && props.location.hash === '#mahomes') {
    defaultResumeIndex = 1;
  }

  const templateStyles = [defaultFolesCss, defaultMahomesCss];
  const [resumeData, setResumeData] = useState(defaultResumeData);
  const [editorIndex, setEditorIndex] = useState(0);
  const [resumeIndex, setResumeIndex] = useState(defaultResumeIndex);
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
        <Editor
          setData={setResumeData}
          defaultData={resumeData}
          type="Content"
          key={Math.random()}
        />
      ),
    },
    {
      component: (
        <Editor
          setData={setCssData}
          defaultData={cssData}
          type="Resume Styles"
          key={Math.random()}
        />
      ),
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

  const onHandleSwitchEditor = () => {
    if (editorIndex === 0) {
      setEditorIndex(1);
    } else {
      setEditorIndex(0);
    }
  };

  const onHandleSwitchTemplate = (index) => {
    setResumeIndex(index);
    setCssData(templateStyles[index]);
  };

  const renderEditorButtons = () => {
    return (
      <div className="editor-buttons-container">
        <button
          className={editorIndex === 0 ? 'active-editor' : ''}
          onClick={onHandleSwitchEditor}
        >
          Content
        </button>
        <button
          className={editorIndex === 1 ? 'active-editor' : ''}
          onClick={onHandleSwitchEditor}
        >
          Styles
        </button>
      </div>
    );
  };

  return (
    <div className="editor-page">
      <NavBar />
      <main>
        <section className="editor-section">
          {renderEditorButtons()}
          {renderComponent(editors, editorIndex)}
        </section>
        <section className="template-section">
          <div className="switch-template-button-container">
            <button className="btn-one" onClick={openModal}>
              <span>Switch Template</span>
              <GrDocumentText />
            </button>
          </div>
          {renderComponent(templates, resumeIndex)}
        </section>
      </main>
      <Footer />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="template-switcher-modal"
        overlayClassName="template-switcher-overlay"
        contentLabel="Template Switcher"
      >
        <h2>Select a template</h2>
        <button className="blank modal-close-button" onClick={closeModal}>
          <GrClose />
        </button>
        <div>
          {_.map(templates, (template, templateIndex) => (
            <button
              className="blank template-img-button"
              key={templateIndex}
              onClick={() => onHandleSwitchTemplate(templateIndex)}
            >
              <img className="template-img" src={template.image} />
            </button>
          ))}
        </div>
      </Modal>
    </div>
  );
};

EditorPage.propTypes = {
  location: PropTypes.object,
  match: PropTypes.object,
  history: PropTypes.object,
};
