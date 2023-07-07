// import { lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../Layout';

import { CreateTodoPage, HomePage, TodosPage, NotFoundView } from '../../pages';

// const { HomePage, TodosPage, CreateTodoPage, NotFoundView } = lazy(() =>
//   import('../../pages')
// );

export const App1 = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="todos" element={<TodosPage />} />
          <Route path="create" element={<CreateTodoPage />} />
          <Route element={<NotFoundView />} />
        </Route>
      </Routes>
      <Toaster position="top-right" />
    </>
  );
};
