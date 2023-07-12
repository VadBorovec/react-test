import { Provider } from 'react-redux';

import App1 from './App';

import './index.css';
import { StateContext } from './context/StateContext';
import { store } from './redux/store';

export const App = () => {
  return (
    <Provider store={store}>
      <StateContext>
        <App1 />
      </StateContext>
    </Provider>
  );
};
