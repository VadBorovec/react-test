import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Layout';
// import { Player } from '../pages/Player';
// import { Images } from '../pages/Images';
// import { Reader } from '../pages/Reader';
// import publications from '../publications.json';
import { LoginPage } from '../pages/LoginPage';

export const App1 = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
// !===========
// const NotFound = () => {
//   return <h1>NotFound</h1>;
// };

// export const App1 = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route path="/player" element={<Player />} />
//         <Route path="/reader" element={<Reader items={publications} />} />
//         <Route path="/images" element={<Images />} />
//         <Route path="/products/:pId" element={<div>Product page</div>} />
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Route>
//     </Routes>
//   );
// };
