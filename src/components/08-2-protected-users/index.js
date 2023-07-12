import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App1 from './App';
import { store, persistor } from './redux/store';
import 'modern-normalize/modern-normalize.css';
import './styles/base.css';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App1 />
      </PersistGate>
    </Provider>
  );
};
