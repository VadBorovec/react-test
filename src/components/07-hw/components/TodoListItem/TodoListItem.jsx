import { useDeleteTodoMutation } from '../../redux/todos/todoSlice';
import { Spinner } from '../Spinner';

export const TodoListItem = ({ id, name, phone }) => {
  const [deleteTodo, { isLoading: isDeleting }] = useDeleteTodoMutation();

  return (
    <li>
      {name} - {phone}
      <button onClick={() => deleteTodo(id)} disabled={isDeleting}>
        {isDeleting && <Spinner size={12} />}
        Delete
      </button>
    </li>
  );
};
