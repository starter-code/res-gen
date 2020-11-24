import CodeMirror from 'codemirror';
import 'code-mirror-lint';
import PropTypes from 'prop-types';
import React, { useRef, useEffect, useState } from 'react';
import { editorOptions } from './options';

export const EditorCustomizer = ({ setData, defaultData, type }) => {
  const [editor, setEditor] = useState(null);
  let editorRef = useRef(null);

  const onHandleChange = () => {};
  const handleClick = () => {
    setData(JSON.parse(editor.doc.getValue()));
  };

  useEffect(() => {
    const codeMirrorEditor = CodeMirror.fromTextArea(
      editorRef.current,
      editorOptions,
    );
    setEditor(codeMirrorEditor);
    setData(defaultData);
  }, [type, editorRef]);

  return (
    <div className={`json-container ${type}`}>
      <button className="pdf-updater" onClick={handleClick}>
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
