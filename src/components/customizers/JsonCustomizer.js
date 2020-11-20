import CodeMirror from 'codemirror';
import 'code-mirror-lint';
import PropTypes from 'prop-types';
import React, { useRef, useEffect, useState } from 'react';

import data from '../../example-json/john_smith.json';
import { editorOptions } from './options';

export const JsonCustomizer = ({ setData }) => {
  const [editor, setEditor] = useState(null);
  const editorRef = useRef(null);

  const onHandleChange = () => {};
  const handleClick = () => {
    setData(JSON.parse(editor.doc.getValue()));
  };

  useEffect(() => {
    setEditor(CodeMirror.fromTextArea(editorRef.current, editorOptions));
    setData(data);
  }, [editorRef]);

  return (
    <div>
      <button onClick={handleClick}>Update PDF</button>
      <form>
        <textarea
          onChange={onHandleChange}
          value={JSON.stringify(data, null, 2)}
          ref={editorRef}
        ></textarea>
      </form>
    </div>
  );
};

JsonCustomizer.propTypes = {
  setData: PropTypes.func,
};
