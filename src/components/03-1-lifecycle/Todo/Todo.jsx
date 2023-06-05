import React from 'react';
import IconButton from '../ui/IconButton';
import { ReactComponent as DeleteIcon } from '../icons/delete.svg';

const Todo = ({ text, completed, onToggleCompleted, onDeleteTodo }) => (
  <>
    <input
      type="checkbox"
      className="TodoList__checkbox"
      checked={completed}
      onChange={onToggleCompleted}
    />
    <p className="TodoList__text">{text}</p>
    <IconButton onClick={onDeleteTodo} aria-label="delete todo">
      <DeleteIcon width="32" height="32" />
    </IconButton>
  </>
);

export default Todo;
