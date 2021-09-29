import PropTypes from 'prop-types';
import Modal from 'react-modal';
import _ from 'lodash';
import React, { useState } from 'react';
import { GrDocumentText, GrClose } from 'react-icons/gr';

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

export const EditorPage = () => {
  // TODO re implement template hash links
  const [resumeData, setResumeData] = useState(defaultContentJson);
  const [editorType, setEditorType] = useState(CONTENT);
  const [resumeKey, setResumeKey] = useState(FOLES);
  const [cssData, setCssData] = useState(FolesCSS);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const templates = {
    [FOLES]: {
      component: <FolesTemplate key={FOLES} data={resumeData} style={FolesCSS} />,
      title: FOLES,
      image: FolesPreview,
      style: FolesCSS,
    },
    [MAHOMES]: {
      component: <MahomesTemplate key={MAHOMES} data={resumeData} style={MahomesCSS} />,
      title: MAHOMES,
      image: MahomesPreview,
      style: MahomesCSS,
    },
    [CUNNINGHAM]: {
      component: <CunninghamTemplate key={CUNNINGHAM} data={resumeData} style={CunninghamCSS} />,
      title: CUNNINGHAM,
      image: CunninghamPreview,
      style: CunninghamCSS,
    },
  };

  const editors = {
    [CONTENT]: <Editor setData={setResumeData} defaultData={resumeData} type={CONTENT} key={1} />,
    [STYLES]: <Editor setData={setCssData} defaultData={cssData} type={STYLES} key={2} />,
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const renderEditor = (type) => {
    return editors[type];
  };

  const renderTemplate = (title) => {
    return templates[title].component;
  };

  const onHandleSwitchEditor = () => {
    setEditorType(editorType === CONTENT ? STYLES : CONTENT);
  };

  const onHandleSwitchTemplate = (title) => {
    setResumeKey(title);
    setCssData(templates[title].style);
    setIsModalOpen(false);
  };

  const renderEditorButtons = () => {
    return (
      <div className="editor-buttons-container">
        <button
          className={editorType === CONTENT ? 'active-editor' : ''}
          onClick={onHandleSwitchEditor}
        >
          Content
        </button>
        <button
          className={editorType === STYLES ? 'active-editor' : ''}
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
          {renderEditor(editorType)}
        </section>
        <section className="template-section">
          <div className="switch-template-button-container">
            <button className="switch-template-button" onClick={openModal}>
              <span>Switch Template</span>
              <GrDocumentText />
            </button>
          </div>
          {renderTemplate(resumeKey)}
        </section>
      </main>
      <Footer />

      <Modal
        isModalOpen={isModalOpen}
        onRequestClose={closeModal}
        className="template-switcher-modal"
        overlayClassName="template-switcher-overlay"
        contentLabel="Template Switcher"
      >
        <h2>Select a template</h2>
        <button className="blank modal-close-button" onClick={closeModal}>
          <GrClose />
        </button>
        <div className="templates-modal-content">
          {_.map(templates, (template) => (
            <button
              className="blank template-img-button"
              key={template.title}
              onClick={() => onHandleSwitchTemplate(template.title)}
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
