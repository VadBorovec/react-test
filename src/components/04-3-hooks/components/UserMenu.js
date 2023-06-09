import React, { useContext } from 'react';
import ctx from '../context/authContext';

import { Button } from 'styles/ui';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  tag: {
    fontSize: 24,
    margin: `0 20px 0 0`,
  },
};

export default function UserMenu() {
  const { user, logIn, logOut } = useContext(ctx);

  return (
    <div style={styles.container}>
      {user ? (
        <>
          <p style={styles.tag}>{user}</p>
          <Button type="button" onClick={logOut}>
            Log out
          </Button>
        </>
      ) : (
        <Button type="button" onClick={logIn}>
          Log in
        </Button>
      )}
    </div>
  );
}
