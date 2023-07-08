import { Container, Section, Text } from '../../components/ui';
// import {
//   ContactFilter,
//   ContactForm,
//   ContactList,
//   ContactStats,
// } from 'components';

// import { useSelector } from 'react-redux';
// import { selectContact } from 'redux/selectors';
import { useFetchContactsQuery } from '../../redux/contacts/contactsSlice';
import { Spinner, ContactList, CreateTodo } from '../index';

export const App1 = () => {
  // const contacts = useSelector(selectContact);
  const { data, isFetching } = useFetchContactsQuery();

  return (
    <Container>
      <Section title="Phonebook">
        <CreateTodo />
        {isFetching && <Spinner />}
        {data && <ContactList todos={data} />}
        {/* <ContactForm />
        <ContactFilter />
        <ContactStats />

        {contacts.length === 0 ? (
          <Text textAlign="center">There are no any numbers...</Text>
        ) : (
          <ContactList />
        )} */}
      </Section>
    </Container>
  );
};

// !====
// // import { lazy } from 'react';
// import { Toaster } from 'react-hot-toast';
// import { Routes, Route } from 'react-router-dom';
// import { Layout } from '../Layout';

// import { CreateTodoPage, HomePage, TodosPage, NotFoundView } from '../../pages';

// // const { HomePage, TodosPage, CreateTodoPage, NotFoundView } = lazy(() =>
// //   import('../../pages')
// // );

// export const App1 = () => {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<HomePage />} />
//           <Route path="todos" element={<TodosPage />} />
//           <Route path="create" element={<CreateTodoPage />} />
//           <Route element={<NotFoundView />} />
//         </Route>
//       </Routes>
//       <Toaster position="top-right" />
//     </>
//   );
// };
