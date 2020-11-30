import React, { useState } from 'react';
import Split from 'react-split';
import { EditorCustomizer } from 'src/customizers/EditorCustomizer';
import { FolesTemplate } from 'src/templates/FolesTemplate';
import { MahomesTemplate } from 'src/templates/MahomesTemplate';
import { style as defaultCssData } from '../templates/FolesTemplate/Styles';
import defaultResumeData from '../../example-json/john_smith.json';
import FolesCoverImg from '../../images/FolesCoverImg.png';
import MahomesCoverImg from '../../images/MahomesCoverImg.png';
import Modal from 'react-modal';

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
  var subtitle;

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = 'black';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const switchResume = [
    {
      resume: (
        <MahomesTemplate key="mahomes" data={resumeData} style={cssData} />
      ),
      title: 'Mahomes',
      image: MahomesCoverImg,
    },
    {
      resume: <FolesTemplate key="foles" data={resumeData} style={cssData} />,
      title: 'Foles',
      image: FolesCoverImg,
    },
  ];

  const [componentIndex, setComponentIndex] = useState(0);
  const [resumeIndex, setResumeIndex] = useState(0);

  const renderTemplate = (index) => {
    return switchResume[index].resume;
  };

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
        <button onClick={openModal}>Open Modal</button>
        {renderTemplate(resumeIndex)}
      </div>

      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Select a template</h2>
          <button onClick={closeModal}>Exit</button>
          <div>
            {switchResume.map((resume, resumeIndex) => (
              <button
                className="imgButton"
                key={resumeIndex}
                onClick={() => setResumeIndex(resumeIndex)}
              >
                <img className="coverImg" src={resume.image} />
              </button>
            ))}
          </div>
        </Modal>
      </div>
    </Split>
  );
};
