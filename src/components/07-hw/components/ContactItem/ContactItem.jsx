import { Spinner } from '../Spinner';
import { Button } from '../ui';
import { Item, Name, Number } from './ContactItem.styled';

import { useDeleteContactMutation } from '../../redux/contacts/contactsSlice';

export const ContactItem = ({ id, name, phone }) => {
  const [deleteTodo, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <Item>
      <Name>{name}</Name>
      <Number>{phone}</Number>
      <Button onClick={() => deleteTodo(id)} disabled={isDeleting}>
        {isDeleting && <Spinner size={12} />}
        Delete
      </Button>
    </Item>
  );
};
