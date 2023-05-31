import React from 'react';
import './TodoStats.scss';

const TodoStats = ({ totalTodoCount, completedTodoCount }) => (
  <div className="Todostats__wrap">
    <p className="Todostats__text">Общее кол-во: {totalTodoCount}</p>
    <p className="Todostats__text">Кол-во выполненных: {completedTodoCount}</p>
  </div>
);

export default TodoStats;
