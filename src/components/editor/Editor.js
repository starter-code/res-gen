import CodeMirror from 'codemirror';
import 'code-mirror-lint';
import PropTypes from 'prop-types';
import React, { useRef, useEffect, useState } from 'react';
import { editorOptions } from './options';

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

  const stringData = JSON.stringify(defaultData, null, 4);

  const handleExportJson = () => {
    const filename = 'res-gen.json';

    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(stringData));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };

  return (
    <div>
      <div>
        <button className="update-pdf-button" onClick={onHandleClick}>
          Apply Changes
        </button>
        <button className="export-json-button" onClick={handleExportJson}>
          Export File
        </button>
      </div>
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
