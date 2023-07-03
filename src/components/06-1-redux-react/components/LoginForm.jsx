import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../redux/userSlice';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    //   console.log(form.elements.login.value);
    dispatch(logIn(form.elements.login.value));
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="login" />
      <br />
      <button type="submit">Log in</button>
    </form>
  );
};
