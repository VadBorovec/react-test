import { Container, Section } from '../ui';
// import {
//   ContactFilter,
//   ContactForm,
//   ContactList,
//   ContactStats,
// } from 'components';

// import { useSelector } from 'react-redux';
// import { selectContact } from 'redux/selectors';
import { useFetchContactsQuery } from '../../redux/contacts/contactsSlice';
import { Spinner, ContactForm, ContactList, CreateTodo } from '../index';

export const App1 = () => {
  // const contacts = useSelector(selectContact);
  const { data: contacts, isFetching } = useFetchContactsQuery();
  console.log(contacts);

  return (
    <Container>
      <Section title="Phonebook">
        {/* <CreateTodo /> */}
        <ContactForm />
        {isFetching && <Spinner />}
        {/* {contacts && <ContactList contacts={contacts} />} */}

        {/* <ContactFilter /> */}
        {/* <ContactStats /> */}

        {contacts && <ContactList contacts={contacts} />}
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
