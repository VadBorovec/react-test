import { BrowserRouter } from 'react-router-dom';
import App1 from './App';
// import './styles/base.scss';
import AuthProvider from './context/AuthProvider';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <App1 />
      </AuthProvider>
    </BrowserRouter>
  );
}
