import React, { useRef, useEffect, useState } from 'react';
import Codemirror from 'codemirror';
import data from '../../example-json/john_smith.json';
import { editorOptions } from './EditorOptions';
import PropTypes from 'prop-types';
import 'jsonlint';

export const JsonCustomizer = ({ setData }) => {
  const [editor, setEditor] = useState(null);
  const editorRef = useRef(null);

  const onHandleChange = () => {};
  const handleClick = () => {
    setData(JSON.parse(editor.doc.getValue()));
  };

  useEffect(() => {
    setEditor(Codemirror.fromTextArea(editorRef.current, editorOptions));
    setData(data);
  }, [editorRef]);

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
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
