import classNames from 'classnames';
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

const templateNames = {
  [FOLES]: FOLES,
  [MAHOMES]: MAHOMES,
  [CUNNINGHAM]: CUNNINGHAM,
};

const templateStyles = {
  [FOLES]: FolesCSS,
  [MAHOMES]: MahomesCSS,
  [CUNNINGHAM]: CunninghamCSS,
};

export const EditorPage = (props) => {
  let defaultCSS = templateStyles[FOLES];
  let defaultTemplate = templateNames[FOLES];

  if (props && props.location.hash) {
    const name = _.capitalize(props.location.hash.replace('#', ''));
    defaultCSS = templateStyles[name] || defaultCSS;
    defaultTemplate = templateNames[name] || defaultTemplate;
  }

  const [activeEditor, setActiveEditor] = useState(CONTENT);
  const [resumeTemplate, setResumeTemplate] = useState(defaultTemplate);
  const [cssData, setCssData] = useState(defaultCSS);
  const [resumeData, setResumeData] = useState(defaultContentJson);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const templates = {
    [FOLES]: {
      component: <FolesTemplate key={FOLES} data={resumeData} style={cssData} />,
      title: FOLES,
      image: FolesPreview,
      styles: FolesCSS,
    },
    [MAHOMES]: {
      component: <MahomesTemplate key={MAHOMES} data={resumeData} style={cssData} />,
      title: MAHOMES,
      image: MahomesPreview,
      styles: MahomesCSS,
    },
    [CUNNINGHAM]: {
      component: <CunninghamTemplate key={CUNNINGHAM} data={resumeData} style={cssData} />,
      title: CUNNINGHAM,
      image: CunninghamPreview,
      styles: CunninghamCSS,
    },
  };

  const editors = {
    [CONTENT]: (
      <Editor setData={setResumeData} defaultData={resumeData} type={CONTENT} key={Math.random()} />
    ),
    [STYLES]: (
      <Editor setData={setCssData} defaultData={cssData} type={STYLES} key={Math.random()} />
    ),
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

  const renderTemplate = (type) => {
    return templates[type].component;
  };

  const onSwitchTemplate = (type) => {
    setResumeTemplate(type);
    setCssData(templates[type].styles);
    setIsModalOpen(false);
  };

  const renderEditorButtons = () => {
    const onToggleEditor = (editor) => {
      if (activeEditor === editor) {
        // if content is already the active type
        // and content button is clicked, dont switch
        return;
      }

      setActiveEditor(activeEditor === CONTENT ? STYLES : CONTENT);
    };

    return (
      <div className="editor-buttons-container">
        <button
          className={classNames({ active: activeEditor === CONTENT })}
          onClick={() => onToggleEditor(CONTENT)}
        >
          Content
        </button>
        <button
          className={classNames({ active: activeEditor === STYLES })}
          onClick={() => onToggleEditor(STYLES)}
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
          {renderEditor(activeEditor)}
        </section>
        <section className="template-section">
          <button className="switch-template-button" onClick={openModal}>
            <span>Switch Template</span>
            <GrDocumentText />
          </button>
          {renderTemplate(resumeTemplate)}
        </section>
      </main>
      <Footer />

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="template-switcher-modal"
        overlayClassName="template-switcher-overlay"
        contentLabel="Template Switcher"
      >
        <h2 className="ml-2 mb-0">Select a template</h2>
        <div className="switch-template-button-container">
          {_.map(templates, (template) => (
            <button
              className="blank template-img-button"
              key={template.title}
              onClick={() => onSwitchTemplate(template.title)}
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
