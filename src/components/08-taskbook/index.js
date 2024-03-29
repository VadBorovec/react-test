import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { App1 } from './components/App';
import 'modern-normalize';
import './styles.css';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App1 />
      </PersistGate>
    </Provider>
  );
};
