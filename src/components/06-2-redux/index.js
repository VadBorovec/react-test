import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { App1 } from './components/App';
import { store, persistor } from './redux/store';

const theme = {};

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <App1 />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
