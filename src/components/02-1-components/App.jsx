import React, { Component } from 'react';
import shortid from 'shortid';

import Container from 'components/02-1-components/ui/Container';
import Section from 'components/02-1-components//ui/Section';

import Form from 'components/02-1-components/Form';
import Counter from 'components/02-1-components/Counter';
import Dropdown from 'components/02-1-components/Dropdown';
import ColorPicker from 'components/02-1-components/ColorPicker';
import TodoList from 'components/02-1-components/TodoList';
import TodoEditor from 'components/02-1-components/TodoEditor';
import TodoFilter from 'components/02-1-components/TodoFilter';
import TodoStats from 'components/02-1-components/TodoStats';

import colorPickerOptions from 'components/02-1-components/ColorPicker/colorPickerOptions.json';
import initialTodos from 'components/02-1-components/TodoList/todos.json';

class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
  };

  addTodo = text => {
    console.log(text);
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };
    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    console.log(todoId);
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    const { todos, filter } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <Container>
        <Form onSubmit={this.formSubmitHandler} />
        <Counter initialValue={10} />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />
        <Section title="Todo list">
          <TodoEditor onSubmit={this.addTodo} />
          <TodoFilter value={filter} onChange={this.changeFilter} />
          <TodoStats
            totalTodoCount={totalTodoCount}
            completedTodoCount={completedTodoCount}
          />

          <TodoList
            todos={visibleTodos}
            onDeleteTodo={this.deleteTodo}
            onToggleCompleted={this.toggleCompleted}
          />
        </Section>
      </Container>
    );
  }
}

export default App;
