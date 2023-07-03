import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../redux/userSlice';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const login = useSelector(state => state.user.login);
  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div>
      {login}
      <button onClick={handleLogOut} style={{ marginLeft: 12 }}>
        Log out
      </button>
    </div>
  );
};
