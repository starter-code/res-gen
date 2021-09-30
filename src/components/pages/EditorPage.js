import PropTypes from 'prop-types';
import Modal from 'react-modal';
import _ from 'lodash';
import React, { useState } from 'react';
import { GrDocumentText } from 'react-icons/gr';

import { CONSTANTS } from '../../constants';
import { Editor } from 'src/editor';
import { CunninghamTemplate, style as CunninghamCSS } from 'src/templates/CunninghamTemplate';
import { FolesTemplate, style as FolesCSS } from 'src/templates/FolesTemplate';
import { MahomesTemplate, style as MahomesCSS } from 'src/templates/MahomesTemplate';
import defaultContentJson from '../../example-json/john_smith.json';

import CunninghamPreview from '../../images/CunninghamPreview.png';
import FolesPreview from '../../images/FolesPreview.png';
import MahomesPreview from '../../images/MahomesPreview.png';

import { NavBar, Footer } from 'src/components/main';

const { CUNNINGHAM, FOLES, MAHOMES, CONTENT, STYLES } = CONSTANTS;

Modal.setAppElement('#modal');

export const EditorPage = (props) => {
  let defaultResumeIndex = 0;

  if (props && props.location.hash === '#mahomes') {
    defaultResumeIndex = 1;
  }

  const templateStyles = [FolesCSS, MahomesCSS, CunninghamCSS];
  const [resumeData, setResumeData] = useState(defaultContentJson);
  const [editorIndex, setEditorIndex] = useState(0);
  const [resumeIndex, setResumeIndex] = useState(defaultResumeIndex);
  const [cssData, setCssData] = useState(templateStyles[resumeIndex]);
  const [modalIsOpen, setIsOpen] = useState(false);

  const templates = [
    {
      component: <FolesTemplate key={FOLES} data={resumeData} style={cssData} />,
      title: FOLES,
      image: FolesPreview,
    },
    {
      component: <MahomesTemplate key={MAHOMES} data={resumeData} style={cssData} />,
      title: MAHOMES,
      image: MahomesPreview,
    },
    {
      component: <CunninghamTemplate key={CUNNINGHAM} data={resumeData} style={cssData} />,
      title: CUNNINGHAM,
      image: CunninghamPreview,
    },
  ];

  const editors = [
    {
      component: (
        <Editor
          setData={setResumeData}
          defaultData={resumeData}
          type={CONTENT}
          key={Math.random()}
        />
      ),
    },
    {
      component: (
        <Editor setData={setCssData} defaultData={cssData} type={STYLES} key={Math.random()} />
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
    setIsOpen(false);
  };

  const renderEditorButtons = () => {
    return (
      <div className="editor-buttons-container">
        <button className={editorIndex === 0 ? 'active-editor' : ''} onClick={onHandleSwitchEditor}>
          Content
        </button>
        <button className={editorIndex === 1 ? 'active-editor' : ''} onClick={onHandleSwitchEditor}>
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
          <button className="switch-template-button" onClick={openModal}>
            <span>Switch Template</span>
            <GrDocumentText />
          </button>
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
        <h2 className="ml-2 mb-0">Select a template</h2>
        <div className="switch-template-button-container">
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
