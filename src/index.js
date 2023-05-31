import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppIndex } from './App';
import { Global, ThemeProvider } from '@emotion/react';
import './index.css';
import { GlobalStyles, theme } from 'styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <AppIndex />
    </ThemeProvider>
  </React.StrictMode>
);
