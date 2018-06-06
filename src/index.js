import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { injectGlobal } from 'styled-components';

injectGlobal`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Montserrat, Arial, Helvetica, sans-serif;
  font-weight: 100;
}

*::before,
*::after {
  box-sizing: border-box;
}
`;

ReactDOM.render(<App />, document.getElementById('root'));
