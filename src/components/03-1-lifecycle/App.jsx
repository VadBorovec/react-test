import React, { Component } from 'react';
import shortid from 'shortid';

import Container from './ui/Container';
import Section from './ui/Section';
import Button from './ui/Button';

import TodoList from './TodoList';
import TodoEditor from './TodoEditor';
import TodoFilter from './TodoFilter';
import TodoStats from './TodoStats';

import Modal from './Modal';
import Clock from './Clock';
import Tabs from './Tabs';
import IconButton from './ui/IconButton';

import { ReactComponent as AddIcon } from './icons/add.svg';

import tabs from './Tabs/tabs.json';
import initialTodos from './TodoList/todos.json';

class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    // console.log('App componentDidMount');

    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);
    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('App componentDidUpdate');

    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;

    if (nextTodos !== prevTodos) {
      // console.log('Обновилось поле todos, записываю todos в хранилище');
      localStorage.setItem('todos', JSON.stringify(nextTodos));
    }

    // if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
    //   this.toggleModal();
    // }
  }

  addTodo = text => {
    if (text.trim() === '') {
      window.alert(
        'Please enter your message. An empty field cannot be saved.'
      );
      return;
    }

    // console.log(text);
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };
    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));

    this.toggleModal();
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    // console.log(todoId);
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

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    // console.log('Add render');

    const { todos, filter, showModal } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <Container>
        <Section title="Todo list">
          <IconButton onClick={this.toggleModal} aria-label="add todo">
            <AddIcon width="40" height="40" />
          </IconButton>
          <br />

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

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <Button type="button" onClick={this.toggleModal}>
              x
            </Button>
            <Section title="Todo Editor">
              <TodoEditor onSubmit={this.addTodo} />
            </Section>
          </Modal>
        )}

        <Section title="Modal">
          <Button type="button" onClick={this.toggleModal}>
            open modal
          </Button>
        </Section>

        <Section title="Tabs">
          <Tabs items={tabs} />
        </Section>

        <Section title="Clock">
          <Clock />
        </Section>
      </Container>
    );
  }
}

export default App;
