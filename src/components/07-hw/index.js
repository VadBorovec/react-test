import { Provider } from 'react-redux';
import { store } from './redux/store';
import { App1 } from './components';

export const App = () => {
  return (
    <Provider store={store}>
      <App1 />
    </Provider>
  );
};
