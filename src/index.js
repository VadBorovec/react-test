// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { AppIndex } from './App';
// import { Global, ThemeProvider } from '@emotion/react';
// import './index.css';
// import { GlobalStyles, theme } from 'styles';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <ThemeProvider theme={theme}>
//       <Global styles={GlobalStyles} />
//       <AppIndex />
//     </ThemeProvider>
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppIndex } from './App';
import AuthProvider from './components/04-1-hooks/contexts/auth/Provider';
// import 'modern-normalize/modern-normalize.css';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AppIndex />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <AuthProvider>
//         <AppIndex />
//       </AuthProvider>
//     </BrowserRouter>
//   </React.StrictMode>
// );
