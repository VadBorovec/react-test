import { BrowserRouter } from 'react-router-dom';
import App1 from './App';
import AuthProvider from './contexts/auth/Provider';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <App1 />
      </AuthProvider>
    </BrowserRouter>
  );
}
