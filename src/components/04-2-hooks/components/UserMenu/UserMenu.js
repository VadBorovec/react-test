import React from 'react';
import styles from './UserMenu.module.css';
import Button from 'styles/ui/Button/Button';

export default function UserMenu({ onLogOut, user }) {
  return (
    <div className={styles.container}>
      <img
        src={user.avatar}
        alt=""
        width="32"
        height="32"
        className={styles.avatar}
      />
      <p className={styles.name}>Добро пожаловать, {user.name}</p>
      <Button type="button" onClick={onLogOut}>
        Выйти
      </Button>
    </div>
  );
}
