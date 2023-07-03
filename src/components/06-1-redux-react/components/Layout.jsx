import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
};

// !==========useReducer=========
// import { useDispatch, useSelector } from 'react-redux';
// import { increment, decrement } from '../redux/myValue/myValue';

// export const Layout = () => {
//   const dispatch = useDispatch();
//   const value = useSelector(state => state.myValue);
//   return (
//     <div>
//       <button type="button" onClick={() => dispatch(decrement(1))}>
//         decrement 1
//       </button>
//       {value}
//       <button type="button" onClick={() => dispatch(increment(1))}>
//         increment 1
//       </button>
//     </div>
//   );
// };
