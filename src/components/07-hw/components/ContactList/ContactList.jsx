import { ContactItem } from '../ContactItem';
import { List } from './ContactList.styled';

export const ContactList = ({ todos }) => {
  return (
    <List>
      {todos.map(({ id, name, phone }) => (
        <ContactItem id={id} name={name} phone={phone} />
      ))}
    </List>
  );
};

// !=============
// import { useSelector } from 'react-redux';
// import { visibleContacts } from 'redux/selectors';

// export const ContactList = () => {
//   const contacts = useSelector(visibleContacts);

//   return (
// <List>
//   {todos.map(({ id, name, phone }) => (
//     <ContactItem id={id} name={name} phone={phone} />
//   ))}
// </List>;
//   );
// };
