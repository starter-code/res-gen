### Import Order Convention

Imports are sort by group

- Package import > Webpack import > Relative import

```js
// Package imports
import ... 'lodash';
import ... 'react';
import ... 'react-router';

// Webpack imports
import ... 'src/whatever';
import ... 'src/utils';

// Relative path imports
import ... '../../folder/file';
import ... './file-in-same-folder';
```

### CSS Selectors and Properties

CSS Selectors and Properties should be sorted alphabetically,

```css

.a {
  color: red;
}

.b {
  color: blue;
  margin: 0px;
  padding: 0px;
}

.c {
  visibility: hidden;
}
```

### React Components

All React Components should be functional components with a named import

- Destructured props should be alphabetized
- Props should have proptypes

```js
import React from 'react';
import PropTypes from 'prop-types';

export const Example = ({ a, b, c }) => {
  return (
    <div>
      <p>{a}<p>
      <p>{b}<p>
      <p>{c}<p>
    <div>
  );
};

Example.propTypes = {
  a: PropTypes.string,
  b: PropTypes.string,
  c: PropTypes.string,
}
```
