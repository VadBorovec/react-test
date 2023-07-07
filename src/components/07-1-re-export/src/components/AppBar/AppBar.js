import { Navigation } from '../Navigation';
import styles from './Appbar.module.css';

export const AppBar = () => {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
};
