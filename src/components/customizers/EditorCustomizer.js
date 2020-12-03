import CodeMirror from 'codemirror';
import 'code-mirror-lint';
import PropTypes from 'prop-types';
import React, { useRef, useEffect, useState } from 'react';
import { editorOptions } from './options';

export const EditorCustomizer = ({ setData, defaultData, type }) => {
  const [editor, setEditor] = useState(null);
  const editorRef = useRef(null);

  const onHandleChange = () => {};
  const onHandleClick = () => {
    setData(JSON.parse(editor.doc.getValue()));
  };

  useEffect(() => {
    const codeMirrorEditor = CodeMirror.fromTextArea(
      editorRef.current,
      editorOptions,
    );
    setEditor(codeMirrorEditor);
    setData(defaultData);
  }, [type, editorRef, defaultData]);

  return (
    <div className="json-container">
      <button className="pdf-updater" onClick={onHandleClick}>
        Update PDF
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

EditorCustomizer.propTypes = {
  setData: PropTypes.func,
  defaultData: PropTypes.object,
  type: PropTypes.string,
};
