import { Spinner } from '../Spinner';
import { Button } from '../ui';
import { Item, Name, Number } from './ContactItem.styled';

import { useDeleteTodoMutation } from '../../redux/todos/todoSlice';

export const ContactItem = ({ id, name, phone }) => {
  const [deleteTodo, { isLoading: isDeleting }] = useDeleteTodoMutation();

  return (
    <Item>
      <Name>{name}</Name>
      <Number>{phone}</Number>
      {/* <Button onClick={() => deleteContact(id)} disabled={isDeleting}>
        {isDeleting && <Spinner size={12} />}
        Delete
      </Button> */}

      <Button onClick={() => deleteTodo(id)} disabled={isDeleting}>
        {isDeleting && <Spinner size={12} />}
        Delete
      </Button>
    </Item>
  );
};
