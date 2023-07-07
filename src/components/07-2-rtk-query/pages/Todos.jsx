import { Link, useLocation } from 'react-router-dom';
import { useFetchTodosQuery } from '../redux/todos/todoSlice';
import { Spinner, TodoList } from '../components';

export const TodosPage = () => {
  const location = useLocation();
  const { data: todos, isFetching } = useFetchTodosQuery();

  return (
    <div>
      <Link to="/create" state={{ from: location }}>
        Create todo
      </Link>
      {isFetching && <Spinner />}
      {todos && <TodoList todos={todos} />}
    </div>
  );
};
