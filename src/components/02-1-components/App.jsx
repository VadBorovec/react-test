import React, { Component } from 'react';
// import {
//   Form,
//   Counter,
//   Dropdown,
//   ColorPicker,
//   TodoList,
// } from 'components/02-1-components';
import Counter from 'components/02-1-components/Counter';
import Dropdown from 'components/02-1-components/Dropdown';
import ColorPicker from 'components/02-1-components/ColorPicker';
import TodoList from 'components/02-1-components/TodoList';
import Form from 'components/02-1-components/Form/Form';
import Container from 'components/02-1-components/ui/Container/Container';
import initialTodos from 'components/02-1-components/TodoList/todos.json';
import Section from './ui/Section/Section';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    const { todos } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
    return (
      <Container>
        <Form onSubmit={this.formSubmitHandler} />
        <Counter initialValue={10} />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />
        <Section title="Todo list">
          <div>
            <p>Общее кол-во: {totalTodoCount}</p>
            <p>Кол-во выполненных: {completedTodoCount}</p>
          </div>
          <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
        </Section>
      </Container>
    );
  }
}

export default App;
