import { Link, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/store';

export const Layout = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.myValue);
  return (
    <div>
      <button type="button" onClick={() => dispatch(decrement(1))}>
        decrement 1
      </button>
      {value}
      <button type="button" onClick={() => dispatch(increment(1))}>
        increment 1
      </button>
    </div>
  );
};

// !================
// export const Layout = () => {
//   return (
//     <div>

//       <nav>
//         <Link to="/player">Player</Link>
//         <br />
//         <Link to="/reader">Reader</Link>
//         <br />
//         <Link to="/images">Images</Link>
//       </nav>
//       <Outlet />
//     </div>
//   );
// };
