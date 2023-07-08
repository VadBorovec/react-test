import { Navigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useCreateTodoMutation } from '../redux/todos/todoSlice';
import { Spinner } from '../components';

export const CreateTodoPage = () => {
  const [createTodo, { isLoading, isSuccess }] = useCreateTodoMutation();

  const handleSubmit = async e => {
    e.preventDefault();
    const contactName = e.currentTarget.elements.name.value;
    const contactPhone = e.currentTarget.elements.phone.value;
    createTodo({
      contactName,
      contactPhone,
    });
    e.currentTarget.reset();

    toast.success('Заметка создана!');
  };

  return (
    <>
      {isSuccess && <Navigate replace to="/todos" />}
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <input type="phone" name="phone" />
        <button type="submit" disabled={isLoading}>
          {isLoading && <Spinner size={12} />}
          Create
        </button>
      </form>
    </>
  );
};
