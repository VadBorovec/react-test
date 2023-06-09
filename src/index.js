import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AppIndex } from './App';

import { Global, ThemeProvider } from '@emotion/react';
import './index.css';
import { GlobalStyles, theme } from 'styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyles} />
        <AppIndex />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
// !========================/ 04-1 / 04-2 / 04-3 /================
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { AppIndex } from './App';

// import { Global, ThemeProvider } from '@emotion/react';
// import './index.css';
// import { GlobalStyles, theme } from 'styles';

// ReactDOM.render(
//   <React.StrictMode>
//     <ThemeProvider theme={theme}>
//       <Global styles={GlobalStyles} />
//       <AppIndex />
//     </ThemeProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
