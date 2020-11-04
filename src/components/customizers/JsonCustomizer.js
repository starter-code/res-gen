import React, { useRef, useEffect } from 'react';
import Codemirror from 'codemirror';
import data from '../../example-json/john_smith.json';

// console.log(Codemirror);
// console.log(Object.keys(Codemirror));

const editorOptions = {
  mode: { name: 'javascript', json: true },
  lineNumbers: true,
  lineWrapping: true,
  theme: 'dracula',
  extraKeys: {
    'Ctrl-Q': (cm) => {
      cm.foldCode(cm.getCursor());
    },
  },
  foldGutter: true,
  gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
  foldOptions: {
    widget: (from, to) => {
      var count = undefined;

      // Get open / close token
      var startToken = '{',
        endToken = '}';
      var prevLine = window.editor_json.getLine(from.line);
      if (prevLine.lastIndexOf('[') > prevLine.lastIndexOf('{')) {
        (startToken = '['), (endToken = ']');
      }

      // Get json content
      var internal = window.editor_json.getRange(from, to);
      var toParse = startToken + internal + endToken;

      // Get key count
      try {
        var parsed = JSON.parse(toParse);
        count = Object.keys(parsed).length;
      } catch (e) {
        console.error(e);
      }

      return count ? `\u21A4${count}\u21A6` : '\u2194';
    },
  },
};

export const JsonCustomizer = () => {
  const editorRef = useRef(null);

  const onHandleChange = () => {};

  useEffect(() => {
    Codemirror.fromTextArea(editorRef.current, editorOptions);
  }, [editorRef]);

  return (
    <div>
      <textarea
        onChange={onHandleChange}
        value={JSON.stringify(data, null, 2)}
        ref={editorRef}
      ></textarea>
    </div>
  );
};
