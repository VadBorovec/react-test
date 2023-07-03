import { Provider } from 'react-redux';
import { store } from './redux/store';
import { App1 } from './components/App';

export default function App() {
  return (
    <Provider store={store}>
      <App1 />
    </Provider>
  );
}
