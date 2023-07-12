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
import { Spinner, ContactForm, ContactList } from '../index';

export const App1 = () => {
  // const contacts = useSelector(selectContact);
  const { data: contacts, isFetching } = useFetchContactsQuery();
  console.log(contacts);

  return (
    <Container>
      <Section title="Phonebook">
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
