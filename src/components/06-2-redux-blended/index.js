import { PersistGate } from 'redux-persist/integration/react';
import { App1 } from './components';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App1 />
      </PersistGate>
    </Provider>
  );
};
