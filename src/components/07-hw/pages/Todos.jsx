import { Link, useLocation } from 'react-router-dom';
import { useFetchTodosQuery } from '../redux/contacts/contactsSlice';
import { Spinner, TodoList } from '../components';

export const TodosPage = () => {
  const location = useLocation();
  const { data, isFetching } = useFetchTodosQuery();

  return (
    <div>
      <Link to="/create" state={{ from: location }}>
        Create todo
      </Link>
      {isFetching && <Spinner />}
      {data && <TodoList todos={data} />}
    </div>
  );
};
