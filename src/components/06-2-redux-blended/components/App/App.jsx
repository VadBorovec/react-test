import {
  Container,
  Filter,
  Header,
  SearchForm,
  Section,
  Text,
  TodoList,
} from '../index';
import { useSelector } from 'react-redux';
import { selectTodo } from '../../redux/selectors';

export const App1 = () => {
  const todos = useSelector(selectTodo);

  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />

          {todos.length === 0 ? (
            <Text textAlign="center">There are no any todos ... </Text>
          ) : (
            <>
              <Filter />
              <TodoList />
            </>
          )}
        </Container>
      </Section>
    </>
  );
};
