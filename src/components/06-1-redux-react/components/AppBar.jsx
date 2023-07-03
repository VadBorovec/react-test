import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserMenu } from './UserMenu';

export const AppBar = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: 8,
        borderBottom: '1px solid black',
        marginBottom: 12,
      }}
    >
      <nav>
        {!isLoggedIn && (
          <Link
            to="/login"
            style={{
              padding: 8,
              marginRight: 12,
            }}
          >
            Log in
          </Link>
        )}

        {isLoggedIn && (
          <>
            {' '}
            <Link
              to="/dashboard"
              style={{
                padding: 8,
                marginRight: 12,
              }}
            >
              Dashboard
            </Link>
            <Link
              to="/player"
              style={{
                padding: 8,
                marginRight: 12,
              }}
            >
              Player
            </Link>
            <Link
              to="/reader"
              style={{
                padding: 8,
                marginRight: 12,
              }}
            >
              Reader
            </Link>
            <Link
              to="/images"
              style={{
                padding: 8,
                marginRight: 12,
              }}
            >
              Images
            </Link>
          </>
        )}
      </nav>
      {isLoggedIn && <UserMenu />}
    </header>
  );
};
