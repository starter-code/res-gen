import CodeMirror from 'codemirror';
import 'code-mirror-lint';
import PropTypes from 'prop-types';
import React, { useRef, useEffect, useState } from 'react';
import { editorOptions } from './options';
import { GrDocumentUpdate } from 'react-icons/gr';

export const Editor = ({ setData, defaultData, type }) => {
  const [editor, setEditor] = useState(null);
  const editorRef = useRef(null);

  const onHandleChange = () => {};
  const onHandleClick = () => {
    setData(JSON.parse(editor.doc.getValue()));
  };

  useEffect(() => {
    const codeMirrorEditor = CodeMirror.fromTextArea(editorRef.current, editorOptions);
    setEditor(codeMirrorEditor);
    setData(defaultData);
  }, [type, editorRef, defaultData]);

  return (
    <div>
      <button className="update-pdf-button" onClick={onHandleClick}>
        <GrDocumentUpdate size="2em" />
      </button>
      <form>
        <textarea
          onChange={onHandleChange}
          value={JSON.stringify(defaultData, null, 2)}
          ref={editorRef}
        ></textarea>
      </form>
    </div>
  );
};

Editor.propTypes = {
  setData: PropTypes.func,
  defaultData: PropTypes.object,
  type: PropTypes.string,
};
