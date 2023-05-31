import React, { Component } from 'react';
import Container from 'components/02-1-components/ui/Container';
import Section from 'components/02-1-components//ui/Section';

import Form from 'components/02-1-components/Form';
import Counter from 'components/02-1-components/Counter';
import Dropdown from 'components/02-1-components/Dropdown';
import ColorPicker from 'components/02-1-components/ColorPicker';
import TodoList from 'components/02-1-components/TodoList';
import TodoEditor from 'components/02-1-components/TodoEditor';

import colorPickerOptions from 'components/02-1-components/ColorPicker/colorPickerOptions.json';
import initialTodos from 'components/02-1-components/TodoList/todos.json';

class App extends Component {
  state = {
    todos: initialTodos,
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
          <TodoEditor />
          <div>
            <p>Общее кол-во: {totalTodoCount}</p>
            <p>Кол-во выполненных: {completedTodoCount}</p>
          </div>
          <TodoList
            todos={todos}
            onDeleteTodo={this.deleteTodo}
            onToggleCompleted={this.toggleCompleted}
          />
        </Section>
      </Container>
    );
  }
}

export default App;
