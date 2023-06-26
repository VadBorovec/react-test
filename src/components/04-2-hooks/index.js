import { BrowserRouter } from 'react-router-dom';
import App1 from './App';
import AuthProvider from './contexts/auth/Provider';
import { UserProvider } from './components/MyContext/userContext';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <UserProvider>
          <App1 />
        </UserProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
