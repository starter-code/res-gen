import React, { useRef, useEffect, useState } from 'react';
import Codemirror from 'codemirror';
import { style } from '../templates/FolesTemplate/Styles';
import { editorOptions } from './EditorOptions';
import PropTypes from 'prop-types';

export const CssCustomizer = ({ setStyle }) => {
  const [editor, setEditor] = useState(null);
  const editorRef = useRef(null);

  const onHandleChange = () => {};
  const handleClick = () => {
    setStyle(JSON.parse(editor.doc.getValue()));
  };

  useEffect(() => {
    setEditor(Codemirror.fromTextArea(editorRef.current, editorOptions));
    setStyle(style);
  }, [editorRef]);

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <form>
        <textarea
          onChange={onHandleChange}
          value={JSON.stringify(style, null, 2)}
          ref={editorRef}
        ></textarea>
      </form>
    </div>
  );
};

CssCustomizer.propTypes = {
  setStyle: PropTypes.func,
};
