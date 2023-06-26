import { useContext } from 'react';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import authContext from '../../contexts/auth/context.js';
import styles from './Appbar.module.css';
import Button from 'styles/ui/Button/Button';

export default function Appbar() {
  const { isLoggedIn, user, onLogIn, onLogOut } = useContext(authContext);

  return (
    <header className={styles.header}>
      <Navigation />

      {isLoggedIn ? (
        <UserMenu onLogOut={onLogOut} user={user} />
      ) : (
        <Button type="button" onClick={onLogIn}>
          Войти
        </Button>
      )}
    </header>
  );
}
