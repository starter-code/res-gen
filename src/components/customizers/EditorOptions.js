import './CodeMirrorLint';

export const editorOptions = {
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
  lint: true,
  gutters: [
    'CodeMirror-linenumbers',
    'CodeMirror-foldgutter',
    'CodeMirror-lint-markers',
  ],

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
