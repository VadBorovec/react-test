import { useUser } from './userContext';
import Button from 'styles/ui/Button/Button';

export const UserMenu = () => {
  const { isLoggedIn, username, logIn, logOut } = useUser();

  return (
    <div>
      {isLoggedIn && <p>{username}</p>}
      {isLoggedIn ? (
        <Button onClick={logOut}>Log out</Button>
      ) : (
        <Button onClick={logIn}>Log in</Button>
      )}
    </div>
  );
};
